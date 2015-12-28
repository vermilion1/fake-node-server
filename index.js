'use strict';

const fs = require('fs');
const path = require('path');
const express = require('express');
const cors = require('cors');
const swig  = require('swig');
const { markdown } = require('markdown');
const app = express();

/* -------------------------------------------------------------------------------------------------------- Constants */

const PORT = 3030;

/* ---------------------------------------------------------------------------------------------------- Configuration */

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', path.resolve(__dirname, 'views'));

/* ------------------------------------------------------------------------------------------------------- Middleware */

app.use(cors());
app.use(express.static(path.resolve(__dirname, 'node_modules/github-markdown-css')));

/* ---------------------------------------------------------------------------------------------------------- Helpers */

const createError = message => ({err: message});

const noop = () => {};
const emptyResponse = (req, res) => res.end();

const xmlResponse = (value) => (req, res) => res.set('Content-Type', 'text/xml').end(value);
const htmlResponse = (value) => (req, res) => res.set('Content-Type', 'text/html').end(value);

const jsonResponse = (value = {}) => (req, res) => {
  try {
    res.json(typeof value === 'string' ? JSON.parse(value) : value);
  }
  catch (e) {
    res.json(createError('Invalid JSON input'));
  }
};

/* -------------------------------------------------------------------------------------------------------- Endpoints */

app.get('/delay', noop);
app.get('/delay/:amount', (req, res) => {
  setTimeout(() => jsonResponse()(req, res), req.params.amount);
});

app.get('/echo', emptyResponse);

app.get('/echo/xml', xmlResponse());
app.get('/echo/xml/:value', (req, res) => xmlResponse(req.params.value)(req, res));
app.get('/echo/xml/:value/:delay', (req, res) => {
  setTimeout(() => xmlResponse(req.params.value)(req, res), req.params.delay);
});

app.get('/echo/html', htmlResponse());
app.get('/echo/html/:value', (req, res) => htmlResponse(req.params.value)(req, res));
app.get('/echo/html/:value/:delay', (req, res) => {
  setTimeout(() => htmlResponse(req.params.value)(req, res), req.params.delay);
});

app.get('/echo/json', jsonResponse());
app.get('/echo/json/:value', (req, res) => jsonResponse(req.params.value)(req, res));
app.get('/echo/json/:value/:delay', (req, res) => {
  setTimeout(() => jsonResponse(req.params.value)(req, res), req.params.delay);
});

/* ------------------------------------------------------------------------------------------------------------ Views */

app.get('/', (req, res) => {
  let readme = fs.readFile(path.resolve(__dirname, 'README.md'), (err, data) => {
    if (err) {
      throw err;
    }
    res.render('readme', {
      readme: markdown.toHTML(String(data)),
      title: 'Fake Server'
    });
  });
});

/* ----------------------------------------------------------------------------------------------------------- Server */

app.listen(PORT, function () {
  console.log('Listening on http://localhost:' + PORT);
});
