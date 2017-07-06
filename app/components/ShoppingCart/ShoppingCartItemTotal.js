import React from 'react'
import BtnDefault from '../Generic/BtnDefault'

export default React.createClass({
	getInitialState(){
		let sale_total=0
		let list_total=0
		let saving=0
		for(var i=0; i < this.props.itemArray.length; i++){
			sale_total = sale_total +(Number(this.props.itemArray[i].quantity+'') * Number(this.props.itemArray[i].sale_price+''))
			list_total = list_total +(Number(this.props.itemArray[i].quantity+'') * Number(this.props.itemArray[i].list_price+''))
		}
		saving = (list_total - sale_total)

		return({userInfo: this.props.userInfo,
			sale_total: sale_total,
			saving: saving
		})
	},
	calculate(){
		let sale_total=0
		let list_total=0
		let saving=0
		for(var i=0; i<this.props.itemArray.length; i++){
			sale_total = sale_total +(Number(this.props.itemArray[i].quantity+'') * Number(this.props.itemArray[i].sale_price+''))
			list_total = list_total +(Number(this.props.itemArray[i].quantity+'') * Number(this.props.itemArray[i].list_price+''))
		}
		saving = (list_total - sale_total)

		this.setState({
			sale_total: sale_total,
			saving: saving
		})
	},
	componentDidMount(){
	},
	render(){

		return(<div>
			<div className='container'>
				<div className ="row">
					<hr/>
					Savings: {' $'+this.state.savings}
					<br/>
					Sale Total: {' $'+this.state.sale_total}
				</div>
			</div>
			</div>
		)
	}
})
