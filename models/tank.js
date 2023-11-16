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
        tank_name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        tank_stock: {
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