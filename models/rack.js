const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Rack extends Model {}

Rack.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        rack_name: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'rack'
    }
)

module.exports = Rack