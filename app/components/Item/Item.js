import React from 'react'
import ItemDetailMaintenance from './ItemDetailMaintenance'
import ItemDetailDisplay from './ItemDetailDisplay'
import ItemDetailList from './ItemDetailList'
import BtnDefault from '../Generic/BtnDefault'
import ItemUtils from './ItemUtils'
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
		console.log('set item')
		console.log(item)
		this.setState({
	  	item: item,
	    activeComponent: 'Edit'
	  })
	},
	onBuy(item_id){
		alert("Buy "+item_id)
	},
	onSubmit(item){
		alert(item.item_id)
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
			alert('item put')
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
		alert('onDelete item '+item_id)

    // post delete of address with the key
    axios.delete('/api/item', item)
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
		alert('on edit')
		    const setItem = this.setItem

		    axios.get( '/api/item', {
		        params: {
		          item_id: item_id,
		          user_id: this.props.userinfo.user_id
		        }
		      } )
		      .then( function ( result ) {

							alert('on edit 9')
		        const item = result.data[0]
						console.log(item)
		        setItem(item)
		      } )
		      .catch( function ( error ) {
		        alert( 'failed' )
		      } );
	},

	buildComponentList( itemList,  itemAdrray) {
    this.setState( {
      itemList: itemList,
			itemArray: itemAdrray
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

		axios.get('/api/item', {
				params: {
				  item_id: 0
				}
			})
			.then(function (result) {
				const itemArray = result.data.map(function(item){
					return (<div className="item-detail-display">
								<div className="row hoverable">
									<div className="col s12">
										<div className="card-panel">
											<ItemDetailDisplay itemdetail={item}
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
													/>
												</div>
												<div className="col s2">
													<BtnDefault action={onEdit}
														tooltipposition="below"
														tooltip="Edit"
														buttonicon="edit"
														data_item_key={item.item_id}
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
				<div> <h1>ITEMS</h1>
					<ItemDetailMaintenance
						itemdetail={this.state.item}
						action={this.state.actionlist}
					/>
				</div>
			)
		}else if (this.state.activeComponent == 'Edit') {
	alert('render edit')
	console.log(this.state.item)

			return (
				<div> <h1>ITEMS</h1>
					<ItemDetailMaintenance
						itemdetail={this.state.item}
						action={this.state.actionlist}
					/>
				</div>
			)
		}else {
			return (
				<div> <h1>ITEMS</h1>
					<ItemDetailList
						itemlist={this.state.itemList}
						action={this.state.actionlist}
					/>
				</div>
			)
		}
	}
})
