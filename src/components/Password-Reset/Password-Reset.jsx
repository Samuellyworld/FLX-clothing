import React,{Component} from 'react';
import FormInput from '../Form-Input/Form-Input';
import CustomButton from '../Custom-Button/Custom-Botton';

class PasswordReset extends Component{
	constructor() {
		super();
		this.state = {
			email : '',
			emailLinkHasBeenSent : false,
			error : ''
		}
	}

	render(){
		return(
           <div className='password-reset'>
            <h1 classname='request'> REQUEST A PASSWORD RESET </h1>
            <FormInput
              type='email' 
  		 	  name='email' 
  		 	  value={this.state.email}
  		 	  label ='Email'
  		 		    required />
  		 	<CustomButton> PASSWORD RESET </CustomButton>
           </div>
			)
	}
} 


export default PasswordReset;
