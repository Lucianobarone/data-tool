const router = require('express').Router();
const controllers = require('../controllers/tools.controllers');

//* Fetch all Tools
router.get('/', controllers.getAll);

module.exports = router;
