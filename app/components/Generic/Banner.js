import React from 'react'
import {NavLink} from 'react-router-dom';
import SearchItemCriteria from '../Search/SearchItemCriteria'
import UsernameDisplay from '../User/UsernameDisplay'

export default React.createClass({
	onSearchSubmitted(searchText){
		alert(searchText)
	},
	render(){
		return (
			<div className="banner site-color">
				<div className="collection">
					<div className="row">
						<div className="left city-gallery-padding">
							<h1>City Gallery</h1>
						</div>

						<div className="right padding-right-10">
							<UsernameDisplay
								userinfo={this.props.userinfo}
								shoppingcart={this.props.shoppingcart}
								userLogin={this.props.userLogin}
							/>
						</div>
						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		)
	}
})
