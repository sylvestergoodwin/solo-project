module.exports = function(sequelize, DataTypes){
	var Payment = sequelize.define("Payment",{
		payment_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		ccv: {
			type: DataTypes.STRING
		},
		account_name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		account_number: {
			type: DataTypes.STRING,
			allowNull: false
		},
		eff_date: {
			type: DataTypes.STRING
		},
		exp_date: {
			type: DataTypes.STRING,
			allowNull: false
		},
		payment_type: {
			type: DataTypes.STRING
		},
		status: {
			type: DataTypes.STRING,
			allowNull: false
		},
		createdAt: {
			type: DataTypes.DATE
		},
		updatedAt: {
			type: DataTypes.DATE
		}
	});
	return Payment;
}
