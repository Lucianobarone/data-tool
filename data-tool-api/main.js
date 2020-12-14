const express = require('express');
const morgan = require('morgan');
const db = require('./src/config/db');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const config = require('./src/config/env/env.json');
const APIroutes = require('./src/routes');
const app = express();
const cors = require('cors');
const passport = require('./src/config/passport/passport.local');
app.use(morgan('dev'));

app.use(
  cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    origin: true,
  }),
);

//* parse req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//passport
app.use(
  session({
    secret: 'data',
    resave: true,
    saveUninitialized: true,
  }),
);

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

//* routes
app.use('/api', APIroutes);
app.use('/*', (_req, res) => res.redirect('/api'));

//* error middleware
app.use(function (err, _req, res, _next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

//* database sync and server run
db.sync({ force: false }).then(() => {
  app.listen(config.PORT || 8080, () => {
    console.log(`db connected and server on port ${config.PORT}`);
  });
});
