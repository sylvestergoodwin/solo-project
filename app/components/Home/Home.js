import React from 'react'
import HomePanel from './HomePanel'


export default React.createClass({

	render(){

		var grouptype = {}

		return (
			<div>
				<h1>HOME </h1>
				<HomePanel
					userinfo={this.props.userinfo}
					itemgroup={grouptype}
				/>

			</div>
		)
	}
})
