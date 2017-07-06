import React from 'react'
import BtnDefault from '../Generic/BtnDefault'

export default React.createClass({
	getInitialState(){
		return({userInfo: this.props.userInfo
		})
	},
	componentDidMount(){

	},
	render(){
		const total = (Number(this.props.itemdetail.quantity+'') * Number(this.props.itemdetail.sale_price+''))
		return(<div>
			<div className='container'>
				<div className="card-panel">
				<div className ="row">
					<div className="col s3">
						<img className="activator" src="images/a.png" width='40'/>
					</div>

					<div className="col s3">
					List Price: {' $'+this.props.itemdetail.list_price}
					</div>
					<div className="col s3">
					Sale Price: {' $'+this.props.itemdetail.sale_price}
					<br/>
					Quantity: {' '+this.props.itemdetail.quantity}
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
