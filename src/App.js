import React from 'react';
import { Switch, Route} from 'react-router-dom';

import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user-action';
import './App.scss';

import {auth, createUserProfileDocument} from './firebase/firebase';
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
    <Header />
     <Switch>
       <Route exact path='/' component={HomePage} />
       <Route path='/shop' component={ShopPage} />
       <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}
}
const mapDispatchToProps = dispatch => ({
 setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
           null, 
       mapDispatchToProps)
            (App);
