import React,{Component} from 'react';

import FormInput from '../Form-Input/Form-Input';
import CustomButton from '../Custom-Button/Custom-Button';
import './Sign-In.scss';


class SignIn extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
       email: '',
       password: ''
  		}
  	
  }

  handleSubmit = e => {
  	e.preventDefault();
  	this.setState({email: '', password: ''})
  }

  handleChange = e => {
  	const {name, value} = e.target
    this.setState({[name]: value})
  }

  render() {
  	return(
  		<div className='sign-in'>
  		 <h2> I already have an account </h2>
  		 <span> Sign in with your email and password </span>

  		 <form onSubmit={this.handleSubmit} >

  		 	<FormInput handleChange={this.handleChange}
  		 		   type='email' 
  		 		   name='email' 
  		 		   value={this.state.email}
  		 		   label ='email'
  		 		    required />

  		 	 <FormInput handleChange={this.handleChange}
  		 	       type='password' 
  		 		   name='password' 
  		 		   value={this.state.password}
  		 		   label='password'
  		 		    required />
  		 	 

  		 	 <CustomButton type='submit'>
  		 	  Sign in
  		 	 </CustomButton>

  		 </form>
  		</div>

  		)
  }
}

export default SignIn;