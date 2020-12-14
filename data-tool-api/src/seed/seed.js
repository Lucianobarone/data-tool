const { Tool, User, Order } = require('../models/index');
require('../config/db');
const user = require('./user.seed');
const tools = require('./tools.seed');
const orders = require('./order.seed');

console.log('<<<< SEEDEANDO DATA >>>>');

User.create(user.userOne)
  .then(() => User.create(user.userTwo))
  .then(() => User.create(user.usersThree))
  .then(() => Tool.bulkCreate(tools))
  .then(() => Order.bulkCreate(orders))
  .then(() => {
    console.log('SEED CORRECTO !');
    process.exit();
  })
  .catch((err) => console.log('ERROR:', err));
