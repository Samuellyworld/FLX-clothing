import React from 'react';
import { Switch, Route} from 'react-router-dom';

import './App.scss';
import HomePage from './Pages/HomePage/HomePage';

const HatsPage = () => (
	<div>
	 <h1> hatsPage </h1>
    </div>
	)


function App() {
  return (
    <div className="App">
     <Switch>
       <Route exact path='/' component={HomePage} />
       <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
