const { User } = require('../models');

module.exports = {
  create: async (req, res, next) => {
    const { email, password, nickname } = req.body;

    try {
      if (!nickname || !email || !password) return res.sendStatus(400);
      const user = new User({
        nickname,
        email,
        password,
      });
      await user.save();

      res.status(201).json({
        user: user,
        nickname: user.nickname,
        email: user.email,
      });
    } catch (err) {
      next(err);
    }
  },

  login: (req, res, next) => {
    res.json(req.user);
  },

  check: (req, res, next) => {
    res.json(req.user);
  },

  logout: (req, res, next) => {
    if (req.isAuthenticated()) {
      req.logout();
    }
    res.sendStatus(200);
  },
};
