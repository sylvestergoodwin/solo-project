import React from 'react'
import BtnDefault from '../Generic/BtnDefault'
import AddressDisplay from '../Address/AddressDisplay'
import AddressList from '../Address/AddressList'
import axios from 'axios'


export default React.createClass({
	getInitialState() {
	    return {
				addr: {},
	      addressList: [],
	      actionlist: {},
	      activeComponent: 'Select',
	      addressArray: [],
	      buildComponentList: this.buildComponentList
	    }
	  },

	setAddress(addr){
	      this.setState( {
	         addr: addr,
	        	activeComponent: 'Display'
	      } )
	  },
	onEdit(address_id){
	    const setAddress = this.setAddress

		    axios.get( '/api/address', {
		        params: {
		          address_id: address_id,
		          user_id: this.props.userinfo.user_id
		        }
		      } )
		      .then( function ( result ) {
		        // navigate to the address list
		        const addr = result.data[0]

		        setAddress(addr)
		      } )
		      .catch( function ( error ) {
		        console.log( error );
		      } );
	},
	onCancel(){
		this.props.actionlist.onCancel()

		// navigate to the prior page
	},
	buildComponentList( addresslist,  addressAdrray) {

	    console.log(addresslist)
	    console.log(addressAdrray)
	    this.setState( {
	      addressList: addresslist,
				addressArray: addressAdrray
	    } )
	  },

	  componentDidMount() {

			const userinfo = this.props.userinfo
			console.log(this.props.userinfo)
	    this.setState( {
	      actionlist: {
	        onDelete: this.onDelete,
	        onSubmit: this.onSubmit,
	        onSelect: this.onSelect,
	        onCancel: this.onCancel,
	        onEdit: this.onEdit,
	        onNew: this.onNew
	      }
	    } )


	    const onDelete = this.onDelete
	    const onEdit = this.onEdit
	    const buildComponentList = this.buildComponentList
			//---------------------- ADDRESS
	    axios.get( '/api/address', {
	        params: {
	          address_id: 0,
	          user_id: this.props.userinfo.user_id
	        }
	      } )
	      .then( function ( result ) {
	        // navigate to the address list
	        const list = result.data.map( function ( addr ) {
	          return (
								<div>
	            		<div className = "row hoverable" >
	            			<div className = "col s12" >
	            				<div className = "card-panel" >
	            					<AddressDisplay
													address = {addr}
	            						key = {addr.address_id}
													userinfo ={userinfo}
	            					/>
											</div>
										</div>
										<br/>
	            			<div className = "row" >
	            				<div className = "col s2 offset-s1" >
	            					<BtnDefault
													action = {onEdit}
							            tooltipposition = "below"
							            tooltip = "Select"
							            buttonicon = "check_circle"
							            data_item_key = {addr.address_id}
	            					/>
											</div>
										</div>
									</div>
								</div>
	          	)
	        } )
	        buildComponentList( list,  result.data)

	      } )
	      .catch( function ( error ) {
	        alert( 'failed' )
	        console.log( error );
	      } );
	  },
	render(){
		console.log(this.state.addr)
		let paymentsAddress = {}
		if (this.state.activeComponent == 'Select') {
			paymentsAddress = this.state.addressList
		} else {
			paymentsAddress = < AddressDisplay
				address = {this.state.addr}
				/>
		}

		return (
			<div>
				<div>
					{paymentsAddress}
				</div>
			</div>
		)
	}
})
