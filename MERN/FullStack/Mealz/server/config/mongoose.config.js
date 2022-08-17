const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/recipesproj", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Estabished a connection');
  })
  .catch(() => {
    console.log("There has been an error")
  })