import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'


import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

import Header from './components/header/header.component'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    //a firebase auth method, onAuthStateChanged method, open subscription 
    // async request, the user has a uid property
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if(userAuth){
          const userRef = await createUserProfileDocument(userAuth)
          //firestore method onSnapshot, using the .data() method will give by the object properties  
          userRef.onSnapshot(snapShot => {
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            })
            // console.log(this.state)
          }) 
        }else{
          //when the user log out. set currentUser back to null
          this.setState({
            currentUser: userAuth
          })
        }
    })
  }

  componentWillUnmount(){
    //to close the subscription, prevent memory leak
    this.unsubscribeFromAuth()
  }


  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>

        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>

      </div>
    )
  }
}

export default App;
