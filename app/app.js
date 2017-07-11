import React from 'react';

import {BrowserRouter as Router, Route, NavLink, IndexRoute, IndexRedirect} from 'react-router-dom';
import Banner from './components/Generic/Banner'
import Footer from './components/Generic/Footer'
import AppRoutes from './AppRoutes'
import axios from 'axios'


export default React.createClass ({
  getInitialState(){
    return({
      userinfo: {
        username: 'John Jones',
        user_id: -1000 ,
        access_type: 'ADMIN'
      },
      shoppingcart: 0,
      userLogin: this.userLogin,
      setUserinfo: this.setUserinfo
    })
  },

  userLogin(user){

    const setUserinfo = this.setUserinfo
    if(user.newuser){
      axios.post( '/api/user', user)
        .then( function ( result ) {
          setUserinfo({
            username: result.data[0].username,
            user_id: result.data[0].user_id,
            access_type: result.data[0].access_type
          })
        })
        .catch( function ( error ) {
          alert( 'failed' )
          console.log( error );
        });
    }else {
      axios.get( '/api/user', {
          params: {
            username: user.username,
            password: user.password
          }
        })
        .then( function ( result ) {
          setUserinfo({
            username: result.data[0].username,
            user_id: result.data[0].user_id,
            access_type: result.data[0].access_type
          })
        })
        .catch( function ( error ) {
          alert( 'failed' )
          console.log( error );
        });
    }

  },

  setUserinfo(userinfo){
    this.setState({userinfo: userinfo})
  },
  setShoppingCartCount(shoppingcart){
    this.setState({shoppingcart: shoppingcart})
  },

  render () {
    const userLogin = this.userLogin

		return (
			<div className="container">
				<header>
				  <Banner
            userinfo={this.state.userinfo}
            shoppingcart={this.state.shoppingcart}
            userLogin={this.state.userLogin}
          />
				</header>
				<AppRoutes
          userinfo={this.state.userinfo}
        />
				<Footer />
			</div>

		);
	}
})
