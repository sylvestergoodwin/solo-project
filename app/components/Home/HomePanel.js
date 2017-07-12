import React from 'react'
import HomePanelList from './HomePanelList'
import HomeDisplay from './HomeDisplay'
export default React.createClass({

	buildList: function (){
		const userinfo = this.props.userinfo
		var itemList = [];

		for (var i=0; i < 4; i++){
			itemList.push({
				name: 'Woman in green',
				description: 'Image of a woman in green sitting alone in a room',
				list_price: 23.92,
				sale_price: 32.12,
				item_id: 12121212,
				link: 'city-gallery/20170706/LensSexy20160227-20160227DSC03563.jpg'
			});
		}

		return itemList.map(function(item){
			return (<div>
						<div className="row hoverable left">
							<div className="col s12 ">
								<div className="card-panel">
									<HomeDisplay
										userinfo={userinfo}
										itemdetail={item}
									/>
								</div>
							</div>
						</div>
					</div>)
		});
	},


	render()
	{
		const userinfo = this.props.userinfo
		var gg = this.buildList()

		return (
			<div>
				<HomePanelList
					itemlist={gg}
					userinfo={userinfo}
				/>
			</div>
			)
	}
})
