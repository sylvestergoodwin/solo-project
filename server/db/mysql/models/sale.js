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
		sale_category: {
			type: DataTypes.STRING
		},
		payment_type: {
			type: DataTypes.STRING,
			allowNull: false
		},
		status: {
			type: DataTypes.STRING,
			allowNull: false
		},
		sales_total: {
			type: DataTypes.DECIMAL,
			allowNull: false
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
