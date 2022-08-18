const RecipeController = require("../controllers/recipe.controller");

module.exports = function (app) {
  app.get("/api/recipes", RecipeController.list);
  app.post("/api/recipes", RecipeController.create);
  app.get("/api/recipes/:id", RecipeController.detail);
  app.put("/api/recipes/:id", RecipeController.update);
  app.delete("/api/recipes/:id", RecipeController.delete);
}