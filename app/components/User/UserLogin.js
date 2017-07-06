import React from 'react'
import UsernameDisplay from './UsernameDisplay'
import BtnDefault from '../Generic/BtnDefault'


export default React.createClass({
	getInitialState(){
		return({
			emailaddress: '',
			password: '',
			confirmpassword: ''
		})
	},
	onEmailAddressChanged(event){
		this.setState({
			emailaddress: event.target.value
		})
	},
	onPasswordChanged(event){
		this.setState({password: event.target.value})
	},
	onSubmit(){
		this.props.actionlist.onSubmit({email: this.state.emailaddress,
			username: this.state.emailaddress,
			password: this.state.password
		})
	},
	onCancel(){
		this.props.actionlist.onCancel()
	},
	render(){
		return (
			<div className='container search-text'>
			  <div className="hoverable">
					<div className="row">
						<div className="col s12">
							<div className="card-panel">
								<i><b>Email Address:</b></i>
								<input type="text"
									name="emailaddress"
									value = {this.state.emailaddress}
									onChange={this.onEmailAddressChanged}
								/>
								<i><b>Password: </b></i>
								<input type="text"
									name="email"
									value = {this.state.password}
									onChange={this.onPasswordChanged}
								/>
							</div>
						</div>
					</div>
					<div className="row">
						<div>
							<div className="col s2">
								<BtnDefault action={this.onSubmit}
									tooltipposition="below"
									tooltip="Save"
									buttonicon="save"
								/>
							</div>
							<div className="col s2">
								<BtnDefault action={this.onCancel}
									tooltipposition="below"
									tooltip="Cancel"
									buttonicon="undo"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
})
