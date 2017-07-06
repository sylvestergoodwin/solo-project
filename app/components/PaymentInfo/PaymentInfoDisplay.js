import React from 'react'

export default React.createClass({
	getInitialState(){
		return({
			accountnumberdisplay: this.props.paymentdetail.account_number,
		})
	},
	render(){
		return (
			<div>
				Account Name: {this.props.paymentdetail.account_name}
				<br/>
				Account #: {this.state.accountnumberdisplay}
				<br/>
				Exp. Date: {this.props.paymentdetail.exp_date}
			</div>
		)
	}
})
