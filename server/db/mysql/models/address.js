module.exports = function(sequelize, DataTypes){
	var Address = sequelize.define("Address",{
		address_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		entry_dtm: {
			type: DataTypes.STRING,
			allowNull: false
		},
		user_id: {
			type: DataTypes.STRING,
			allowNull: false
		},
		street: {
			type: DataTypes.STRING,
			allowNull: false
		},
		pobox: {
			type: DataTypes.STRING
		},
		city: {
			type: DataTypes.STRING
		},
		state: {
			type: DataTypes.STRING
		},
		zip: {
			type: DataTypes.STRING
		},
		country: {
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
	return Address;
}
