import React from 'react'
import BtnDefault from '../Generic/BtnDefault'
import axios from 'axios'

export default React.createClass({
	getInitialState(){
		return({
			buyamount: 0,
			itemdetail: this.props.itemdetail
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
		axios.get( '/api/item', {
				params: {
					item_id: this.state.itemdetail.item_id,
					user_id: this.props.userinfo.user_id
				}
			} )
			.then( function ( result ) {
				const item = result.data[0]
				setItem(item)
			} )
			.catch( function ( error ) {
				alert( 'failed' )
			} );
	},

	onQuantityChanged(event){
		this.setState({buyamount: event.target.value})
	},
	onBuy(){
		console.log(this.props)
		axios.post('/api/shopping', {
				item_id: this.state.itemdetail.item_id,
				quantity: this.state.buyamount,
				user_id: this.props.userinfo.user_id,
				list_price: this.props.itemdetail.list_price,
				sale_price: this.props.itemdetail.sale_price,
				current_inventory: this.props.itemdetail.quantity
			})
			.then(function (response) {
				console.log(response);
				})
			.catch(function (error) {
				console.log(error);
				});
	},
	render(){
		let allowBuy = <div></div>
		if (this.props.navcontrol != 'Item'){
			allowBuy = <div>
					<hr/>
					<BtnDefault action={this.onBuy}
						tooltipposition=""
						tooltip="Add to shopping cart"
						buttonicon="shopping_cart"
					/>
		 			<span className="col s3  right">
						<input id="icon_prefix1"
							type="number"
							name="quantity"
							value = {this.state.buyamount}
							onChange={this.onQuantityChanged}
						/>
						<label htmlFor="icon_prefix1"><i><b>Order</b></i></label>
					</span>
				</div>
		}
		return (
			<div className="item-base">
				<div className="card">
					<div className="card-image waves-effect waves-block waves-light">
						<img className="activator" src={this.state.itemdetail.link}/>
					</div>
					<div className="card-content">
						<span className="card-title activator grey-text text-darken-4">
							{this.state.itemdetail.title}
							<i className="btn btn-floating material-icons right pulse">more_vert</i>
						</span>
					</div>
					<div className="card-reveal">
						<span className="card-title grey-text text-darken-4">
							{this.state.itemdetail.name}
							<i className="material-icons right">close</i>
						</span>

						<p><b><i>Description:</i></b><br/>{this.state.itemdetail.description}</p>
						<p><b><i>Keywords:</i></b><br/>{this.state.itemdetail.keywords}</p>
						<p><b><i>List Price:</i></b> ${this.state.itemdetail.list_price} </p>
						<p><b><i>Sale Price:</i></b> ${this.state.itemdetail.sale_price} </p>
						<p><b><i>Available Quantity:</i></b> {this.state.itemdetail.quantity} </p>
						<div>
							{allowBuy}
						</div>
					</div>
				</div>
			</div>
		)
	}
})
