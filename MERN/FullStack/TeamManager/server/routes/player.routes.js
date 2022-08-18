const PlayerController = require("../controllers/player.controller");

module.exports = function (app) {
  app.get('/players', PlayerController.getAllPlayers);
  app.post('/players', PlayerController.createPlayer);
  // app.get('/players/:id', PlayerController.viewPlayer);
  // app.put('/players/:id', PlayerController.updatePlayer);
  // app.delete("/players/:id", PlayerController.deletePlayer);
}
