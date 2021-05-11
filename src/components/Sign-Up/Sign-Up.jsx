import React from 'react';
import FormInput from '../Form-Input/Form-Input';
import CustomButton from '../Custom-Button/Custom-Button';
import {auth, createUserProfileDocument} from '../../firebase/firebase';

import './Sign-Up.scss';

class SignUp extends React.Component {
  constructor() {
  	super();
  	this.state = {
  		displayName : '',
  		email : '',
  		password : '',
  		confirmPassword : ''
  	}
  }

  handleSubmit = async event => {
  	event.preventDefault();
  	const {displayName, email, password, confirmPassword} = this.state;
  	 if(password !== confirmPassword ) {
  	 	alert('Passwords dont match')
  	 	return;
  	 }
  	 try {
  	 	const{user} = await auth.createUserWithEmailAndPassword(email, password);
  	 	await createUserProfileDocument(user, {displayName})
  	 	this.setState({
  	 	  displayName : '',
  		  email : '',
  	  	  password : '',
  	      confirmPassword : ''
  	 	})
  	 } catch(err){
  	 	console.log('There is an error creating user', err)
  	 }
  }

  handleChange = event => {
  	const{name, value} = event.target;
  	this.setState({[name] : value});
  }

  render() {
  	     const {displayName, email, password, confirmPassword} = this.state;
  	return (

  		<div className='sign-up'>
  		  <h2 className='title'> I do not have an account </h2>
  		  <span> Sign up with your email and password </span>
  		  <form className='sign-up-form' onSubmit={this.handleSubmit} >
  		   <FormInput type='text'
  		   			   name='displayName' 
  		   			   value={displayName} 
  		   			   onChange={this.handleChange}
  		   			   label='Display Name' 
  		   			    required />
  		   	<FormInput type='email'
  		   			   name='email' 
  		   			   value={email} 
  		   			   onChange={this.handleChange}
  		   			   label='Email' 
  		   			   required />	 
  		   	<FormInput type='password'
  		   			   name='password' 
  		   			   value={password} 
  		   			   onChange={this.handleChange}
  		   			   label='Password' 
  		   			   required />
  		   	<FormInput type='password'
  		   			   name='confirmPassword' 
  		   			   value={confirmPassword} 
  		   			   onChange={this.handleChange}
  		   			   label='Confirm Password' 
  		   			   required />		  	
  		    <CustomButton type='submit'>
  		     Sign Up
  		    </CustomButton>
  		  </form>
  		</div>

  		)
  }

}

export default SignUp;