import React from 'react'
import BtnDefault from '../Generic/BtnDefault'
import axios from 'axios'

export default React.createClass({
	getInitialState(){
		return({
			userInfo: this.props.userInfo,
			itemdetail: this.props.itemdetail
		})
	},

	setItemdetail(item){
		console.log(item)
		var itemdetail = this.state.itemdetail
			itemdetail.description = item.description
			itemdetail.link = item.link
			itemdetail.title = item.title

				console.log(itemdetail)
		this.setState(itemdetail: itemdetail)
	},

	componentDidMount(){
		const setItem = this.setItemdetail
		console.log(this.props)
		console.log(this.state)
		axios.get('/api/itemdetail', {
				params: {
				  item_id: this.state.itemdetail.item_id
				}
			})
			.then(function (result){

				console.log(result)
				const item = result.data[0]
				setItem(item)
			})
	},

	render(){
		console.log(this.props)
		const total = parseFloat(Number(this.state.itemdetail.quantity+'') * Number(this.state.itemdetail.sale_price+'')).toFixed(2)
		return(<div>
				<div className='container'>
					<div className="card-panel">
						<div className ="row">
							<div className="col s3">
								<img className="activator" src={this.state.itemdetail.link} width='40'/>
							</div>
							<div className="col s3">
							List Price: {' $'+parseFloat(this.state.itemdetail.list_price).toFixed(2)}
							</div>
							<div className="col s3">
							Sale Price: {' $'+parseFloat(this.state.itemdetail.sale_price).toFixed(2)}
							<br/>
							Quantity: {' '+this.state.itemdetail.quantity}
							</div>

							<div className="col s3">
							Total Price: {' $'+total}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
})
