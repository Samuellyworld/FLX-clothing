import React,{Component} from 'react';

import FormInput from '../Form-Input/Form-Input';
import CustomButton from '../Custom-Button/Custom-Button';
import {auth, signInWithGoogle} from '../../firebase/firebase';
import {Link} from 'react-router-dom';

import './Sign-In.scss';


class SignIn extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
       email: '',
       password: ''
  		}
  	
  }

  handleSubmit = async e => {
  	e.preventDefault();
    const{email, password} = this.state;
     try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({email: '', password: ''})
     } catch(err) {
       console.log('Error Signing in', err)
     }
  
  }

  handleChange = e => {
  	const {name, value} = e.target
    this.setState({[name]: value})
  }

  render() {
  	return(
  		<div className='sign-in'>
  		 <h2 className='title'> I already have an account </h2>
  		 <span> Sign in with your email and password </span>

  		 <form onSubmit={this.handleSubmit} >

  		 	<FormInput handleChange={this.handleChange}
  		 		   type='email' 
  		 		   name='email' 
  		 		   value={this.state.email}
  		 		   label ='Email'
  		 		    required />

  		 	 <FormInput handleChange={this.handleChange}
  		 	       type='password' 
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
           Sign in with Google Account
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