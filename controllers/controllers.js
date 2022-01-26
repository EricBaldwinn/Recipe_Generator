const models = require('../models/models.js');

module.exports = {
  getIngredients: (req,res) => {
    const ingredients = req.query.ingredients
    models.getIngredients(ingredients)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(404).send(err);
    })
  }
}