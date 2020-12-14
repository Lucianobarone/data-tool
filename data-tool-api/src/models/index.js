const User = require('./user.model');
const Tool = require('./tool.model');
const Order = require('./order.model');

Order.belongsTo(Tool);
Tool.hasMany(Order);

Order.belongsTo(User);
User.hasMany(Order);

module.exports = {
  User,
  Tool,
  Order,
};
