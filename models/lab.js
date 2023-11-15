const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Lab extends Model {}

Lab.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        pi: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'lab'
    }
)

module.exports = Lab