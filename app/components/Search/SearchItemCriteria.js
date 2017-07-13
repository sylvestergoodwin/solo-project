import React from 'react'
// This component is the search bar and anything that is required to collect the informtion
// needed to perform the search. Once the information is collected the data for the search
// criteria will be passed to the parent search component as a json object.

export default React.createClass({
	getInitialState(){
		return({
			searchText: ''
		})
	},

	onSearchChanged(event){
		this.setState({searchText: event.target.value})
	},

	// allows the enter key to initiate the search no need for a button
	onKeyPressed(e){
		if (e.key == 'Enter'){
			this.props.action(this.state.searchText)
		}
	},
	
	render(){
		return (
			<div className="search">
				<div className="input-field">
					Search:
					<span className="search-text">
						<input id="search"
							placeholder="Enter Search Keywords"
							type="search"
							name="search"
							value = {this.state.searchText}
							onKeyPress={this.onKeyPressed}
							onChange={this.onSearchChanged}/>
						<label className="lable-icon"
							htmlFor="search">
							<i className="material-icons">search</i>
						</label>
						<i className="material-icons">close</i>
					</span>
				</div>
			</div>
		)
	}
})
