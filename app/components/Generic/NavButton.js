import React from 'react'
import {NavLink} from 'react-router-dom';

// displays the butions used as the navigation based on the user logged in
export default React.createClass({
	render(){
		// not logged in
		if (this.props.userinfo.user_id === -1000){
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
		// logged in Admin
		else if ((this.props.userinfo.user_id !== -1000) && (this.props.userinfo.access_type ==='ADMIN')){
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
		// logged in Basic User
		else {
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
