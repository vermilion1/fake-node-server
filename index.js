var express = require('express');
var cors = require('cors');
var app = express();

var PORT = 3030;
 
app.use(cors());
 
app.get('/delay', () => {});
app.get('/delay/:amount', (req, res, next) => {
  setTimeout(() => res.json({}), req.params.amount);
});
 
app.listen(PORT, () => {
  console.log('Listening on http://localhost:' + PORT);
});
