const Sequelize = require('sequelize');
const db = require('../config/db');

class Order extends Sequelize.Model {}
Order.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    authorName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    type: {
      type: Sequelize.ENUM(['bug', 'feature']),
      allowNull: false,
    },
    image: {
      type: Sequelize.STRING,
      defaultValue:
        'https://pbs.twimg.com/profile_images/1240043261261164545/PNKhWHAp_400x400.jpg',
    },
    description: {
      type: Sequelize.TEXT,
      defaultValue:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, odio tempore. Quis perspiciatis nostrum beatae laudantium ab ullam incidunt ducimus quos ipsam itaque doloribus dicta, eum asperiores assumenda, tenetur dolorem.',
    },
    valoration: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: 'order' },
);

module.exports = Order;
