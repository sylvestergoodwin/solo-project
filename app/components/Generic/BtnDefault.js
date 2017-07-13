import React from 'react'
// This button uses the material design 
// this.props.data_item_key the unique identifier for the data record associated with the clicked action
// this.props.action the function the be invoked when the button is clicked
// this.props.tooltipposition the position the tooltip is to be displayed
// this.props.tooltip that text to be displayed as the tooltip
// this.props.buttonicon the icon to be displayed as the button
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
