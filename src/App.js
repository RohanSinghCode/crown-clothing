import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';


import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './components/firebase/firebase.util'; 

class App extends React.Component {

  constructor() 
  {
    super();
    this.state  = {
      currentUser:null
    };
  }

  unsubscribeFromAuth=null;

  componentDidMount()
  {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser:user});
    });
  }

  componentWillUnmount()
  {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
      <Route component={HomePage} path='/' exact />
      <Route component={ShopPage} path='/shop' />
      <Route component={SignInAndSignUpPage} path='/signin' />
      </Switch>
      
      </div>
    );
  }

}

export default App;
