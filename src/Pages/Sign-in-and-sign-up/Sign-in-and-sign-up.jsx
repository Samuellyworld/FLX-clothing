import React from 'react';
import SignIn from '../../components/Sign-In/Sign-In';
import SignUp from '../../components/Sign-Up/Sign-Up';

import './Sign-in-and-sign-up.scss';

const SignInAndSignUpPage = () => (
     <div className='sign-in-and-sign-up'> 
     <SignIn /> 
     <SignUp/>
     </div>
	)

export default SignInAndSignUpPage;