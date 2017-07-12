import React from 'react'
import SearchItem from '../Search/SearchItem'

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
