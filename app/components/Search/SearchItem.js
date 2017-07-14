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
		if (this.props.navcontrol === 'HOME'){
			this.onSearchSubmitted(this.props.search)
		}
	},

	buildComponentList( itemList,  itemArray) {
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
    	})
	    .then( function ( result ) {
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
	    	})
	    .catch( function ( error ) {
	        console.log( error );
	    });
	},

	render(){
		if (this.props.navcontrol !== 'HOME') {
			return (
				<div>
					<div>
						<SearchItemCriteria
							userinfo={this.props.userinfo}
							action={this.onSearchSubmitted}
						/>
					</div>
					<div>
						<SearchItemResultsList
						  searchResult={this.state.searchResult}
							userinfo={this.props.userinfo}
							resultcount={this.state.searchArray.length}
						/>
					</div>
				</div>
			)
		} else {
			return (
				<div>
					<SearchItemResultsList
						searchResult={this.state.searchResult}
						userinfo={this.props.userinfo}
						resultcount={this.state.searchArray.length}
					/>
				</div>
			)
		}
	}
})
