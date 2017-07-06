import React from 'react'
import UsernameDisplay from './UsernameDisplay'
import BtnDefault from '../Generic/BtnDefault'


export default React.createClass({
	getInitialState(){
		return({password: '',
		confirmpassword: ''})
	},
	onPasswordChanged(event){
		this.setState({password: event.target.value})
	},
	onConfirmPasswordChanged(event){
		this.setState({confirmpassword: event.target.value})
	},
	onSubmit(){
		alert('onsubmit')
	},
	onCancel(){
		alert('oncancel ')
	},
	render(){
		return (
			<div>
			    <div className="hoverable">
				<div className="row">
					<div className="col s12">
						<div className="card-panel">
							<UsernameDisplay username={this.props.username}/>
							<i><b>Password: </b></i>
							<input type="text"
								name="email"
								value = {this.state.password}
								onChange={this.onPasswordChanged}/>
							 <i><b>Confirm Password: </b></i>
							<input type="text"
								name="email"
								value = {this.state.confirmpassword}
								onChange={this.onConfirmPasswordChanged}/>
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
