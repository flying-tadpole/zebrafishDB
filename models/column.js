const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Column extends Model {}

Column.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        column_name: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'column'
    }
)

module.exports = Column