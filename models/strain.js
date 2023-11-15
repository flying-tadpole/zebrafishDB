const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Strain extends Model {}

Strain.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        lineNumber: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        line: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'strain'
    }
)

module.exports = Strain