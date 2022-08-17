const mongoose = require('mongoose')

const RecipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required:[
      true,
      "Title is required"
    ]
  },
  origin: {type: String},
  time: {
    type: Number,
    required:[
      true,
      "Time is required"
    ]
  },
  ingredients: {
    type: String,
    required:[
      true,
      "Ingredients are required"
    ]
  }, 
  instructions: {
    type: String,
    required:[
      true,
      "Instructions are required"
    ]
}}, { timestamps: true})

module.exports.Recipe = mongoose.model('Recipe', RecipeSchema);