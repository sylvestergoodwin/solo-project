import React from 'react'
import UsernameDisplay from './UsernameDisplay'
import BtnDefault from '../Generic/BtnDefault'


export default React.createClass({
	getInitialState(){
		return({
			emailaddress: '',
			password: '',
			confirmpassword: '',
			newuser: false
		})
	},
	// allows the enter key to initiate the search no need for a button
	onKeyPressed(e){
		if (e.key == 'Enter'){
			this.onSubmit()
		}
	},
	onNewuser(){
		this.setState({newuser: true})
	},
	onEmailAddressChanged(event){
		this.setState({
			emailaddress: event.target.value
		})
	},
	onPasswordChanged(event){
		this.setState({password: event.target.value})
	},
	onConfirmPasswordChanged(event){
		this.setState({confirmpassword: event.target.value})
	},
	onNewUser(){
		this.setState({newuser: true})
	},
	onSubmit(){
		this.props.actionlist.onSubmit({email: this.state.emailaddress,
			username: this.state.emailaddress,
			password: this.state.password,
			newuser: this.state.newuser
		})
		this.setState({
			newuser: false
		})
	},
	onCancel(){
		this.props.actionlist.onCancel()
	},
	render(){
		let allowchange = <div></div>
		let allowchangebutton = <div>
			<BtnDefault action={this.onNewUser}
				tooltipposition="below"
				tooltip="New User"
				buttonicon="person_pin"
				/>
			</div>
		if (this.state.newuser) {
			allowchangebutton = <div></div>
			allowchange = <div>
				 <i><b>Confirm Password: </b></i>
				 <input type="text"
					 name="confirmpassword"
					 value = {this.state.confirmpassword}
					 onKeyPress={this.onKeyPressed}
					 onChange={this.onConfirmPasswordChanged}
				 />
			 </div>
		}
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
									onKeyPress={this.onKeyPressed}
									onChange={this.onEmailAddressChanged}
								/>
								<i><b>Password: </b></i>
								<input type="text"
									name="password"
									value = {this.state.password}
									onKeyPress={this.onKeyPressed}
									onChange={this.onPasswordChanged}
								/>
								{allowchange}
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
							{allowchangebutton}
						</div>
					</div>
				</div>
			</div>
		)
	}
})
