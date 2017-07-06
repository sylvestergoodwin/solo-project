import React from 'react'
import PaymentInfoList from '../PaymentInfo/PaymentInfoList'
import PaymentInfoDisplay from '../PaymentInfo/PaymentInfoDisplay'
import BtnDefault from '../Generic/BtnDefault'
import axios from 'axios'

export default React.createClass({
	getInitialState(){
		return({
			paymentDataList: [],
			activeComponent: 'Select',
			payment: {},
			buildComponentList: this.buildComponentList
		})
	},
	onSelect(payment_id){
		const setPayment = this.setPayment

		axios.get( '/api/paymentinfo', {
				params: {
					payment_id: payment_id,
					user_id: this.props.userinfo.user_id
				}
			} )
			.then( function ( result ) {
				// navigate to the address list
				const payment = result.data[0]
				setPayment(payment)

				console.log(payment)
			} )
			.catch( function ( error ) {
				console.log( error );
			} );

		this.setState({activeComponent: 'Display'})

	},
	setPayment(payment){
			this.setState( {
				 payment: payment,
				activeComponent: 'Display'
			} )
	},
	onNew(){
		this.props.action.onNew()
	},
	onCancel(){
		this.props.action.onCancel()
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
			axios.get('/api/paymentinfo', {
					params: {
						payment_id: 0,
					  user_id: this.props.userinfo.user_id
					}
				})
				.then(function (results) {
					console.log(results.data)
					const payments = results.data.map(function(payment){
						return (<div>
									<div className="row hoverable">
										<div className="col s12 m5">
											<div className="card-panel">
												<PaymentInfoDisplay
													paymentdetail={payment}
													key={payment.payment_id}
													userinfo={userinfo}
													/>
												<div>
													<div className="col s2">
														<BtnDefault action={onSelect}
															tooltipposition="below"
															tooltip="Select"
															buttonicon="check_circle"
															data_item_key={payment.payment_id}
														/>
													</div>
												</div>
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
			this.setState({actionlist: {
							onDelete: this.onDelete,
							onSubmit: this.onSubmit,
							onSelect: this.onSelect,
							onCancel: this.onCancel,
							onEdit: this.onEdit,
							onNew: this.onNew
							}
			})
		},
	render(){
		let paymentDetail = {}
		if (this.state.activeComponent == 'Select') {
			paymentDetail = this.state.paymentList
		} else {
			paymentDetail = < PaymentInfoDisplay
				paymentdetail={this.state.payment}
				userinfo={this.props.userinfo}
				/>
		}
		return (
			<div>
				<div>
					<div> {paymentDetail} </div>
					<div>
					</div>
				</div>
			</div>

		)
	}
})
