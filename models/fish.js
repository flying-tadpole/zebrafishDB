const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const System = require('./system');
const Column = require('./column');
const Rack = require('./rack');
const Tank = require('./tank');
const Strain = require('./strain');
const Lab = require('./lab')

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
        lab_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Lab,
                key: 'id'
            }
        },
        system_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: System,
                key: 'id'
            }
        },
        column_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: Column,
                key: 'id'
            }
        },
        rack_id: {
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
        tank_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Tank,
                key: 'id'
            }
        },
        strain_id: {
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