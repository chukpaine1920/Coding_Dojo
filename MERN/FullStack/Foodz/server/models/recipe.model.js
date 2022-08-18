const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required:[
      true,
      "The title is required"
    ]
  },
  origin: {type: String, },
  ingredients:{
    type: String,
    required:[
      true,
      "Ingredients must be logged"
    ]
  }
}, {timestamps:true})

module.exports.Recipe = mongoose.model('Recipe', RecipeSchema);