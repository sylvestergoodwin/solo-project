
import axios from 'axios'

export default {
	loadAddressByUserID: function(user_id){
		alert('get(/api/address '+user_id)
		axios.get('/api/address', {
				params: {
				  user_id: user_id
				}
			})
			.then(function (result) {
				alert('success')
				console.log(result.data)
				return result.data
			})
			.catch(function (error) {
				alert('failed')
				console.log(error);
			});
	},

	loadAddressByID(address_id){
    alert('get(/api/address '+address_id)
		axios.get('/api/address', {
				params: {
				  address_id: address_id
				}
			})
			.then(function (data) {

				// TO BE REMOVED
				return {
					address_id: 5,
					user_id: 100,
					street: 'the Street',
					pobox: '2773', city: 'My City',
					state: 'AnyState',
					zip: '21312-1212',
					country: 'Country',
					entry_dtm: new Date()
					}

				return data
			})
			.catch(function (error) {
				console.log(error);
			});
	},

	saveAddress: function (address){
		alert('post(/api/saveaddress on Submit address ID '+ address.address_id)

		axios.post('/api/saveaddress', address)
			.then(function (response) {
				console.log(response);
				})
			.catch(function (error) {
				console.log(error);
				});



	},
	addNewAddress: function (address){
		alert('post(/api/saveaddress add new address '+address)

		axios.post('/api/saveaddress', address)
			.then(function (response) {
				console.log(response);
				})
			.catch(function (error) {
				console.log(error);
				});



	},
	updateAddress: function (address){
		alert('updateAddress axios.post(/api/updateaddress ')

		axios.post('/api/updateaddress', address)
			.then(function (response) {
				console.log(response);
				})
			.catch(function (error) {
				console.log(error);
				});


	},
	deleteAddress: function (addressID){
		alert('deleteAddress '+addressID)

	},

	getInitialDataSetup(){


		alert('on new getInitialDataSetup')
		return {address_id: -1000,
			user_id: 100,
			street: 'Sesame Street',
			pobox: '2773', city: 'New Jack City',
			state: 'AnyState',
			zip: '21312-1212',
			country: 'USA',
			entry_dtm: new Date()
		}
	}

}
