const express = require('express');
const app = express();
const Port = 3000;
const controllers = require('../controllers/controllers.js');

app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/ingredients', controllers.getIngredients);


app.listen(Port, () => {
  console.log(`listening on port ${Port}`);
});