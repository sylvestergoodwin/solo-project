import axios from 'axios' 

export default {
	loadShoppingCartByUserID: function(user_id){
		/*		
		axios.get('/api/shoppingcartlist', {
				params: {
				  user_id: user_id
				}
			})
			.then(function (response) {
				return response
			})
			.catch(function (error) {
				console.log(error);
			});
		*/
		
		var shoppinglist = [];
		
		for (var i=0; i < 4; i++){
			addresslist.push({
			address_id: i,
			user_id: 100,
			street: 'the Street',
			pobox: i+'23', 
			city: 'My City',
			state: 'AnyState',
			zip: '21312-1212',
			country: 'Country',
			entry_dtm: new Date()
			});
		}
		
		return shoppinglist
	},
	
	addToShoppingCartList: function (shoppingcartitem){
		alert('add new shoppingcartitem item_id: '+shoppingcartitem.item_id +' user_id: '+shoppingcartitem.user_id)
		/* 
		axios.post('/api/addshoppingcartitem', shoppingcart_item)
			.then(function (response) {
				console.log(response);
				})
			.catch(function (error) {
				console.log(error);
				});		
		
		*/
		
	},
	
	deleteShoppingCartItem: function (shoppingcartitem){
		alert('add new shoppingcartitem item_id: '+shoppingcartitem.item_id +' user_id: '+shoppingcartitem.user_id)
		/* 
		axios.post('/api/deleteshoppingcartitem', shoppingcartitem)
			.then(function (response) {
				console.log(response);
				})
			.catch(function (error) {
				console.log(error);
				});		
		
		*/
	},
	
	deleteShoppingCart: function (shoppingcart){
		alert('delete shopping cart sale_id: '+shoppingcart.sale_id+' user_id: '+shoppingcart.user_id)
		/* 
		axios.post('/api/deleteshoppingcart', shoppingcart)
			.then(function (response) {
				console.log(response);
				})
			.catch(function (error) {
				console.log(error);
				});		
		
		*/
		
	}
		
}