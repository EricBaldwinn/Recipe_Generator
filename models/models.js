require('dotenv').config({path:'/Users/eric/Sprints/MVP-RecipeGen/Recipe-Generator/.env'})
const axios = require('axios');


const token = process.env.Token;
const url = process.env.Url;

module.exports = {
  // ingredients is a string of ingredients seperated by commas
  getIngredients: (ingredients) => {
    return axios.get(`${url}?ingredients=${ingredients}&apiKey=${token}`);
  }
}