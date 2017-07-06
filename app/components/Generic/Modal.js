import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default React.createClass({

	componentDidMount(){
		alert('a')
		this.modalTarget = document.createElement('div')
		this.modalTarget.className = 'modal'
		document.body.appendChild(this.modalTarget)
		this._render()
	},
	
	componentDidUpdate(){
		alert('b')
		this._render()
	},
	
	componentWillUnmount(){
		alert('d')
		ReactDOM.unmountComponentAtNode(this.modalTarget)
		document.body.removeChild(this.modalTarget)
	},
	
	_render(){
		alert('c')
		ReactDOM.render(<div><h1>OLLLL</h1><p>{this.props.children}</p></div>,
			this.modalTarget
		)
	},
	
	render(){
		return(
			<noscript />
		)
	}
})
