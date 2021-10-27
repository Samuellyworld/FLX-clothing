import React,{Component} from 'react';

import FormInput from '../Form-Input/Form-Input';
import CustomButton from '../Custom-Button/Custom-Button';
import {auth, signInWithGoogle} from '../../firebase/firebase';
import {Link} from 'react-router-dom';
import Message from "../Message/Message";

import './Sign-In.scss';


class SignIn extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
       email: '',
       password: '',
       error : null
  		}
  	
  }

  handleSubmit = async e => {
  	e.preventDefault();
    const{email, password} = this.state;
     try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({email: '', password: ''})
     } catch(err) {
       if(err.code === 'auth/user-not-found') {
          this.setState({error: `There is no user registered with ${email}`})
         setTimeout(() => {
            this.setState({error : null})
         }, 2000)
       }
       if(err.code === 'auth/wrong-password') {
            this.setState({error: 'Incorrect Password'})
       setTimeout(() => {
          this.setState({error : null})
       }, 2000)
       }
       if(err.code === 'auth/network-request-failed') {
           this.setState({error: 'A network error has occurred, Check your network router or perhaps try again later'})
       setTimeout(() => {
          this.setState({error : null})
       }, 2000)
       }
       if(err.code === 'auth/too-many-requests') {
        this.setState({error: 'Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.'})
       setTimeout(() => {
          this.setState({error : null})
       }, 4000)
       }
    
      
       console.log('Error Signing in', err)
     }
  
  }

  handleChange = e => {
  	const {name, value} = e.target
    this.setState({[name]: value})
  }

  render() {
    const {error} = this.state
  	return(
  		<div className='sign-in'>
  		 <h2 className='title'> I already have an account </h2>
  		 <span> Sign in with your email and password </span>
          {
         error !== null && (
            <Message error>
              {error}
            </Message> 
           )
        }
  		 <form onSubmit={this.handleSubmit} >

  		 	<FormInput handleChange={this.handleChange}
  		 		   type='email' 
  		 		   name='email' 
  		 		   value={this.state.email}
  		 		   label ='Email'
  		 		    required />

  		 	 <FormInput handleChange={this.handleChange}
  		 	       type='password' 
                autoComplete='password'
  		 		   name='password' 
  		 		   value={this.state.password}
  		 		   label='Password'
  		 		    required />
  		 	 
        <div className='buttons'>
  		 	 <CustomButton type='submit'>
  		 	  Sign in
  		 	 </CustomButton>
          <CustomButton type='button'
             onClick={signInWithGoogle} isGoogleSignIn>
           Sign in with Google
          </CustomButton>
         </div>
  		 </form>
       <Link to='/reset password' className='forgot'> 
        Forgot your password? 
       </Link>
  		</div>

  		)
  }
}

export default SignIn;