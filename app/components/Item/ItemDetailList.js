import React from 'react'
import BtnDefault from '../Generic/BtnDefault'

export default React.createClass({
	onNew(){
		this.props.action.onNew()
		//alert('one')
	},
	onCancel(){
		this.props.action.onCancel()
		//alert('two')
	},
	render(){
		return (<div>
					<div>{this.props.itemlist}</div>
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
