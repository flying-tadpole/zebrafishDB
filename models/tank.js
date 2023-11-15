const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tank extends Model {}

Tank.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        tankName: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        tankStock: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'tank'
    }
)

module.exports = Tank