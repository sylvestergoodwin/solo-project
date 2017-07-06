
import axios from 'axios' 

export default {
	loadItemDetailByCriteria: function (searchCriteria){
		//*********************************************************
		//********** MOCK UP DATA REMOVED WHEN API IMPLEMENTED

		let itemArray = []
		for (var i=0; i < 4; i++){
			itemArray.push({
				item_id: i,
				photo: 'img/20170108DSC07269a.png',
				name: 'Woman in grey',
				description: 'Image of a woman in grey sitting alone in a room',
				price: 23.92,
				filelocation: '//kdk//djds',
				list_price: 23.93,
				sale_price: 20.93,
				keywords: 'ewe dog pig'
			})
		}
		//************
		//*********************************************************
		
		
		return itemArray
	},
	loadItemDetailByID: function(item_id){
		/*		
		axios.get('/api/itemdetail', {
				params: {
				  payment_id: item_id
				}
			})
			.then(function (data) {
				return data
			})
			.catch(function (error) {
				console.log(error);
			});
		*/
		var item = {
			item_id: 5,
			name: 'Woman in yellow',
			description: 'Image of a woman in yellow sitting alone in a room',
			price: 23.92,
			filelocation: '//kdk//djds',
			list_price: 23.93,
			sale_price: 20.93,
			keywords: 'ewe dog pig'
		}
		
		return item
	},
	saveItemDetail: function (itemDetail){
		/* 
		axios.post('/api/saveitemdetail', itemDetail)
			.then(function (data) {
				console.log(data);
				})
			.catch(function (error) {
				console.log(error);
				});		
		
		*/
		alert('on Submit itemDetail ID '+ itemDetail.item_id)
		
	},
	updateItemDetail: function (itemDetail){
		/* 
		axios.post('/api/saveitemdetail', itemDetail)
			.then(function (data) {
				console.log(data);
				})
			.catch(function (error) {
				console.log(error);
				});		
		
		*/
		
	},
	deleteItemDetail: function (itemDetail){
		
		
	},
	
	getInitialDataSetup(){
		alert('on new getInitialDataSetup')
		return {
			item_id: -1000,
			name: 'Woman in Blue',
			description: 'Image of a woman in yellow sitting alone in a room',
			price: 23.92,
			filelocation: '//kdk//djds',
			list_price: 23.93,
			sale_price: 20.93,
			keywords: 'ewe dog pig'
			
		}
	}	
}

