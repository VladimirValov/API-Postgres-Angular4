const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

const PORT = process.env.VCAP_APP_PORT || 5000;
const environment = process.env.NODE_ENV || 'development';

// console.log(environment);

const answersRoute = require('./routes/answers');
const reportsRoute = require('./routes/reports');
const controlRoute = require('./routes/control');
const loginRoute = require('./routes/login');

const requireOnlineDb = require('./middlewares/requireOnlineDb');
const requireAuth = require('./middlewares/requireAuth');
const requireAdmin = require('./middlewares/requireAdmin');



const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'front-webpack-angular/dist')));



app.use('/answers', requireAuth, requireOnlineDb, answersRoute);
app.use('/reports', requireAdmin, reportsRoute);
app.use('/control', requireAdmin, controlRoute);
app.use('/login', loginRoute);


//default route
app.get('/*', function(req, res, next) {
    return res.redirect('/');
});  

// catch 404 and forward to error handler
app.use(function(err, req, res, next) {
  // const err = new Error('Not Found');
  // err.status = 404;
  console.log(err);
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.send(err);
});

app.listen(PORT, function () {
    console.log("GrilApp listening on port " + PORT + "!")
})

// module.exports = app;
