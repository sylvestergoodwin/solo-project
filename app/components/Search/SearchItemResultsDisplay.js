import React from 'react'
import ItemDetailDisplay from '../Item/ItemDetailDisplay'

export default React.createClass({
	render(){		
		return (
			<div>
				<div className="search-item">
					<ItemDetailDisplay itemdetail={this.props.itemdetail}/>
				</div>
				<div className="clearfix"></div>
			</div>
		)
	}
})

