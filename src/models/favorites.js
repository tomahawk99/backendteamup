'use strict';
const {
  Model, DataTypes
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class favorites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // define association here
      }
    }
    favorites.init({
      favoriteid: DataTypes.INTEGER,
      userid: DataTypes.INTEGER,
      fieldname: DataTypes.STRING,
    }, {
      sequelize,
      modelName: 'favorites',
    });
    return favorites;
};