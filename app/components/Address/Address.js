import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import AddressDisplay from './AddressDisplay'
import AddressList from './AddressList'
import AddressMaintenance from './AddressMaintenance'
import BtnDefault from '../Generic/BtnDefault'
import axios from 'axios'

export default React.createClass( {

  getInitialState() {
    return {
			addr: {},
      addressList: [],
      actionlist: {},
      activeComponent: 'List',
      addressArray: [],
      buildComponentList: this.buildComponentList
    }
  },

  setAddress(addr){
      this.setState( {
         addr: addr,
        activeComponent: 'Edit'
      } )
  },
	// called by components when the user is creating a new react-router-dom
	// sets the state to render the maintenance component
  onNew() {
		alert("new")
    this.setState( {
      addr: {
        user_id: this.props.userinfo.user_id,
        entry_dtm: new Date(),
        street: '',
        pobox: '',
        city: '',
        state: '',
        zip: '',
        country: '',
      },
      activeComponent: 'New'
    } )
  },

  onSelect() {

  },

  onSubmit( address ) {
    if (typeof address.address_id == 'undefined') {
      alert('post')
      axios.post('/api/address', address)
        .then(function (response) {
          //navigate to AddressList
          this.setState( {activeComponent: 'List'} )
          })
        .catch(function (error) {
          console.log(error);
          });
    } else {
      alert('put')

      axios.put('/api/address', address)
        .then(function (response) {
          //navigate to AddressList
          this.setState( {activeComponent: 'List'} )
          })
        .catch(function (error) {
          console.log(error);
          });
    }
  },

	// user clicked on the cancel button
	// will rerender the page to show the list
  onCancel() {
    this.setState( {activeComponent: 'List'} )
  },

	// user has clicked on the button to edit an address
	// we will use the id to find the record to display
  onEdit( address_id ) {

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

        console.log(addr)
      } )
      .catch( function ( error ) {
        alert( 'failed' )
        console.log( error );
      } );
  },

  onDelete( data_item_key ) {
    // post delete of address with the key
    alert('delete '+data_item_key)
    axios.delete('/api/address', {data: {address_id: data_item_key}})
      .then(function (response) {
        console.log(response);
        })
      .catch(function (error) {
        console.log(error);
        });

    this.loadData()

    // navigate to the address list
    this.setState( {activeComponent: 'List'} )
  },

  buildComponentList( addresslist,  addressAdrray) {
    this.setState( {
      addressList: addresslist,
			addressArray: addressAdrray
    } )
  },

  loadData(){

        const onDelete = this.onDelete
        const onEdit = this.onEdit
        const buildComponentList = this.buildComponentList

        axios.get( '/api/address', {
            params: {
              address_id: 0,
              user_id: this.props.userinfo.user_id
            }
          } )
          .then( function ( result ) {
            // navigate to the address list
            console.log(result.data)
            const list = result.data.map( function ( addr ) {
              return (
    							<div>
                		<div className = "row hoverable" >
                			<div className = "col s12" >
                				<div className = "card-panel" >
                					<AddressDisplay
    												address = {addr}
                						key = {addr.address_id}
                					/>
    										</div>
    									</div>
    									<br/>
                			<div className = "row" >
                				<div className = "col s2 offset-s1" >
                					<BtnDefault
    												action = {onEdit}
    						            tooltipposition = "below"
    						            tooltip = "Edit"
    						            buttonicon = "edit"
    						            data_item_key = {addr.address_id}
                					/>
    										</div>
                				<div className = "col s2" >
                					<BtnDefault
    												action = {onDelete}
    						            tooltipposition = "below"
    						            tooltip = "Delete"
    						            buttonicon = "delete"
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
  componentDidMount() {

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

    this.loadData()
  },

  render() {

    if ( this.state.activeComponent == 'List' ) {
      return (
				<div>
	        <h1> ADDRESS LIST </h1>
          {this.state.addressList}
					< AddressList
					 	addresslist = {this.state.addressList}
	        	actionlist = {this.state.actionlist}
            userinfo= {this.props.userinfo}
	        />
				</div>
      )
		}else if (this.state.activeComponent == 'Edit'){
			return (
				<div>
        	<h1 > ADDRESS EDIT < /h1>
        	<AddressMaintenance
						address = {this.state.addr}
        		actionlist = {this.state.actionlist}
            userinfo= {this.props.userinfo}
        	/>
				</div>
      )

    } else if (this.state.activeComponent=='New'){
      return (
				<div >
        	<h1 > ADDRESS NEW < /h1>
        	<AddressMaintenance
						address = {this.state.addr}
        		actionlist = {this.state.actionlist}
            userinfo= {this.props.userinfo}
        	/>
				</div>
      )
    }
		else {
			return(<h1> ERROR IN PROCESSING </h1>)
		}
  }
} )
