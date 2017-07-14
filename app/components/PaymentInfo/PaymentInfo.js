import React from 'react'
import PaymentInfoList from './PaymentInfoList'
import PaymentInfoDisplay from './PaymentInfoDisplay'
import PaymentInfoMaintenance from './PaymentInfoMaintenance'
import BtnDefault from '../Generic/BtnDefault'
import axios from 'axios'

export default React.createClass({

	getInitialState(){
		return({
			paymentDataList: [],
			activeComponent: 'List',
			payment: {},
			userInfo: {
				user_id: this.props.userinfo.user_id,
				username: this.props.userinfo.username,
				lastlogin: new Date()
			}
		})
	},

	setPayment(payment){
			this.setState( {
				 payment: payment,
				activeComponent: 'Edit'
			} )
	},

	onSelect(payment_id){
		PaymentInfoUtils.loadPaymentInfoByID(payment_id)
	},

	onDelete(payment_id){
		alert('pay delete')
		axios.delete('/api/paymentinfo', {data: {payment_id: payment_id}})
			.then(function (response) {
				console.log(response);
				})
			.catch(function (error) {
				console.log(error);
				});
		this.setState({activeComponent: 'List'})
	},

	onNew(){
		this.setState( {
      payment: {
        user_id: this.props.userinfo.user_id,
        ccv: '',
        account_number: '',
        eff_date: '',
        exp_date: '',
        payment_type: '',
        status: ''
      },
      activeComponent: 'New'
    } )
	},

	onEdit(){
	  const setPayment = this.setPayment
	  axios.get( '/api/paymentinfo', {
	      params: {
	        payment_id: payment_id,
	        user_id: this.props.userinfo.user_id
	      }
	    })
	    .then( function ( result ) {
				// pull the first element from the array returned
	      const payment = result.data[0]
	      setPayment(payment)
	    	})
	    .catch( function ( error ) {
	      alert( 'failed' )
	      console.log( error );
	    	});
		this.setState({activeComponent: 'List'})
	},

	// this is called both for updates to existing records and new data entry
	// we defrentiate between insert and update by is there is a valid payment_id
	onSubmit(paymentinfo){
		// insert
		if (typeof paymentinfo.payment_id == 'undefined')  {
				axios.post('/api/paymentinfo', paymentinfo)
					.then(function (response) {
						this.setState({activeComponent: 'List'})
					})
					.catch(function (error) {
							console.log(error);
					});
		}
		else {
			// update
			axios.put('/api/paymentinfo', paymentinfo)
				.then(function (response) {
					this.setState({activeComponent: 'List'})
					})
				.catch(function (error) {
					console.log(error);
					});
		}
		this.setState({activeComponent: 'List'})
	},

	onCancel(){
	this.setState({activeComponent: 'List'})
	},

	buildComponentList( paymentlist,  paymentAdrray) {
    this.setState( {
      paymentList: paymentlist,
			paymentArray: paymentAdrray
    } )
  },

	componentDidMount(){
		// get the list of paymentData for the user based on the this.props.userInfo.user_id
		const onDelete = this.onDelete
    const onSelect = this.onSelect
		const userinfo = this.props.userinfo
    const buildComponentList = this.buildComponentList
		this.setState({
			actionlist: {
				onDelete: this.onDelete,
				onSubmit: this.onSubmit,
				onSelect: this.onSelect,
				onCancel: this.onCancel,
				onEdit: this.onEdit,
				onNew: this.onNew
			}
		})
		axios.get('/api/paymentinfo', {
				params: {
					payment_id: 0,
				  user_id: this.props.userinfo.user_id
				}
			})
			.then(function (results) {
				const payments = results.data.map(function(payment){
					return (
						<div>
								<div className="row hoverable">
									<div className="col s12">
										<div className="card-panel">
											<PaymentInfoDisplay
												paymentdetail={payment}
												userinfo={userinfo}
												key={payment.payment_id}
												/>
											</div>
										</div>
										<div>
											<div className="col s2">
												<BtnDefault action={onDelete}
													tooltipposition="below"
													tooltip="Delete"
													buttonicon="delete"
													key={payment.payment_id}
													data_item_key={payment.payment_id}
												/>
											</div>
									</div>
								</div>
							</div>
						)
				});
        buildComponentList( payments,  results.data)
			})
			.catch(function (error) {
				console.log(error);
			});
	},

	render: function(){
		// TODO need to remove this and verify it works as expected
		const actionlist = {
			onDelete: this.onDelete,
			onSelect: this.onSelect,
			onNew: this.onNew,
			onEdit: this.onEdit,
			onCancel: this.onCancel,
			onSubmit: this.onSubmit
		}

		if(	this.state.activeComponent == 'List'){
			return (
				<div>
					<div><h3><i>Credit Card List</i></h3></div>
					<PaymentInfoList
						paymentlist={this.state.paymentList}
						userinfo={this.props.userinfo}
						action={actionlist}/>
				</div>
		)
	} else if(this.state.activeComponent == 'Edit'){
			return (
				<div>
					<div><h3><i>Credit Card Maintenance</i></h3></div>
					<PaymentInfoMaintenance
						paymentdetail={payment}
						userinfo={this.props.userinfo}
						action={this.state.actionlist}
					/>
				</div>
			)
	} else if(this.state.activeComponent == 'New'){
			return (
				<div>
					<div><h3><i>Enter Credit Card Information</i></h3></div>
					<PaymentInfoMaintenance
						paymentdetail={this.state.payment}
						userinfo={this.props.userinfo}
						action={this.state.actionlist}
					/>
				</div>
			)
	}
	}
})
