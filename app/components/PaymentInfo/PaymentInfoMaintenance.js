import React from 'react'
import BtnDefault from '../Generic/BtnDefault'

export default React.createClass({
	getInitialState(){
		return({
			payment_id: this.props.paymentdetail.payment_id,
			account_name: this.props.paymentdetail.account_name,
			payment_type: this.props.paymentdetail.payment_type,
			account_number: this.props.paymentdetail.account_number,
			exp_date: this.props.paymentdetail.exp_date,
			ccv: this.props.paymentdetail.ccv
		})
	},
	onSubmit(){
		alert('setting data')
		this.props.action.onSubmit({
			user_id: this.props.userinfo.user_id,
			payment_id: this.state.payment_id,
			account_name: this.state.account_name,
			payment_type: this.state.payment_type,
			account_number: this.state.account_number,
			status: 'ACTIVE',
			exp_date: this.state.exp_date,
			ccv: this.state.ccv
		})
	},
	onCancel(){
		this.props.action.onCancel()
	},
	onAccountNameChanged(event){
		this.setState({account_name: event.target.value})
	},
	onAccountTypeChanged(event){
		this.setState({payment_type: event.target.value})
	},
	onAccountNumberChanged(event){
		this.setState({account_number: event.target.value})
	},
	onExpDateChanged(event){
		this.setState({exp_date: event.target.value})
	},
	onSecurityCodeChanged(event){
		this.setState({ccv: event.target.value})
	},
	render(){
		return (
			<div>
			    <div className="row hoverable">
					<div className="col s12">
						<div className="card-panel lilac">
							<i><b> Name On Account:</b></i>
							<input type="text"
								name="accountname"
								value = {this.state.account_name}
								onChange={this.onAccountNameChanged}/>
							<i><b> Account Type: </b></i>
							<input type="text"
								name="accounttype"
								value = {this.state.payment_type}
								onChange={this.onAccountTypeChanged}/>
							<i><b> Account Number: </b></i>
							<input type="text"
								name="accountnumber"
								value = {this.state.account_number}
								onChange={this.onAccountNumberChanged}/>
							<i><b> Expiration Date: </b></i>
							<input type="date"
								name="expdate"
								value = {this.state.exp_date}
								onChange={this.onExpDateChanged}/>
							<i><b> Security Code: </b></i>
							<input type="text"
								name="securitycode"
								value = {this.state.ccv}
								onChange={this.onSecurityCodeChanged}/>

							<div className = "container">
								<div className="row">
									<div className="col s2">
										<BtnDefault action={this.onSubmit}
											tooltipposition="below"
											tooltip="Save"
											buttonicon="save"
											data_item_key={this.state.payment_id}
										/>
									</div>
									<div className="col s2">
										<BtnDefault action={this.onCancel}
											tooltipposition="below"
											tooltip="Cancel"
											buttonicon="undo"
											data_item_key={this.state.payment_id}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
})
