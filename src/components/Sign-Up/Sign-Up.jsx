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
      error : null,
      userHasRegistered: false,
      redirectToHomePage : false
  	}
  }


  handleSubmit = event => {
  	event.preventDefault();
  	const {displayName, email, password, confirmPassword} = this.state;
  	 if(password !== confirmPassword ) {
  	 	// alert('Passwords dont match')
       this.setState({ error : 'Passwords do not match'});
       setTimeout(() => {
         this.setState({
           error : null
         })
       }, 2000)
  	 	return;
  	 }
  	 	// const{user} = await auth.createUserWithEmailAndPassword(email, password);
       const {user} =  auth.createUserWithEmailAndPassword(email, password)
         //   await user.sendEmailVerification();
         //    await auth.signOut();
         // alert("Email sent");
      .then(() => createUserProfileDocument(user, {displayName}))
  	 	 .then(() => {
          this.setState({
           displayName : '',
            email : '',
          password : '',
          confirmPassword : '',
          userHasRegistered: true,
          redirectToHomePage: false
       })
          setTimeout(() => {
            this.setState({redirectToHomePage : true})
          }, 2000)
          setTimeout(() => {
            this.setState({
              userHasRegistered: false,
              redirectToHomePage : false
            })
          }, 20000)
          
        })

  	.catch((err)=> {
       if(err.code === 'auth/network-request-failed') {
           this.setState({error: 'A network error has occurred, Check your network router or perhaps try again later'})
       setTimeout(() => {
          this.setState({error : null})
       }, 2000)
       }

      if(err.code === 'auth/email-already-in-use') {
         this.setState({ error : `${this.state.email} is already in use by another account.` });
       setTimeout(() => {
         this.setState({
           error : null
         })
       }, 2000)
      }
      if(err.code === 'auth/invalid-email' ) {
         this.setState({ error : 'The email address is badly formatted.' });
       setTimeout(() => {
         this.setState({
           error : null
         })
       }, 2000)
      }
  	 	console.log('There is an error creating user', err)
  	 })
  }

  handleChange = event => {
  	const{name, value} = event.target;
  	this.setState({[name] : value});
  }

  render() {
  	     const {displayName, email, password, confirmPassword, error,userHasRegistered} = this.state;
  	return (

  		<div className='sign-up'>
  		  <h2 className='title'> I do not have an account </h2>
  		  <span> Sign up with your email and password </span>
        {
          userHasRegistered && (
           <div>
            <Message valid>
             Hello {displayName},Your account has been registered successfully! 
            </Message>
     
            {
              this.state.redirectToHomePage && (

                   <Message valid>
                    Redirecting to Homepage ...
                   </Message>
          
                )
             
            }
            </div>

             )

        }
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
                 autoComplete='password'
  		   			   name='password' 
                 title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number, (min.8 characters)" 
                 pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
  		   			   value={password} 
  		   			   onChange={this.handleChange}
  		   			   label='Password' 
  		   			   required />
  		   	<FormInput type='password'
                autoComplete='new-password'
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