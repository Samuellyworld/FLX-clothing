import React from 'react';

import { Switch, Route, Redirect} from 'react-router-dom';

import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user-action';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user-selectors';

import {auth, createUserProfileDocument, addCollectionAndDocuments} from './firebase/firebase';
import {selectCollectionsForPreview} from './redux/shop/shop-selectors';

import './App.scss';
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage';
import Header from './components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import ShopPage from './Pages/Shop/ShopPage';
import SignInAndSignUpPage from './Pages/Sign-in-and-sign-up/Sign-in-and-sign-up';

class App extends React.Component {
unsubscribeFromAuth = null;
componentDidMount() {
   const {setCurrentUser, collectionArray} = this.props
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
      addCollectionAndDocuments('collections', collectionArray)
  
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
       <Route path='/signin' render={() => this.props.currentUser ? (<Redirect to ='/' />): (<SignInAndSignUpPage />) } />
       <Route exact path='/checkout' component={CheckoutPage} /> 
      </Switch>
    </div>
  );
}
}
const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser,
  collectionArray : selectCollectionsForPreview
})

const mapDispatchToProps = dispatch => ({
 setCurrentUser: user => dispatch(setCurrentUser(user)),
 
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
