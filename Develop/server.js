const express = require('express');
const routes = require('./controllers');
const options = {
  dotfiles: 'allow'
};
var path = require("path");
var dir = path.join(__dirname, 'public');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(dir));

app.use(routes);

app.listen(PORT, () => console.log('Now listening'));