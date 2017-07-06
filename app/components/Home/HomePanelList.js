import React from 'react'

export default React.createClass({
	render(){
		return (
			<div>
				<div> {this.props.itemlist} </div>
				<div className="clearfix"></div>
			</div>
		)
	}
})
