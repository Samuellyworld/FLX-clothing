import React from 'react';

import { Switch, Route, Redirect} from 'react-router-dom';

import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user-action';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user-selectors';

import {auth, createUserProfileDocument} from './firebase/firebase';

import './App.scss';
import {GlobalStyle} from './GlobalStyles';
import PasswordReset from './components/Password-Reset/Password-Reset';
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage';
import Header from './components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import ShopPage from './Pages/Shop/ShopPage';
import SignInAndSignUpPage from './Pages/Sign-in-and-sign-up/Sign-in-and-sign-up';

class App extends React.Component {
unsubscribeFromAuth = null;
componentDidMount() {
   const {setCurrentUser} = this.props
  this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
    if(userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        setCurrentUser({
            id : snapShot.id,
            ...snapShot.data()
        })
      })
    } 
      setCurrentUser(userAuth);
      
  
  })
}

componentWillUnmount() {
  this.unsubscribeFromAuth();

}

render() {
  return (
    <div className="App">
    <GlobalStyle/>
    <Header />
     <Switch>
       <Route exact path='/' component={HomePage} />
       <Route path='/shop' component={ShopPage} />
       <Route path='/signin' render={() => this.props.currentUser ? (<Redirect to ='/' />): (<SignInAndSignUpPage />) } />
       <Route exact path='/checkout' component={CheckoutPage} /> 
       <Route exact path='/reset password' component={PasswordReset} />
      </Switch>
    </div>
  );
}
}
const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
 setCurrentUser: user => dispatch(setCurrentUser(user)),
 
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
