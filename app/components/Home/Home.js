import React from 'react'
import SearchItem from '../Search/SearchItem'

// displaed when user gets to site.
// Enhancement would be to dynamically change the list of items displayed to the user
// based on some criteria
export default React.createClass({
	render(){
		var search = ['blue']
		return (
			<div>
				<SearchItem
					userinfo={this.props.userinfo}
					search={search}
					navcontrol='HOME'
				/>
			</div>
		)
	}
})
