import React from 'react'
import HomePanel from './HomePanel'
import SearchItem from '../Search/SearchItem'


export default React.createClass({

	render(){

		var grouptype = {}

		return (
			<div>
				<SearchItem
					userinfo={this.props.userinfo}
					itemgroup={grouptype}
					origin='HOME'
				/>

			</div>
		)
	}
})
