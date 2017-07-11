import React from 'react'
import BtnDefault from '../Generic/BtnDefault'

export default React.createClass({
	onNew(){
		this.props.action.onNew()
	},
	onCancel(){
		this.props.action.onCancel()
	},
	render(){
		return (
			<div className="container">
				<div>
					{this.props.itemlist}<
				/div>
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
