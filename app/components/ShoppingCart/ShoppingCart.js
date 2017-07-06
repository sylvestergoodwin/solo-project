import React from 'react'
import ShoppingCartList from './ShoppingCartList'
import ShoppingCartItem from './ShoppingCartItem'
import ShoppingCartItemTotal from './ShoppingCartItemTotal'
import ShoppingCartAddressList from './ShoppingCartAddressList'
import ShoppingCartPaymentList from './ShoppingCartPaymentList'
import BtnDefault from '../Generic/BtnDefault'
import axios from 'axios'



export default React.createClass({
	getInitialState() {
		return {
			showAddress: 'No',
			addessSelected: 'No',
			showPayment: 'No',
			paymentSelected: 'No',
			itemList: [],
			itemArray: []
		}
	},
	buildComponentList( itemlist,  itemArray) {
		this.setState( {
			itemList: itemlist,
			itemArray: itemArray
		} )
	},
	  componentDidMount() {
	    this.setState( {
	      actionlist: {
	      }
	    })

	    const buildComponentList = this.buildComponentList
			const userinfo = this.props.userinfo
	    axios.get( '/api/shopping', {
	        params: {
	          user_id: this.props.userinfo.user_id
	        }
	      } )
	      .then( function ( result ) {
	        // navigate to the address list
	        const list = result.data.map( function ( item ) {
	          return (
								<div>
	            		<div className = "row hoverable" >
          					<ShoppingCartItem
          						itemdetail = {item}
											userinfo={userinfo}
											key={item.item_id}
          					/>
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
		onSelectAddress(){
			this.setState({
				showAddress: 'Yes'
			})
		},
		onSelectPayment(){
			this.setState({
				showPayment: 'Yes'
			})
		},
	render(){
		let addressList = {}
		if (this.state.showAddress === 'Yes') {
			 addressList = <div>
				<ShoppingCartAddressList
					userinfo={this.props.userinfo}
				/>
			</div>
		} else {
			addressList = <div><BtnDefault
				action={this.onSelectAddress}
				tooltipposition="below"
				tooltip="Address"
				buttonicon="home"
				data_item_key="null"
			/>
			<span>Select the shipping address for this order</span>
			</div>
		}
		let paymentList = {}
		if (this.state.showPayment === 'Yes'){
			paymentList =  <div>
				<ShoppingCartPaymentList
					userinfo={this.props.userinfo}
				/>
			</div>
		} else {
			paymentList = <div> <BtnDefault
				action={this.onSelectPayment}
				tooltipposition="below"
				tooltip="Payment Using"
				buttonicon="credit_card"
				data_item_key="null"
			/>
			<span>Select the payment for this order</span>
			</div>
		}
		return(
			<div><div className="row hoverable">
												<div className="col s12">
													<div className="card-panel">


				{addressList}
				</div>
				</div>
				</div>
				<div className="row hoverable">
													<div className="col s12">
														<div className="card-panel">


				{paymentList}
				</div>
				</div>
				</div>
				<div>
					<ShoppingCartList
						itemlist={this.state.itemList}
						userinfo={this.props.userinfo}
					/>
					<ShoppingCartItemTotal
						itemArray={this.state.itemArray}
						userinfo={this.props.userinfo}
					/>

						<BtnDefault action={this.onCancel}
							tooltipposition="below"
							tooltip="Complete Purchase"
							buttonicon="send"
							data_item_key="null"
						/>
				</div>
			</div>
		)
	}

})
