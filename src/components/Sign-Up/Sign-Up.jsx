import React from 'react';
import FormInput from '../Form-Input/Form-Input';
import CustomButton from '../Custom-Button/Custom-Button';
import {auth, createUserProfileDocument} from '../../firebase/firebase';
import Message from '../Message/Message';

import './Sign-Up.scss';

class SignUp extends React.Component {
  constructor() {
  	super();
  	this.state = {
  		displayName : '',
  		email : '',
  		password : '',
  		confirmPassword : '',
      error : null
  	}
  }

  handleSubmit = async event => {
  	event.preventDefault();
  	const {displayName, email, password, confirmPassword} = this.state;
  	 if(password !== confirmPassword ) {
  	 	// alert('Passwords dont match')
       this.setState({ error : 'Passwords do not match'});
       setTimeout(() => {
         this.setState({
           error : null
         })
       }, 3000)
  	 	return;
  	 }
  	 try {
  	 	// const{user} = await auth.createUserWithEmailAndPassword(email, password);
       const {user} = await auth.createUserWithEmailAndPassword(email, password)
         //   await user.sendEmailVerification();
         //    await auth.signOut();
         // alert("Email sent");
      
  	 	await createUserProfileDocument(user, {displayName})

  	 	this.setState({
  	 	  displayName : '',
  		  email : '',
  	  	  password : '',
  	      confirmPassword : ''
  	 	})
  	 } catch(err){
       this.setState({ error : `An Email account with ${this.state.email} already existed!` });
       setTimeout(() => {
         this.setState({
           error : null
         })
       }, 2000)
  	 	console.log('There is an error creating user', err)
  	 }
  }

  handleChange = event => {
  	const{name, value} = event.target;
  	this.setState({[name] : value});
  }

  render() {
  	     const {displayName, email, password, confirmPassword, error} = this.state;
  	return (

  		<div className='sign-up'>
  		  <h2 className='title'> I do not have an account </h2>
  		  <span> Sign up with your email and password </span>
        {
         error !== null && (
            <Message error>
              {error}
            </Message> 
           )
        }
  		  <form className='sign-up-form' onSubmit={this.handleSubmit} >
  		   <FormInput type='text'
                 minLength="3" maxLength="100" 
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
                 title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number, (min.8 characters)" 
                 pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
  		   			   value={password} 
  		   			   onChange={this.handleChange}
  		   			   label='Password' 
  		   			   required />
  		   	<FormInput type='password'
  		   			   name='confirmPassword' 
  		   			   value={confirmPassword} 
                 pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
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