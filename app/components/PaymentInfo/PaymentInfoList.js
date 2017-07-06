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
			<div>
				<div>
					<div> {this.props.paymentlist} </div>
					<div>
						<div className="col s1">
							<BtnDefault action={this.onNew}
								tooltipposition="below"
								tooltip="New"
								buttonicon="add"
							/>
						</div>
					</div>
				</div>
			</div>

		)
	}
})
