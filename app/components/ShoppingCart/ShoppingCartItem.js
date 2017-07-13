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
		const total = parseFloat(Number(this.props.itemdetail.quantity+'') * Number(this.props.itemdetail.sale_price+'')).toFixed(2)
		return(<div>
				<div className='container'>
					<div className="card-panel">
						<div className ="row">
							<div className="col s3">
								<img className="activator" src={this.props.itemdetail.link} width='40'/>
							</div>
							<div className="col s3">
							List Price: {' $'+parseFloat(this.props.itemdetail.list_price).toFixed(2)}
							</div>
							<div className="col s3">
							Sale Price: {' $'+parseFloat(this.props.itemdetail.sale_price).toFixed(2)}
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
