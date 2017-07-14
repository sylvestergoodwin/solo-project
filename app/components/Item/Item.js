import React from 'react'
import ItemDetailMaintenance from './ItemDetailMaintenance'
import ItemDetailDisplay from './ItemDetailDisplay'
import ItemDetailList from './ItemDetailList'
import BtnDefault from '../Generic/BtnDefault'
import axios from 'axios'



export default React.createClass({
	getInitialState(){
		return ({itemlist: [],
						item: {},
						activeComponent: 'List',
						userInfo: this.props.userinfo
		})
	},

	setItem(item){
		this.setState({
	  	item: item,
	    activeComponent: 'Edit'
	  })
	},
	onBuy(item_id){
		alert("Buy "+item_id)
	},
	onSubmit(item){
		if ( typeof item.item_id === 'undefined' ) {
			alert('item post')
			axios.post('/api/item', item)
				.then(function (response) {
					console.log(response);
					})
				.catch(function (error) {
					console.log(error);
					});
		} else {
			console.log(item)
			axios.put('/api/item', item)
				.then(function (response) {
					console.log(response);
					})
				.catch(function (error) {
					console.log(error);
					});
		}
		//navigate to AddressList
		this.setState( {activeComponent: 'List'} )
	},

	onNew(){
		this.setState({
			activeComponent: 'New',
			item: {
				list_price: null,
				sale_price: null,
				quantity: null,
				description: '',
				keywords: '',
				filelocation: '',
				name: ''
			}
		})
	},

	onSelect(item_id){
		//*********************************************************
		//********** MOCK UP DATA REMOVED WHEN API IMPLEMENTED
		alert('onSelect item '+item_id)
		//**********
		//*********************************************************
	},

	onDelete(item_id){
    // post delete of address with the key
    axios.delete('/api/item', {data: {item_id: item_id}})
      .then(function (response) {
        console.log(response);
        })
      .catch(function (error) {
        console.log(error);
        });

    // navigate to the item list
    this.setState( {activeComponent: 'List'} )

	},
	onCancel(){
		this.setState({activeComponent: 'List'})
	},

	onEdit(item_id){
		    const setItem = this.setItem

		    axios.get( '/api/item', {
		        params: {
		          item_id: item_id,
		          user_id: this.props.userinfo.user_id
		        }
		      } )
		      .then( function ( result ) {
		        const item = result.data[0]
						console.log(item)
		        setItem(item)
		      } )
		      .catch( function ( error ) {
		        alert( 'failed' )
		      } );
	},

	buildComponentList( itemList,  itemArray) {
    this.setState( {
      itemList: itemList,
			itemArray: itemArray
    } )
  },

	componentDidMount(){
		this.setState({
			actionlist: {
				onDelete: this.onDelete,
				onSubmit: this.onSubmit,
				onSelect: this.onSelect,
				onCancel: this.onCancel,
				onEdit: this.onEdit,
				onNew: this.onNew,
				onBuy: this.onBuy
			}
		})

		const onDelete = this.onDelete
		const onEdit = this.onEdit
		const onBuy = this.onBuy
    const buildComponentList = this.buildComponentList
		const userinfo = this.props.userinfo
		axios.get('/api/itemdetail', {
				params: {
				  item_id: 0
				}
			})
			.then(function (result) {
				const itemArray = result.data.map(function(item){
					console.log(item)
					return (
							<div className="item-detail-display">
								<div className="row hoverable left">
									<div className="col s12">
										<div className="card-panel">
											<ItemDetailDisplay itemdetail={item}
												userinfo={userinfo}
												key={item.item_id}
												action={onBuy}
												navcontrol='Item'
											/>
											<div>
												<div className="col s2">
													<BtnDefault action={onDelete}
														tooltipposition="below"
														tooltip="Delete"
														buttonicon="delete"
														data_item_key={item.item_id}
														key={item.item_id}
													/>
												</div>
												<div className="col s2">
													<BtnDefault action={onEdit}
														tooltipposition="below"
														tooltip="Edit"
														buttonicon="edit"
														data_item_key={item.item_id}
														key={item.item_id}
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
					)
				})
				buildComponentList(itemArray, result.data)
			})
			.catch(function (error) {
				alert('failed')
				console.log(error);
			});
	},

	render(){

		if (this.state.activeComponent == 'New')
		{
			return (
				<div>
					<div><h5><i>Enter Item Detail</i></h5></div>
					<ItemDetailMaintenance
						itemdetail={this.state.item}
						userinfo={this.props.userinfo}
						action={this.state.actionlist}
					/>
				</div>
			)
		}else if (this.state.activeComponent == 'Edit') {
			return (
				<div>
					<div><h5><i>Item Maintenance</i></h5></div>
					<ItemDetailMaintenance
						itemdetail={this.state.item}
						action={this.state.actionlist}
						userinfo={this.props.userinfo}
					/>
				</div>
			)
		}else {
			return (
				<div>
					<div><h5><i>Item List</i></h5></div>
					<ItemDetailList
						itemlist={this.state.itemList}
						action={this.state.actionlist}
						userinfo={this.props.userinfo}
					/>
				</div>
			)
		}
	}
})
