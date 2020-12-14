const router = require('express').Router();
const controllers = require('../controllers/orders.controllers');

//* Fetch all orders Features
router.get('/allFeatures/:id', controllers.getAllFeatures);

//* Fetch all orders Bugs
router.get('/allBugs/:id', controllers.getAllBugs);

//* Fetch one order,
router.get('/:id', controllers.getOrder);

//* Update orders
router.put('/:id', controllers.updateValoration);

//* Delete order
router.delete('/:id', controllers.deleteOrder);

//* Create orders
router.post('/', controllers.create);

module.exports = router;
