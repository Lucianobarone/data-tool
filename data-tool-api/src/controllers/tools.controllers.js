const { Tool } = require('../models');

module.exports = {
  getAll: async (_req, res, next) => {
    try {
      const tools = await Tool.findAll();
      res.status(200).json(tools);
    } catch (err) {
      next(err);
    }
  },
};
