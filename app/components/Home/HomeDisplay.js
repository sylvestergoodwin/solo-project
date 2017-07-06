import React from 'react'
import ItemDetailDisplay from '../Item/ItemDetailDisplay'
import BtnDefault from '../Generic/BtnDefault'
export default React.createClass({
	onDetail(){
		alert('Details')
	},
	render(){
		const userinfo = this.props.userinfo
		return (

			<div>
				<div>
					<ItemDetailDisplay
						itemdetail={this.props.itemdetail}
						userinfo={userinfo}
						navcontrol='HomeDisplay'
					/>
				</div>

			</div>
		)
	}
})
