import React from 'react';
import { Switch, Route} from 'react-router-dom';

import './App.scss';
import {auth} from './firebase/firebase';
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
  this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
    this.setState({ currentUser : user})
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
