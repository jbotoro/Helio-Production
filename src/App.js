import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom'
import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-signup/sign-in-and-signup.component'

import { connect } from 'react-redux';

import {selectCurrentUser} from './redux/user/user.selectors'
import {createStructuredSelector} from 'reselect'
import CheckoutPage from './pages/checkout/checkout.component'


class App extends React.Component {


  unsubscribeFromAuth = null;

  componentDidMount() {

    // const { setCurrentUser} = this.props;
    
    // // this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
    // //   if(userAuth){
    // //     const userRef = await createUserProfileDocument(userAuth)

    // //     userRef.onSnapshot(snapShot => {
    // //       setCurrentUser({
    // //         id: snapShot.id,
    // //         ...snapShot.data()
    // //       })
    // //     })
    // //   }
    // //   setCurrentUser(userAuth)
    // })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route 
            exact 
            path="/signin" 
            render={() => 
            this.props.currentUser ? (
              <Redirect to='/'/>
            ) 
            : (
              <SignInAndSignUpPage/>
            )
          } />
        </Switch>
      </div>
    ); 
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})



export default connect(mapStateToProps)(App);
