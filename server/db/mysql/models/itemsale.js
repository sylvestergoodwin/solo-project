module.exports = function(sequelize, DataTypes){
	var ItemSale = sequelize.define("ItemSale",{
		itemsale_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		item_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		sale_id: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		sale_dtm: {
			type: DataTypes.DATE,
			allowNull: true
		},
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		item_category: {
			type: DataTypes.STRING
		},
		promotion_id: {
			type: DataTypes.STRING
		},
		status: {
			type: DataTypes.STRING
		},
		list_price: {
			type: DataTypes.DECIMAL(9,2),
			allowNull: false
		},
		sale_price: {
			type: DataTypes.DECIMAL(9,2),
			allowNull: false
		},
		quantity: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		createdAt: {
			type: DataTypes.DATE
		},
		updatedAt: {
			type: DataTypes.DATE
		}
	});
	return ItemSale;
}
