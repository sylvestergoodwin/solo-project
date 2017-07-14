import React from 'react'
import BtnDefault from '../Generic/BtnDefault'
import axios from 'axios'

export default React.createClass({
	getInitialState(){
		return ({
			item_id: this.props.itemdetail.item_id,
			title: this.props.itemdetail.title,
			description: this.props.itemdetail.description,
			list_price: this.props.itemdetail.list_price,
			sale_price: this.props.itemdetail.sale_price,
			quantity: this.props.itemdetail.quantity,
			link: this.props.itemdetail.link,
			keywords: this.props.itemdetail.keywords
		})
	},

	setItemdetail(item){
		console.log(item)
		this.setState({
			description: item.description,
			link: item.link,
			title: item.title,
			keywords: item.keywords
		})
	},

	componentDidMount(){
		const setItem = this.setItemdetail
		axios.get('/api/itemdetail', {
				params: {
				  item_id: this.state.item_id
				}
			})
			.then(function (result){
					console.log(result)
					const item = result.data[0]
					setItem(item)
			})
	},

	onSubmit(){
		alert('on is submit')
		console.log(this.state)
		this.props.action.onSubmit({
			item_id: this.state.item_id,
			title: this.state.title,
			description: this.state.description,
			list_price: this.state.list_price,
			sale_price: this.state.sale_price,
			quantity: this.state.quantity,
			link: this.state.link,
			keywords: this.state.keywords})
	},
	onCancel(){
		this.props.action.onCancel()
	},
	onNameChanged(event){
		this.setState({title: event.target.value})
	},
	onDescriptionChanged(event){
		this.setState({description: event.target.value})
	},
	onSalePriceChanged(event){
		this.setState({sale_price: event.target.value})
	},
	onListPriceChanged(event){
		this.setState({list_price: event.target.value})
	},
	onFileLocationChanged(event){
		this.setState({link: event.target.value})
	},
	onKeywordChanged(event){
		this.setState({keywords: event.target.value})
	},
	onQuantityChanged(event){
		this.setState({quantity: event.target.value})
	},

	render(){
		console.log(this.props)
		console.log(this.state)
		return (
			<div className="row hoverable">
			<div className = 'container'>
					<div className="col s12">
						<div className="card-panel">

							<div className="col s12">
								<input id="icon_prefix1"
									type="text"
									name="itemname"
									value = {this.state.title}
									onChange={this.onNameChanged}
								/>
								<label htmlFor="icon_prefix1"><i><b>Item Name</b></i></label>
							</div>

							<div className=" col s12">
								<textarea id="icon_prefix2"
									className="materialize-textarea"
									name="description"
									value = {this.state.description}
									onChange={this.onDescriptionChanged}>
								</textarea>
								<label htmlFor="icon_prefix2"><i><b>Description</b></i></label>
							</div>


							<div className="col s12">
								<input id="icon_prefix3"
									type="number"
									name="SalePrice"
									value = {this.state.sale_price}
									onChange={this.onSalePriceChanged}
								/>
								<label htmlFor="icon_prefix3"><i><b> Sale Price:</b></i></label>
							</div>

							<div className="col s12">
								<input id="icon_prefix4"
									type="number"
									name="ListPrice"
									value = {this.state.list_price}
									onChange={this.onListPriceChanged}
								/>
								<label htmlFor="icon_prefix4"><i><b> List Price:</b></i></label>
							</div>

							<div className="col s12">
								<input id="icon_prefix5"
									type="number"
									name="Quantity"
									value = {this.state.quantity}
									onChange={this.onQuantityChanged}
								/>
								<label htmlFor="icon_prefix5"><i><b> Quantity:</b></i></label>
							</div>

 							<div className="col s12">
								<input id="icon_prefix6"
									type="text"
									name="ImageFile"
									value = {this.state.link}
									onChange={this.onFileLocationChanged}
								/>
								<label htmlFor="icon_prefix6"><i><b> Image File:</b></i></label>
							</div>

   						<div className="col s12">
								<input id="icon_prefix7"
									type="text"
									name="searchkeyword"
									value = {this.state.keywords}
									onChange={this.onKeywordChanged}
								/>
								<label htmlFor="icon_prefix7"><i><b> Search Keywords:</b></i></label>
							</div>
						</div>
					</div>
					<div>
						<div className="col s1">
							<BtnDefault action={this.onSubmit}
								tooltipposition="below"
								tooltip="Save"
								buttonicon="save"
								data_item_key={this.props.item_id}
							/>
						</div>
						<div className="col s1">
							<BtnDefault action={this.onCancel}
								tooltipposition="below"
								tooltip="Cancel"
								buttonicon="undo"
								data_item_key={this.props.item_id}
							/>
						</div>
						<br/>
					</div>
				</div>
			</div>
		)
	}
})
