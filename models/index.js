const Tank = require('./tank');

const System = require('./system');
const Column = require('./column');
const Rack = require('./rack');

const Strain = require('./strain');
const Lab = require('./lab');
const Fish = require('./fish');

System.hasMany(Fish, {
    foreignKey: "system_id"
})
Fish.belongsTo(System)

Column.hasMany(Fish, {
    foreignKey: "column_id"
})
Fish.belongsTo(Column)

Rack.hasMany(Fish, {
    foreignKey: "rack_id"
})
Fish.belongsTo(Rack)

Lab.hasMany(Fish, {
    foreignKey: "lab_id"
})
Fish.belongsTo(Lab)

Tank.hasMany(Fish, {
    foreignKey: "tank_id"
})
Fish.belongsTo(Tank)

Strain.hasMany(Fish, {
    foreignKey: "strain_id"
})
Fish.belongsTo(Strain)

module.exports = { Tank, System, Column, Rack, Strain, Lab, Fish }