const Sequelize = require("sequelize");
const config = require('../env/env.json');

const db = new Sequelize(`postgres://postgres:argentina09@localhost:5432/${config.DATABASE}`, {
    logging: false
});

module.exports = db
