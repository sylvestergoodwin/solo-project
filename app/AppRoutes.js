import React from 'react';
import Link from 'react-router'
import {BrowserRouter as Router, Route, NavLink, IndexRoute, IndexRedirect} from 'react-router-dom';
import Home from './components/Home/Home'
import Address from './components/Address/Address'
import Search from './components/Search/SearchItem'
import PaymentInfo from './components/PaymentInfo/PaymentInfo'
import PaymentInfoMaintenance from './components/PaymentInfo/PaymentInfoMaintenance'
import Item from './components/Item/Item'
import User from './components/User/User'
import ShoppingCart from './components/ShoppingCart/ShoppingCart'
import NavButton from './components/Generic/NavButton'


import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

export default React.createClass ({

  //<Route path="/User" component={ () => (<User userinfo={this.props.userinfo} />)}></Route>

    render () {
		return (
		<div>
			<Router>
				<div>
					<Route exact={true} path="/" component={ () => (<Home userinfo={this.props.userinfo} />)}></Route>
					<Route path="/Address" component={ () => (<Address userinfo={this.props.userinfo} />)} ></Route>
					<Route path="/Search" component={ () => (<Search userinfo={this.props.userinfo} navcontrol='Menu' />)}></Route>
					<Route exact path="/PaymentInfo" component={ () => (<PaymentInfo userinfo={this.props.userinfo} />)}></Route>
					<Route path="/PaymentInfo/:payment_id" component={ () => (<PaymentInfoMaintenance userinfo={this.props.userinfo} />)}></Route>
					<Route path="/Item" component={ () => (<Item userinfo={this.props.userinfo} />)}></Route>
					<Route path="/ShoppingCart" component={ () => (<ShoppingCart userinfo={this.props.userinfo} />)}></Route>

					<NavButton
            userinfo={this.props.userinfo}
          />
				</div>

			</Router>
		</div>

		);
	}
})
