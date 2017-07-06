import React from 'react'
import BtnDefault from '../Generic/BtnDefault'

export default React.createClass({
	getInitialState(){
		return({
			emailaddress: ''
		})
	},
	onEmailAddressChanged(event){
		this.setState({
			emailaddress: event.target.value
		})
	},
	onSubmit(){
		alert('onsubmit '+this.state.emailaddress)
		// advance to password entry
	},
	onCancel(){
		alert('oncancel')
		// redirect to home page
	},
	render(){
		return (
			<div className="hoverable container">
				<div className="row">
					<div className="col s12">
						<div className="card-panel">
							<i><b>Email Address:</b></i>
							<input type="text"
								name="emailaddress"
								value = {this.state.emailaddress}
								onChange={this.onEmailAddressChanged}/>
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
