const { Order, Tool, User } = require('../models');

module.exports = {
  getAllFeatures: async (req, res, next) => {
    const { id } = req.params;
    try {
      const orders = await Order.findAll({
        where: {
          type: 'feature',
          toolId: id,
        },
        order: [['valoration', 'DESC']],
      });
      res.status(200).json(orders);
    } catch (err) {
      next(err);
    }
  },
  getAllBugs: async (req, res, next) => {
    const { id } = req.params;
    try {
      const orders = await Order.findAll({
        where: {
          type: 'bug',
          toolId: id,
        },
        order: [['valoration', 'DESC']],
      });
      res.status(200).json(orders);
    } catch (err) {
      next(err);
    }
  },

  getOrder: async (req, res) => {
    const { id } = req.params;
    try {
      if (!id) {
        return res.status(400).json({
          status: 400,
          message: 'Order ID not exist',
        });
      }

      const order = await Order.findByPk(id);
      return res.status(200).json(order);
    } catch (err) {
      if (!err.status) return next(err);
      res.status(err.status).json(err);
    }
  },
  updateValoration: async (req, res, next) => {
    const { id } = req.params;
    try {
      if (req.body.valoration > 0) {
        const orderUpdated = await Order.findByPk(id);
        orderUpdated.update({ ...req.body });

        await orderUpdated.save();
        res.status(201).json(orderUpdated);
      }
    } catch (err) {
      next(err);
    }
  },

  create: async (req, res, next) => {
    const { name, authorId, toolId } = req.body;

    try {
      const userFind = await User.findByPk(authorId);
      if (!userFind) {
        throw {
          status: 404,
          message: 'User not found',
        };
      }

      const toolFind = await Tool.findByPk(toolId);
      if (!toolFind) {
        throw {
          status: 404,
          message: 'Tool not found',
        };
      }
      const ordenEncontrada = await Order.findOne({
        where: {
          name: name,
          toolId: toolId,
        },
      });
      if (ordenEncontrada) {
        return res.status(400).send({ message: 'The order already exists!' });
      }

      Order.create(req.body)
        .then((newOrder) => {
          newOrder.setUser(userFind);
          newOrder.setTool(toolFind);
        })
        .then(() => Order.findAll())
        .then((orders) =>
          res.status(201).send({ message: 'Order created successfully!' }),
        );
    } catch (err) {
      next(err);
    }
  },

  deleteOrder: async (req, res, next) => {
    const { id } = req.params;
    try {
      await Order.destroy({
        where: {
          id: id,
        },
      });

      const orders = await Order.findAll();
      res.status(201).json(orders);
    } catch (err) {
      next(err);
    }
  },
};
