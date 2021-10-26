import React,{Component} from 'react';
import FormInput from '../Form-Input/Form-Input';
import CustomButton from '../Custom-Button/Custom-Button';
import {auth} from '../../firebase/firebase';
import './Password-Reset.scss';
import Message from '../Message/Message';

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
}

  sendResetEmail = e => {
    e.preventDefault();
    auth.sendPasswordResetEmail(this.state.email)
      .then(() => {
          this.setState({emailLinkHasBeenSent : true});
        setTimeout(
        	() => {
        		this.setState({emailLinkHasBeenSent : false})
        	}, 2000)
      })
      .catch((err) => {

         if(err.code === 'auth/network-request-failed') {
           this.setState({error: 'A network error has occurred, Check your network router or perhaps try again later'})
           setTimeout(() => {
             this.setState({error : null})
         }, 2000)
       }
       else {
        this.setState({error : `${this.state.email} hasn't been registered with FLX clothing Ltd, Kindly register`})
        setTimeout(
          () => {
            this.setState({error : null})
          }, 2000)
       }
     }
    )
  }

	render(){
		const {email,emailLinkHasBeenSent,error} = this.state
		return(
           
           <div className='password-reset'>
            <h1 className='request'> REQUEST A PASSWORD RESET </h1>
            {
            	emailLinkHasBeenSent && (
            		<Message valid>
            			AN EMAIL HAS BEEN SENT TO YOU!
            		</Message>
            		)
            }
            {
            	error !== null && (
            		 <Message error>
            		  {error}
            		 </Message>
            		)
            }
            <form onSubmit={this.sendResetEmail}>
	            <FormInput handleChange={this.handleChange}
	              className="form-input"
	              type='email' 
	  		 	  name='email' 
	  		 	  value={email}
	  		 	  label ='Email Address'
	  		 		    required />
	  		 	<CustomButton type='submit'
	  		 		isGoogleSignIn>
	  		 	 PASSWORD RESET 
	  		 	 </CustomButton>
  		 	</form>
           </div>
			)
	}
} 


export default PasswordReset;
