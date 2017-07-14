const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

const PORT = process.env.VCAP_APP_PORT || 5000;

const answersRoute = require('./routes/answers');
const reportsRoute = require('./routes/reports');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/answers', answersRoute);
app.use('/reports', reportsRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.send('error');
});

app.listen(PORT, function () {
    console.log("partyApp listening on port " + PORT + "!")
})

// module.exports = app;
