import React from 'react'
import BtnDefault from '../Generic/BtnDefault'


export default React.createClass({
	onNew(){
		this.props.actionlist.onNew()
	},

	onCancel(){
		this.props.actionlist.onCancel()
	},

	render(){
		return (
			<div>
				<div> {this.props.addresslist} </div>
					<div>
						<div className="col s1">
							<BtnDefault action={this.onNew}
								tooltipposition="below"
								tooltip="New"
								buttonicon="add"
								data_item_key="null"
							/>
						</div>
					</div>
			</div>
		)
	}
})
