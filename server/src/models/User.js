const { db, DataTypes, Model } = require('../db/config');

class User extends Model {};

User.init({
    email: DataTypes.STRING,
    password:  DataTypes.STRING
},{
    sequelize: db,
    modelName: "User"
})

module.exports = { User };