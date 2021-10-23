import React from 'react';

import { Switch, Route, Redirect} from 'react-router-dom';

import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user-action';
import {setMediaQuery} from './redux/media-query/query-action';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user-selectors';
import {checkForMobileQuery} from './redux/media-query/query-action';

import {auth, createUserProfileDocument} from './firebase/firebase';

import './App.scss';
import PasswordReset from './components/Password-Reset/Password-Reset';
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage';
import Header from './components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import ShopPage from './Pages/Shop/ShopPage';
import SignInAndSignUpPage from './Pages/Sign-in-and-sign-up/Sign-in-and-sign-up';

class App extends React.Component {
unsubscribeFromAuth = null;

mediaQuery = window.matchMedia("(max-width: 600px)")

MobileMedia = (mediaQuery) => {
  if(mediaQuery.matches) {
     this.props.checkCurrentMedia()
  }
}

componentDidMount() {
   const {setCurrentUser} = this.props
   this.mediaQuery.addListener(this.MobileMedia)

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

componentDidUpdate() {
    this.mediaQuery.addListener(this.MobileMedia)
}

componentWillUnmount() {
  this.unsubscribeFromAuth();

}

render() {
  return (
    <div className="App">
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
 setMediaQuery: media => dispatch(setMediaQuery(media)),
 checkCurrentMedia : () => dispatch(checkForMobileQuery())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
