import React from 'react'
import UserLogin from './UserLogin'
import BtnDefault from '../Generic/BtnDefault'

export default React.createClass({
	getInitialState(){

		return ({
			actionlist: {
				onSubmit: this.onSubmit,
				onCancel: this.onCancel,
				userLogin: this.props.userLogin
			},
			toLogin: false
		})
	},
		onBuy(){
			alert('onBuy')
		},

	onClickLogin(){
		this.setState({toLogin: true})

	},
	onSubmit(userlogin){
		this.props.userLogin(userlogin)
		//{
		//	username: 'admin',
		//	password: 'password'
		//})
		this.setState({toLogin: true})
	},
	onCancel(){
			this.setState({toLogin: false})
	},
	render(){


		if (this.props.userinfo.user_id === -1000 && !this.state.toLogin)
		{
			//		<div>
			//			<BtnDefault action={this.onBuy}
			//				tooltipposition=""
			//				tooltip="Show shopping cart"
			//				buttonicon="shopping_cart"
			//			/>
			//			{' '+ this.props.shoppingcart+' '}
			//			items
			//		</div>
			return (
				<div>
					<BtnDefault action={this.onClickLogin}
							tooltipposition=""
							tooltip="login"
							buttonicon="account_circle"
						/>
						
				</div>
			)
		}
		else if (this.props.userinfo.user_id ===-1000 && this.state.toLogin)
			{
//				<div>
//					<BtnDefault action={this.onBuy}
//							tooltipposition=""
//							tooltip="Show shopping cart"
//							buttonicon="shopping_cart"
//						/>
//						{' '+ this.props.shoppingcart+' '}
//						items
//				</div>
				return (
						<div className="">
							<div >
								<UserLogin actionlist={this.state.actionlist}/>
							</div>
						</div>
				)
			}
		else {
//			<div>
//				<BtnDefault action={this.onBuy}
//						tooltipposition=""
//						tooltip="Show shopping cart"
//						buttonicon="shopping_cart"
//					/>
//					{' '+ this.props.shoppingcart+' '}
//					items
//			</div>
			return (
				<div className="">
					<div > <i> {this.props.userinfo.username} </i> </div>
				</div>
			)
		}
	}
})
