import React from 'react'
import ShoppingCartItem from './ShoppingCartItem'

export default React.createClass({
	render(){
		return(<div>
			<br/>
				<div>
					{this.props.itemlist}
				</div>
			</div>
		)
	}
})
