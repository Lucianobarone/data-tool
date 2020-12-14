const Sequelize = require('sequelize');
const db = require('../config/db');

class Tool extends Sequelize.Model {}
Tool.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: 'tool' },
);

module.exports = Tool;
