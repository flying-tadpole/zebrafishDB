const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const System = require('./location/system');
const Column = require('./location/column');
const Rack = require('./location/rack');
const Tank = require('./tank');
const Strain = require('./strain');

class Fish extends Model {}

Fish.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        cagecard: {
            type: DataTypes.TEXT,
            allowNull:false
        },
        lab: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Lab,
                key: 'id'
            }
        },
        system: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: System,
                key: 'id'
            }
        },
        column: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: Column,
                key: 'id'
            }
        },
        rack: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Rack,
                key: 'id'
            }
        },
        row: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tank: {
            type: DataTypes.TEXT,
            allowNull: false,
            references: {
                model: Tank,
                key: 'id'
            }
        },
        strain: {
            type: DataTypes.INTEGER,
            allowNull:false,
            references: {
                model: Strain,
                key: 'id'
            }
        },
        dob: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'fish'
    }
)

module.exports = Fish