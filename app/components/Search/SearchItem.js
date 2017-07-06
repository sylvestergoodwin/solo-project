import React from 'react'
import SearchItemCriteria from './SearchItemCriteria'
import SearchItemResultsList from './SearchItemResultsList'
import SearchItemResultsDisplay from './SearchItemResultsDisplay'
import axios from 'axios'

export default React.createClass({
	onSearchSubmitted(searchText){
		alert(searchText)

		axios.get( '/api/search', {
		        params: {
		          searchText: searchText,
		          user_id: this.props.userinfo.user_id
		        }
		      } )
		      .then( function ( result ) {
						console.log("success")
						console.log(result)

		      } )
		      .catch( function ( error ) {
		        alert( 'failed' )
		        console.log( error );
		      } );
	},
	render(){
		return (
			<div>
				<SearchItemCriteria
					userinfo={this.props.userinfo}
					action={this.onSearchSubmitted}
				/>
				<SearchItemResultsList
					userinfo={this.props.userinfo}
				/>
			</div>
		)
	}
})
