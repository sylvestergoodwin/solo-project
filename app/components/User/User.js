import React from 'react'

import UsernameMaintenance from './UsernameMaintenance'
import UsernameDisplay from './UsernameDisplay'
import UserLogin from './UserLogin'
import UserPasswordMaintenance from './UserPasswordMaintenance'


export default React.createClass({
	render(){
		return (
			<div>
				<h1>USER</h1>

				<UsernameMaintenance userinfo={this.props.userinfo}/>

				<UsernameDisplay userinfo={this.props.userinfo} username="default Text"/>

				<UserLogin userinfo={this.props.userinfo} username="default Text"/>

				<UserPasswordMaintenance username="default Text"/>
			</div>
		)
	}
})
