import React from 'react'
import SearchItemResultsDisplay from './SearchItemResultsDisplay'

// This component will be responsible for displaying the items of the search result
// The information will be passed to the component as a javascript object containing
// an array of all the matches. This component will pass each individual item that matches
// to a ItemSearchResultsDisplay component for display to the user
export default React.createClass({

	buildList: function (){
		var itemList = [];

		for (var i=0; i < 4; i++){
			itemList.push({
				name: 'Woman in Red',
				description: 'Image of a woman in red sitting alone in a room',
				price: 23.92
			});
		}

		return itemList.map(function(item){
			return (<div className="item-detail-display" >
						<div className="row hoverable left">
							<div className="col s12">
								<div className="card-panel">
									<SearchItemResultsDisplay itemdetail={item}/>
								</div>
							</div>
						</div>
					</div>
			)
		});
	},


	render(){
		var gg = this.buildList()

		return (
			<div>
				<div>{gg}</div>
				<div className="clearfix"></div>
			</div>
		)
	}
})
