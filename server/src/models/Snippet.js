const { db, DataTypes, Model } = require('../db/config');

class Snippet extends Model {};

Snippet.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    language: DataTypes.STRING,
    code:  DataTypes.STRING
},{
    sequelize: db,
    modelName: "Snippet"
})

module.exports = {Snippet}