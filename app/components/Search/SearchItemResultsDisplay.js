import React from 'react'
import ItemDetailDisplay from '../Item/ItemDetailDisplay'
import axios from 'axios'

export default React.createClass({
	getInitialState(){
		return({
			itemdetail: {
				description: this.props.itemdetail.description,
				title: this.props.itemdetail.title,
				list_price: 0,
				sale_price: 0,
				quantity: 0,
				link: this.props.itemdetail.link,
				item_id: this.props.itemdetail.item_id
			}
		})
	},

	setItemdetail(item){
		var itemdetail = this.state.itemdetail
			itemdetail.list_price = item.list_price
			itemdetail.sale_price = item.sale_price
			itemdetail.quantity = item.quantity
		this.setState(itemdetail: itemdetail)
	},

	componentDidMount(){
		const setItem = this.setItemdetail
		console.log(this.props)
		console.log(this.state)
		axios.get( '/api/item', {
				params: {
					item_id: this.state.itemdetail.item_id,
					user_id: this.props.userinfo.user_id
				}
			} )
			.then( function ( result ) {
				const item = result.data[0]
				console.log(item)
				setItem(item)
			} )
			.catch( function ( error ) {
				alert( 'failed' )
			} );
	},

	render(){
		return (
			<div>
				<div className="search-item">
					<ItemDetailDisplay
						itemdetail={this.state.itemdetail}
						userinfo={this.props.userinfo}
						/>
				</div>
				<div className="clearfix"></div>
			</div>
		)
	}
})
