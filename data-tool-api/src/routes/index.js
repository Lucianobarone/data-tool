const router = require('express').Router();

//* imports routes
const userRoutes = require('./users');
const toolRoutes = require('./tools');
const orderRoutes = require('./orders');

//* rotues
router.use('/auth', userRoutes);
router.use('/tool', toolRoutes);
router.use('/order', orderRoutes);

//* error route
router.use('/', (_req, res) => {
  res.sendStatus(404);
});

module.exports = router;
