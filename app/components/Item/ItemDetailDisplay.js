import React from 'react'
import BtnDefault from '../Generic/BtnDefault'
import axios from 'axios'

export default React.createClass({
	getInitialState(){
		return({
			quantity: 0
		})
	},
	onQuantityChanged(event){
		this.setState({quantity: event.target.value})
	},
	onBuy(){
		axios.post('/api/shopping', {
				item_id: this.props.itemdetail.item_id,
				quantity: this.state.quantity,
				user_id: this.props.userinfo.user_id,
				list_price: this.props.itemdetail.list_price,
				sale_price: this.props.itemdetail.sale_price
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
		let displayQuantity = ''

		if (this.props.navcontrol != 'Item'){
			allowBuy = <BtnDefault action={this.onBuy}
										tooltipposition=""
										tooltip="Add to shopping cart"
										buttonicon="shopping_cart"
									/>
			displayQuantity = 'Quantity Available: '  +  this.state.quantity
		}else {
			displayQuantity = <div className="input-field col s12">
											<input id="icon_prefix1"
												type="text"
												name="quantity"
												value = {this.state.quantity}
												onChange={this.onQuantityChanged}/>
											<label htmlFor="icon_prefix1"><i><b>Quantity</b></i></label>
										</div>
		}

		return (
			<div className="item-base">
				<div className="card">
					<div className="card-image waves-effect waves-block waves-light">
						<img className="activator" src="images/a.png"/>
					</div>
					<div className="card-content">
						<span className="card-title activator grey-text text-darken-4">
							{this.props.itemdetail.name}
							<i className="btn btn-floating material-icons right pulse">more_vert</i>
						</span>
					</div>
					<div className="card-reveal">
						<span className="card-title grey-text text-darken-4">
							{this.props.itemdetail.name}

							<i className="material-icons right">close</i>
						</span>

						<p><b><i>Description:</i></b><br/>{this.props.itemdetail.description}</p>
						<p><b><i>List Price:</i></b> ${this.props.itemdetail.list_price} </p>
						<p><b><i>Sale Price:</i></b> ${this.props.itemdetail.sale_price} </p>
						<div>
							{displayQuantity}
							{allowBuy}
						</div>
					</div>
				</div>
			</div>
		)
	}
})