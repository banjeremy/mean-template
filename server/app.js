'use strict';

var express    = require('express'),
    bodyParser = require('body-parser'),
    morgan     = require('morgan'),
    router     = require('./routes'),
    config     = require('./config'),
    mongoose   = require('mongoose'),
    app        = express();

mongoose.connect('mongodb://localhost/mean-template');

var loggingProfile = (process.env.NODE_ENV === 'development') ? 'dev' : 'combined';

app.set('port', process.env.PORT || 3000);

// Parse bodies!
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Logging
app.use(morgan(loggingProfile));

// View Helpers
app.use(function(req, res, next) {
  res.locals.version = config.version;
  next();
});

// Set routes
app.use('/api', router);

// Since this is the last non-error-handling
// middleware use()d, we assume 404, as nothing else
// responded.
app.use(function(req, res, next) {
  res.status(404).json({ error: 'Not found.' });
});

// Error handling functions must have an arity of 4, i.e. 4 args. This is due to
// connect which underlies express.
app.use(function(err, req, res, next) {
  console.log(err);
  res.status(err.status || 500).json({ error: 'Server error.' });
});

var server = app.listen(app.get('port'), function() {
  console.log('App server listening on port ' + server.address().port);
});

module.exports = app;
