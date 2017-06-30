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

const xmlResponse = (value = '', status = 200) => (req, res) => {
  res.status(status).set('Content-Type', 'text/xml').end(value)
};

const htmlResponse = (value = '', status = 200) => (req, res) => {
  res.status(status).set('Content-Type', 'text/html').end(value)
};

const jsonResponse = (value = {}, status = 200) => (req, res) => {
  try {
    res.status(status).json(typeof value === 'string' ? JSON.parse(value) : value);
  }
  catch (e) {
    res.status(500).json({err: 'Invalid JSON input'});
  }
};

/* -------------------------------------------------------------------------------------------------------- Endpoints */

const allowedMethods = ['get', 'post', 'put', 'delete'];
const responseConfigurations = [
  ['json', jsonResponse],
  ['xml', xmlResponse],
  ['html', htmlResponse]
];

allowedMethods.forEach(method => {
  app[method]('/delay', () => {});
  app[method]('/delay/:amount', (req, res) => {
    setTimeout(() => res.end(), req.params.amount);
  });

  responseConfigurations.forEach((pair) => {
    const [type, processor] = pair;

    app[method](`/echo/${type}`, processor());
    app[method](`/echo/${type}/:value`, (req, res) => processor(req.params.value)(req, res));
    app[method](`/echo/${type}/:value/:delay`, (req, res) => {
      const {
        value,
        delay
      } = req.params;
      setTimeout(() => processor(value)(req, res), delay);
    });

    app[method](`/echo/${type}/:value/:delay/:status`, (req, res) => {
      const {
        value,
        status,
        delay
      } = req.params;
      setTimeout(() => processor(value, status)(req, res), delay);
    });
  });
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
