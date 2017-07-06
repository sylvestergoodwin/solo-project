// Component used to display the address in an editable format
//
//

import React from 'react'
import BtnDefault from '../Generic/BtnDefault'
//import utils from '../Generic/Utilities'

export default React.createClass({
	getInitialState(){
		return({
			address_id: this.props.address.address_id,
			user_id: this.props.address.user_id,
			street: this.props.address.street,
			pobox: this.props.address.pobox,
			city: this.props.address.city,
			state: this.props.address.state,
			zip: this.props.address.zip,
			country: this.props.address.country,
			entry_dtm: this.props.address.entry_dtm
		})
	},
	onSubmit(){
		const address = {
				address_id: this.state.address_id,
				user_id: this.props.userinfo.user_id,
				street: this.state.street,
				pobox: this.state.pobox,
				city: this.state.city,
				state: this.state.state,
				zip: this.state.zip,
				country: this.state.country,
				entry_dtm: new Date()
			}

		this.props.actionlist.onSubmit(address)
	},

	onCancel(){
		this.props.actionlist.onCancel()
	},

	onStreetChanged(event){
		this.setState({street: event.target.value})
	},
	onPOBoxChanged(event){
		this.setState({pobox: event.target.value})
	},
	onCityChanged(event){
		this.setState({city: event.target.value})
	},
	onStateChanged(event){
		this.setState({state: event.target.value})
	},
	onZipChanged(event){
		this.setState({zip: event.target.value})
	},
	onCountryChanged(event){
		this.setState({country: event.target.value})
	},
	render(){
		return (
			<div className ="container">
			    <div className="row hoverable">
					<div className="col s12">
						<div className="card-panel lilac">
							<i><b> Street: </b></i>
							<input type="text"
								name="street"
								value = {this.state.street}
								onChange={this.onStreetChanged}/>
							<i><b> P.O. Box:</b></i>
							<input type="text"
								name="pobox"
								value = {this.state.pobox}
								onChange={this.onPOBoxChanged}/>
							<i><b> City: </b></i>
							<input type="text"
								name="city"
								value = {this.state.city}
								onChange={this.onCityChanged}/>
							<i><b> State:</b></i>
							<input type="text"
								name="state"
								value = {this.state.state}
								onChange={this.onStateChanged}/>
							<i><b> Zip:</b></i>
							<input type="text"
								name="zip"
								value = {this.state.zip}
								onChange={this.onZipChanged}/>
							<i><b> Country:</b></i>
							<input type="text"
								name="country"
								value = {this.state.country}
								onChange={this.onCountryChanged}/>
						</div>
					</div>
					<div className="row">

						<div className="col s2 offset-s1">
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
		)
	}
})
