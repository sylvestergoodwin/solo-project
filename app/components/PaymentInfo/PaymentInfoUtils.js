
import axios from 'axios' 

export default {
	loadPaymentInfoByUserID: function(user_id){

		/*		
		axios.get('/api/paymentlist', {
				params: {
				  user_id: user_id
				}
			})
			.then(function (data) {
				return data
			})
			.catch(function (error) {
				console.log(error);
			});
		*/		
		
		//*********************************************************
		//********** MOCK UP DATA REMOVED WHEN API IMPLEMENTED
		let paymentInfoList = []
		for (var i=0; i < 4; i++){
			paymentInfoList.push({
			payment_id: i,
			accountname: 'American Express Gole',
			accountnumberdisplay: '**** ****** *7328',
			accounttype: 'Credit Card',
			accountnumber: '12817992791212',
			status: 'Active',
			payment_type: 'Credit Card',
			expdate: '01/2018'
			});
		}
		//************
		//*********************************************************

		
		return paymentInfoList
	},
	
	loadPaymentInfoByID(payment_id){
		/*		
		axios.get('/api/paymentinfo', {
				params: {
				  payment_id: payment_id
				}
			})
			.then(function (data) {
				return data
			})
			.catch(function (error) {
				console.log(error);
			});
		*/
		alert('loadPaymentInfoByID '+payment_id)
		return {
			payment_id: 5,
			accountname: 'American Express Blue',
			accountnumberdisplay: '**** ****** *7328',
			accounttype: 'Credit Card',
			accountnumber: '12817992791212',
			status: 'Active',
			payment_type: 'Credit Card',
			expdate: '01/2018',
			entry_dtm: new Date()
			}
	},
	
	savePaymentInfo: function (paymentInfo){
		/* 
		axios.post('/api/savepaymentinfo', paymentInfo)
			.then(function (data) {
				console.log(data);
				})
			.catch(function (error) {
				console.log(error);
				});		
		
		*/
		alert('on Submit paymentInfo ID '+ paymentInfo.payment_id)
		
	},
	addNewPaymentInfo: function (paymentInfo){
		/* 
		axios.post('/api/addpaymentinfo', paymentInfo)
			.then(function (data) {
				console.log(data);
				})
			.catch(function (error) {
				console.log(error);
				});		
		
		*/
		alert('add new aPaymentInfo '+paymentInfo.paymentInfo_id)
		
	},
	updatePaymentInfo: function (paymentInfo){
		/* 
		axios.post('/api/savepaymentinfo', paymentInfo)
			.then(function (data) {
				console.log(data);
				})
			.catch(function (error) {
				console.log(error);
				});		
		
		*/
		alert('updatePaymentInfo '+paymentInfo.payment_id)
	},
	deletePaymentInfo: function (payment_id){
		alert('deletePaymentInfo '+payment_id)
		
	},
	
	getInitialDataSetup(){
		alert('on new getInitialDataSetup')
		return {
			payment_id: -1000,
			accountname: 'American Express Blue',
			accountnumberdisplay: '**** ****** *7328',
			accounttype: 'Credit Card',
			accountnumber: '12817992791212',
			status: 'Active',
			payment_type: 'Credit Card',
			expdate: '01/2018',
			entry_dtm: new Date()
			
		}
	}
		
}