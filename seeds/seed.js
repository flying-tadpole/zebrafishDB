const sequelize = require("../config/connection");
const { Tank, System, Column, Rack, Strain, Lab, Fish } = require("../models/index.js")

const tankData = require("./tank.json")

const systemData = require("./system.json")
const columnData = require("./column.json")
const rackData = require("./rack.json")

const strainData = require("./strain.json")
const labData = require("./lab.json")
const fishData = require("./fish.json")

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const tank = await Tank.bulkCreate(tankData);

    const system = await System.bulkCreate(systemData);
    const column = await Column.bulkCreate(columnData);
    const rack = await Rack.bulkCreate(rackData);

    const strain = await Strain.bulkCreate(strainData);
    const lab = await Lab.bulkCreate(labData);
    const fish = await Fish.bulkCreate(fishData);

    process.exit(0);
};

seedDatabase();