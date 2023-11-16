const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class System extends Model {}

System.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        system_name: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'system'
    }
)

module.exports = System