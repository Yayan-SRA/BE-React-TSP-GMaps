'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class algenModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  algenModel.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    lat: DataTypes.STRING,
    lng: DataTypes.STRING,
    startingPoint: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'algenModel',
  });
  return algenModel;
};