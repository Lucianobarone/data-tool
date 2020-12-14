const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../../models');

passport.use(
  'local',
  new LocalStrategy(
    { usernameField: 'email', passwordField: 'password' },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ where: { email: email } });
        if (!user) {
          return done(null, false, { message: 'incorrect username' });
        }
        const passwordValidation = await user.validPassword(password);
        if (!passwordValidation) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      } catch (error) {
        done(error, null);
      }
    },
  ),
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  User.findByPk(user.id)
    .then((user) => done(null, user))
    .catch((err) => done(err));
});

module.exports = passport;
