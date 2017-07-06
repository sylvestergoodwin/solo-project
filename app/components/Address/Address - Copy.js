import React from 'react'
import AddressDisplay from './AddressDisplay'
import AddressList from './AddressList'
import AddressMaintenance from './AddressMaintenance'
import BtnDefault from '../Generic/BtnDefault'
import AddressUtils from './AddressUtils'

// ERD7F

export default React.createClass({
	
	getInitialState(){
		
		return {addressList: [],
				actionlist: {},
				activeComponent: ''
		}
	},
	
	onNew(){
		// set up initial data 
		const addr = AddressUtils.getInitialDataSetup()
		
		// navigate to the AddressMaintenance
		this.setState({activeComponent: <AddressMaintenance 
											address={addr}
											actionlist={this.state.actionlist}	 />
			})
		
	},
	onSelect(){
		
	},
	onSubmit(address){
		if (address.address_id === -1000) {
			AddressUtils.addNewAddress(address) 
		}else{
			AddressUtils.saveAddress(address)  
		}
		//navigate to AddressList 
		this.setState({activeComponent:	<AddressList 
											addresslist={this.state.addressList}
											actionlist={this.state.actionlist}	/>
		})
	},
	onCancel(){
		alert("Cancel")
		// navigate to AddressList
		this.setState({activeComponent:	<AddressList 
											addresslist={this.state.addressList}
											actionlist={this.state.actionlist}	/>
		})
	},
    onEdit(address_id){
		alert('calling loadAddressByID '+address_id)
		const address = AddressUtils.loadAddressByID(address_id)  
		// get address associated with the key
		
		// navigate to the maintenance screen with the data
		const addr = AddressUtils.loadAddressByID(5)
		this.setState({activeComponent: <AddressMaintenance 
											address={addr}
											actionlist={this.state.actionlist}	 />
			})
	}, 
	
	onDelete(data_item_key){
		// post delete of address with the key
		AddressUtils.deleteAddress(data_item_key)
		
		// navigate to the address list
		this.setState({activeComponent:	<AddressList 
											addresslist={this.state.addressList}
											actionlist={this.state.actionlist}	/>
		})
	},
		
	componentDidMount(){		
		const addressArray = AddressUtils.loadAddressByUserID({})
		this.setState({actionlist: {
						onDelete: this.onDelete.bind(this),
						onSubmit: this.onSubmit.bind(this),
						onSelect: this.onSelect.bind(this),
						onCancel: this.onCancel.bind(this),
						onEdit: this.onEdit.bind(this),
						onNew: this.onNew.bind(this)}
					})
					
		
		const onDelete = this.onDelete.bind(this)
		const onEdit = this.onEdit.bind(this)
		// navigate to the address list
		this.setState({addressList: addressArray.map(function(addr){
			
			return (
				<div>
					<div className="row hoverable">
						<div className="col s12">
							<div className="card-panel">	
								<AddressDisplay 
									address={addr}				
									key={addr.address_id}/>
							</div>
						</div>
						<br/>
						<div className="row">
							<div className="col s2 offset-s1">
								<BtnDefault action={onEdit}
									tooltipposition="below"
									tooltip="Edit"
									buttonicon="edit"
									data_item_key={addr.address_id}
								/>
							</div>
									
							<div className="col s2">
								<BtnDefault action={onDelete}
									tooltipposition="below"
									tooltip="Delete"
									buttonicon="delete"
									data_item_key={addr.address_id}
								/>
								
							</div>
						</div>
					</div>
				</div>
			)
		})
	})
	
		this.setState({activeComponent:	<AddressList 
											addresslist={this.state.addressList}
											actionlist={this.state.actionlist}	/>
		})
	},
		
	render(){

			
		const addr = AddressUtils.loadAddressByID(5)
		return (
			<div>
				<h1>ADDRESS</h1>

				{this.state.activeComponent}
				<hr/>
				<AddressList 
					addresslist={this.state.addressList}
					actionlist={this.state.actionlist}	/>
					
				<AddressMaintenance 
					address={addr}
					actionlist={this.state.actionlist}	 />	

			</div>
		)
	}
})
