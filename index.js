var express = require('express');
var cors = require('cors');
var app = express();

/* -------------------------------------------------------------------------------------------------------- Constants */

var PORT = 3030;
var NOOP = function () {};

var EMPTY_RESPONSE = function (req, res) {
  res.end();
};

var JSON_RESPONSE = function (value) {
  return function (req, res) {
    try {
      res.json(typeof value === 'string' ? JSON.parse(value) : value);
    }
    catch (e) {
      res.json(createError('Invalid JSON input'));
    }
  };
};

var XML_RESPONSE = function (value) {
  return function (req, res) {
    res.set('Content-Type', 'text/xml').end(value);
  };
};

var HTML_RESPONSE = function (value) {
  return function (req, res) {
    res.set('Content-Type', 'text/html').end(value);
  };
};

/* ---------------------------------------------------------------------------------------------------------- Helpers */

function createError(message) {
  return {err: message};
}

/* ------------------------------------------------------------------------------------------------------- Middleware */

app.use(cors());

/* -------------------------------------------------------------------------------------------------------- Endpoints */

app.get('/delay', NOOP);
app.get('/delay/:amount', function (req, res) {
  setTimeout(JSON_RESPONSE({}).bind(null, req, res), req.params.amount);
});

app.get('/echo', EMPTY_RESPONSE);

app.get('/echo/xml', XML_RESPONSE());
app.get('/echo/xml/:value', function (req, res) {
  XML_RESPONSE(req.params.value).apply(this, arguments);
});

app.get('/echo/html', HTML_RESPONSE());
app.get('/echo/html/:value', function (req, res) {
  HTML_RESPONSE(req.params.value).apply(this, arguments);
});

app.get('/echo/json', JSON_RESPONSE({}));
app.get('/echo/json/:value', function (req, res) {
  JSON_RESPONSE(req.params.value).apply(this, arguments);
});

/* ----------------------------------------------------------------------------------------------------------- Server */

app.listen(PORT, function () {
  console.log('Listening on http://localhost:' + PORT);
});
