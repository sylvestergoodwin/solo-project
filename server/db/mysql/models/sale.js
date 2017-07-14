module.exports = function(sequelize, DataTypes){
	var Sale = sequelize.define("Sale",{
		sale_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		sale_dtm: {
			type: DataTypes.DATE,
			allowNull: false
		},
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		payment_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		address_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		sale_category: {
			type: DataTypes.STRING
		},
		payment_type: {
			type: DataTypes.STRING
		},
		status: {
			type: DataTypes.STRING,
			allowNull: false
		},
		sales_total: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		createdAt: {
			type: DataTypes.DATE
		},
		updatedAt: {
			type: DataTypes.DATE
		}
	});
	return Sale;
}
