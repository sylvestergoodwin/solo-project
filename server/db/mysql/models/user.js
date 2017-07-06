module.exports = function(sequelize, DataTypes){
	var User = sequelize.define("User",{
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		},
		eff_date: {
			type: DataTypes.DATE,
			allowNull: false
		},
		exp_date: {
			type: DataTypes.DATE
		},
		access_type: {
			type: DataTypes.STRING
		},
		status: {
			type: DataTypes.STRING,
			allowNull: false
		},
		lastlogin: {
			type: DataTypes.DATE
		},
		createdAt: {
			type: DataTypes.DATE
		},
		updatedAt: {
			type: DataTypes.DATE
		}
	});
	return User;
}
