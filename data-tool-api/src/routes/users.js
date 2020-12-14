const router = require('express').Router();
const passport = require('passport');
const controllers = require('../controllers/users.controllers');

//* Create user
router.post('/register', controllers.create);

//* Login user
router.post('/login', passport.authenticate('local'), controllers.login);

//* Logout user
router.get('/logout', controllers.logout);

//* Session
router.get('/check', controllers.check);

module.exports = router;
