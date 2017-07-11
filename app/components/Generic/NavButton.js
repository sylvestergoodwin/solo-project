import React from 'react'
import {NavLink} from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup' // ES6

export default React.createClass({
	render(){
		if (false){ //(this.props.userinfo.user_id === -1000){
			return(
				<div>
					<div className="fixed-action-btn">
						<a className="btn-floating btn-large red">
							<i className="large material-icons">menu</i>
						</a>
						<ul>
							<li>
								<NavLink to="/ShoppingCart"
									className="btn-floating purple tooltipped"
									data-position="left"
									data-tooltip="Shopping Cart" >
									<i className="material-icons">shopping_cart</i>
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			)
		}
		else if (true) {//(!(this.props.userinfo.user_id === -1000) && (this.props.userinfo.access_type ==='ADMIN')){
//			<li>
//				<NavLink to="/User"
//					className="btn-floating purple tooltipped"
//					data-position="left"
//					data-tooltip="User Maintenance" >
//					<i className="material-icons">account_circle</i>
//				</NavLink>
//			</li>

			return(
				<div>
					<div className="fixed-action-btn">
						<a className="btn-floating btn-large red">
							<i className="large material-icons">menu</i>
						</a>
						<ul>
							<li>
								<NavLink to="/Search"
									className="btn-floating purple tooltipped"
									data-position="left"
									data-tooltip="User Maintenance" >
									<i className="material-icons">search</i>
								</NavLink>
							</li>
							<li><NavLink to="/Address"
									className="btn-floating purple tooltipped"
									data-position="left"
									data-tooltip="Address Maintenance" >
									<i className="material-icons">home</i>
								</NavLink>
							</li>
							<li>
								<NavLink to="/PaymentInfo"
									className="btn-floating purple tooltipped"
									data-position="left"
									data-tooltip="Update Payment Info" >
									<i className="material-icons">credit_card</i>
								</NavLink>
							</li>
							<li>
								<NavLink to="/Item"
									className="btn-floating purple tooltipped"
									data-position="left"
									data-tooltip="Item Maintenance" >
									<i className="material-icons">add_circle</i>
								</NavLink>
							</li>
							<li>
								<NavLink to="/ShoppingCart"
									className="btn-floating purple tooltipped"
									data-position="left"
									data-tooltip="Shopping Cart" >
									<i className="material-icons">shopping_cart</i>
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			)
		}
		else {
			return(
				<div>
					<div className="fixed-action-btn">
						<a className="btn-floating btn-large red">
							<i className="large material-icons">menu</i>
						</a>
						<ul>
							<li><NavLink to="/Address"
									className="btn-floating purple tooltipped"
									data-position="left"
									data-tooltip="Address Maintenance" >
									<i className="material-icons">home</i>
								</NavLink>
							</li>
							<li>
								<NavLink to="/PaymentInfo"
									className="btn-floating purple tooltipped"
									data-position="left"
									data-tooltip="Update Payment Info" >
									<i className="material-icons">credit_card</i>
								</NavLink>
							</li>
							<li>
								<NavLink to="/ShoppingCart"
									className="btn-floating purple tooltipped"
									data-position="left"
									data-tooltip="Shopping Cart" >
									<i className="material-icons">shopping_cart</i>
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			)
		}
	}
})
