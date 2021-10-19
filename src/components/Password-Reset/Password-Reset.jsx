import React,{Component} from 'react';
import FormInput from '../Form-Input/Form-Input';
import CustomButton from '../Custom-Button/Custom-Button';
import {auth} from '../../firebase/firebase';

class PasswordReset extends Component{
	constructor() {
		super();
		this.state = {
			email : '',
			emailLinkHasBeenSent : false,
			error : null
		}
	}

handleChange = e => {
	const{value, name} = e.target
     this.setState({[name]: value})
     console.log(value);
}

  sendResetEmail = e => {
    e.preventDefault();
    auth.sendPasswordResetEmail(this.state.email)
      .then(() => {
          this.setState({emailLinkHasBeenSent : true});
        setTimeout(
        	() => {
        		this.setState({emailLinkHasBeenSent : false})
        	}, 3000)
      })
      .catch(() => {
        this.setState({error : "This Email account hasn't been registered to FLX clothing Ltd"})
        setTimeout(
        	() => {
        		this.setState({error : null})
        	}, 3000)
      });
  }

	render(){
		const {email,emailLinkHasBeenSent,error} = this.state
		return(
           
           <div className='password-reset'>
            <h1 className='request'> REQUEST A PASSWORD RESET </h1>
            {
            	emailLinkHasBeenSent && (
            		<div className='email-link'>
            			AN EMAIL HAS BEEN SENT TO YOU!
            		</div>
            		)
            }
            {
            	error !== null && (
            		 <div className='error'>
            		  {error}
            		 </div>
            		)
            }
            <form onSubmit={this.sendResetEmail}>
	            <FormInput handleChange={this.handleChange}
	              type='email' 
	  		 	  name='email' 
	  		 	  value={email}
	  		 	  label ='Email Address'
	  		 		    required />
	  		 	<CustomButton type='submit'
	  		 		>
	  		 	 PASSWORD RESET 
	  		 	 </CustomButton>
  		 	</form>
           </div>
			)
	}
} 


export default PasswordReset;
