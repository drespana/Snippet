const { db, DataTypes, Model } = require('../db/config');

class Snippet extends Model {};

Snippet.init({
    sequelize: db,
    modelName: "Snippet"
})

module.exports = {Snippet}