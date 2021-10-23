import React from 'react';
import SignIn from '../../components/Sign-In/Sign-In';
import SignUp from '../../components/Sign-Up/Sign-Up';
import {selectMobileMedia} from '../../redux/media-query/query-selectors';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './Sign-in-and-sign-up.scss';

const SignInAndSignUpPage = ({currentMedia}) => (
     <div className='sign-in-and-sign-up'> 
          
             {  currentMedia ?

                <SignIn/> :
                (
                  <div className='sign-in-and-sign-up'>
                     <SignIn /> 
                     <SignUp/>
                 </div>
               ) 
            }
      </div>
	)

const mapStateToProps = createStructuredSelector({
     currentMedia : selectMobileMedia
})
export default connect(mapStateToProps)(SignInAndSignUpPage);