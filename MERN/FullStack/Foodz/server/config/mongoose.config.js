const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/recipesproj", {
  useNewUrlParser:true,
  useUnifiedTopology:true
})
  .then(() => {
    console.log("Established a connection, Chuck!")
  })
  .catch(() => {
    console.log("Chuck, there has been an error!")
  })