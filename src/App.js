import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/Homepage.component';
import Shop from './pages/shop/Shop.component';
import Header from './components/header/Header.component';
import SignInAndSignUpPage from './pages/Sign-In-Up/Sign-In-Up.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
