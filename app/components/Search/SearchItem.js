import React from 'react'
import SearchItemCriteria from './SearchItemCriteria'
import SearchItemResultsList from './SearchItemResultsList'
import SearchItemResultsDisplay from './SearchItemResultsDisplay'
import axios from 'axios'

export default React.createClass({

	getInitialState(){
		return ({
			searchResult: {},
			searchArray: []
		})
	},

	componentDidMount(){
	//	this.onSearchSubmitted('OOOJJJBGG')
	},

		buildComponentList( itemList,  itemArray) {
//			console.log(itemList)
//			console.log(itemArray)
	    this.setState( {
	      searchResult: itemList,
				searchArray: itemArray
	    } )
	  },


	onSearchSubmitted(searchText){
		const buildComponentList = this.buildComponentList
		const userinfo = this.props.userinfo
		axios.get( '/api/search', {
		        params: {
		          searchText: searchText,
		          user_id: this.props.userinfo.user_id
		        }
		      } )
		      .then( function ( result ) {
						console.log("success")
						console.log(result.data)

							const resultlist = result.data.map(function(item){
								return (
									<div>
										<div className="item-detail-display" >
											<div className="row hoverable left">
												<div className="col s12">
													<div className="card-panel">
														<SearchItemResultsDisplay
															itemdetail={item}
															userinfo={userinfo}
															key={item.item_id}
															/>
													</div>
												</div>
											</div>
										</div>
									</div>
								)
							})

							buildComponentList(resultlist, result.data)

		      } )
		      .catch( function ( error ) {
		        console.log( error );
		      } );
	},
	render(){
//		console.log(this.props)
//		console.log(this.state)
//		console.log(this.state.searchArray.length)
		return (
			<div>
				<SearchItemCriteria
					userinfo={this.props.userinfo}
					action={this.onSearchSubmitted}
				/>
				<SearchItemResultsList
				  searchResult={this.state.searchResult}
					userinfo={this.props.userinfo}
					resultcount={this.state.searchArray.length}
				/>
			</div>
		)
	}
})
