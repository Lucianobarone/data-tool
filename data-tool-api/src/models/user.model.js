const Sequelize = require('sequelize');
const db = require('../config/db');
const crypto = require('crypto');

class User extends Sequelize.Model {}
User.init(
  {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    salt: {
      type: Sequelize.STRING,
    },
    nickname: {
      type: Sequelize.STRING,
    },
  },
  { sequelize: db, modelName: 'user' },
);

User.addHook('beforeCreate', (user) => {
  user.salt = crypto.randomBytes(20).toString('hex');
  user.password = user.hashPassword(user.password);
});

User.prototype.hashPassword = function (password) {
  return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
};

User.prototype.validPassword = function (password) {
  return this.password === this.hashPassword(password);
};

module.exports = User;
