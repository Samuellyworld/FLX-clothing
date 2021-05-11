import React from 'react';
import { Switch, Route} from 'react-router-dom';

import './App.scss';
import {auth, createUserProfileDocument} from './firebase/firebase';
import Header from './components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import ShopPage from './Pages/Shop/ShopPage';
import SignInAndSignUpPage from './Pages/Sign-in-and-sign-up/Sign-in-and-sign-up';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      currentUser : null
    }
  }

unsubscribeFromAuth = null;

componentDidMount() {
  this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
    if(userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        this.setState({
          currentUser: {
            id : snapShot.id,
            ...snapShot.data()
          }
        })
      })
    } else {
      this.setState({currentUser : userAuth})
    }
  })
}

componentWillUnmount() {
  this.unsubscribeFromAuth();

}

render() {
  return (
    <div className="App">
    <Header currentUser ={this.state.currentUser} />
     <Switch>
       <Route exact path='/' component={HomePage} />
       <Route path='/shop' component={ShopPage} />
       <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}
}
export default App;
