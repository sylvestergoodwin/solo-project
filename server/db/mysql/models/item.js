module.exports = function(sequelize, DataTypes){
	var Item = sequelize.define("Item",{
		item_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
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
	return Item;
}
