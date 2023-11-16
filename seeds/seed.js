const sequelize = require("../config/connection");
const { Lab, Strain, Tank, Column, Rack, System, Fish } = require("../models")

const systemData = require("./system")
const columnData = require("./column")
const rackData = require("./rack")
const tankData = require("./tank")
const strainData = require("./strain")
const labData = require("./lab")
const fishData = require("./fish")

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const system = await System.bulkCreate(systemData);
    const column = await Column.bulkCreate(columnData);
    const rack = await Rack.bulkCreate(rackData);
    const tank = await Tank.bulkCreate(tankData);
    const strain = await Strain.bulkCreate(strainData);
    const lab = await Lab.bulkCreate(labData);
    const fish = await Fish.bulkCreate(fishData);

    process.exit(0);
};

seedDatabase();