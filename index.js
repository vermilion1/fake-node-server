var express = require('express');
var cors = require('cors');
var app = express();

/* -------------------------------------------------------------------------------------------------------- Constants */

var PORT = 3030;
var NOOP = function () {};

/* ---------------------------------------------------------------------------------------------------------- Helpers */

function createError(message) {
  return {err: message};
}

/* ------------------------------------------------------------------------------------------------------- Middleware */

app.use(cors());

/* -------------------------------------------------------------------------------------------------------- Endpoints */

app.get('/delay', NOOP);
app.get('/delay/:amount', function (req, res, next) {
  setTimeout(res.json.bind(res, {}), req.params.amount);
});

app.get('/echo/:value', function (req, res, next) {
  try {
    res.json(JSON.parse(req.params.value));
  }
  catch (e) {
    res.json(createError('Invalid JSON input'));
  }
});

/* ----------------------------------------------------------------------------------------------------------- Server */

app.listen(PORT, function () {
  console.log('Listening on http://localhost:' + PORT);
});
