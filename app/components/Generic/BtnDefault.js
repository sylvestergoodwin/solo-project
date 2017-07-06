import React from 'react'
import SearchItemCriteria from '../Search/SearchItemCriteria'
import UsernameDisplay from '../User/UsernameDisplay'

export default React.createClass({
	onClick(){
		this.props.action(this.props.data_item_key)
	},
	render(){
		return (
			<div className="">
				<a className="btn-floating btn-tiny waves-effect waves-light purple lighten-1 tooltipped" 
					data-position={this.props.tooltipposition}
					data-tooltip={this.props.tooltip}
					onClick={this.onClick}>
					<i className="tiny material-icons"> {this.props.buttonicon}</i>
				</a>
			</div>
		)
	}
})
