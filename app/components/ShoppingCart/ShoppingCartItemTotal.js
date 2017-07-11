import React from 'react'
import BtnDefault from '../Generic/BtnDefault'

export default React.createClass({
	getInitialState(){
		return({
			userInfo: this.props.userInfo,
			sale_total: 0,
			list_total: 0
		})
	},
	calculate(){
		let sale_total=0
		let list_total=0
		for(var i=0; i<this.props.itemArray.length; i++){
			sale_total = sale_total +(Number(this.props.itemArray[i].quantity+'') * Number(this.props.itemArray[i].sale_price+''))
			list_total = list_total +(Number(this.props.itemArray[i].quantity+'') * Number(this.props.itemArray[i].list_price+''))

						console.log(sale_total)
									console.log(list_total)
		}
		this.setState({
			sale_total: sale_total,
			list_total: list_total
		})
	},
	componentWillReceiveProps(){
		console.log(this.props)
		this.calculate()
	},
	render(){
		let sale_total=0
		let list_total=0
		for(var i=0; i<this.props.itemArray.length; i++){
			sale_total = sale_total +(Number(this.props.itemArray[i].quantity+'') * Number(this.props.itemArray[i].sale_price+''))
			list_total = list_total +(Number(this.props.itemArray[i].quantity+'') * Number(this.props.itemArray[i].list_price+''))
		}

		return(<div>
			<div className='container'>
				<div className ="row">
					<hr/>
					Savings: {' $'+ parseFloat(Number(list_total+'') - Number(sale_total+'')).toFixed(2)}
					<br/>
					Sale Total: {' $'+parseFloat(sale_total).toFixed(2)}
				</div>
			</div>
			</div>
		)
	}
})
