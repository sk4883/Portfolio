require('babel-core/register')({
  "presets": ["es2015", "react", "stage-1"]
})

var express = require('express');
var path = require('path');
var logger = require('morgan');
var requestHandler = require('./requestHandler.js');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');


var app = express();

// view engine setup



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//rendering html pages and data via client side......
app.get('*', function(req, res){
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

//app.set('view engine', 'html');
// app.use(requestHandler);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
res.status(err.status || 500);
res.json({
  message: err.message,
  error: err
});
});

module.exports = app;
