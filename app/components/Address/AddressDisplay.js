// Component used to display the address information in a read-only
// data passed
//		address all the addressed fields captured by the application 
//		the address is displayed based on the country of the address
//
import React from 'react'

export default React.createClass({
	concatCityStateZip(address){
		return address.city+' '+address.state+' '+address.zip
	},
	render(){
		return (
			<div>
				{this.props.address.street} <br/>
				{this.props.address.pobox} <br/>
				{this.concatCityStateZip(this.props.address)} <br/>
				{this.props.address.country} <br/>
			</div>
		)
	}
})
