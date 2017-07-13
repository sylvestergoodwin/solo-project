import React from 'react'
import SearchItemResultsDisplay from './SearchItemResultsDisplay'

// This component will be responsible for displaying the items of the search result
// The information will be passed to the component as a javascript object containing
// an array of all the matches. This component will pass each individual item that matches
// to a ItemSearchResultsDisplay component for display to the user
export default React.createClass({
	getInitialState(){
		return ({
			searchResult: this.props.searchResult
		})
	},
render(){
		let display = ''
//		console.log(this.props)
//		console.log(this.state)
//		console.log(this.props.resultcount)
		if (this.props.resultcount == 0) {
			display = <div><h5><i>No Items matches the search criteria</i></h5></div>
		} else {
			display = <div>
									<div>
										{this.props.searchResult}
									</div>
									<div className="clearfix">
									</div>
								</div>
		}
		return (
			<div>
				{display}
			</div>
		)
	}
})
