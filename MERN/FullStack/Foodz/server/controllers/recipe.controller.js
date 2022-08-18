const { Recipe } = require('../models/recipe.model');

module.exports.list = (request, response) => {
  Recipe.find({})
    .then(recipes => {
      response.json(recipes);
    })
    .catch(err => {
      response.status(400).json(err);
    })
}

module.exports.create = (request, response) => {
  const {title, origin, ingredients} = request.body;
  Recipe.create({
    title,
    origin,
    ingredients
  })
    .then(recipe => {
      response.json(recipes)
  })
    .catch(err => {
      response.status(400).json(err)
  })
}
module.exports.detail = (request, response) => {
  const { id } = request.params;
  Recipe.findOne({_id: id})
    .then(recipe => {
      response.json(recipe)
  })
    .catch(err => {
      response.status(400).json(err);
  })
}
module.exports.update = (request, response) => {
  const { id } = request.params;
  const { title, origin, ingredients} = request.body;
  Recipe.findOneAndUpdate({_id: id}, {
      title,
      origin,
      ingredients
  },
    {
      new:true,
      useFindAndModify:true
    })
    .then(recipe => {
      response.json(recipe)
    })
    .catch(err => {
      response.status(400).json(err);
  })
}
module.exports.delete = (request, response) => {
  const { id } = request.params;
  Recipe.deleteOne({_id: id})
    .then(deleteConfirmation => {
      response.json(deleteConfirmation)
  })
    .catch(err => {
      response.status(400).json(err);
  })
}