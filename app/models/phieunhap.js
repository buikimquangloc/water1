'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Phieunhap extends Model {
        static associate(models) {
            // define association here
        }
    }
    Phieunhap.init({
        ngaynhap: DataTypes.DATE,
    }, {
        sequelize,
        modelName: 'Phieunhap',
    });
    return Phieunhap;
}; 