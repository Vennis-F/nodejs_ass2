const express = require("express");
const playerController = require("../Controllers/playerController");
const playersRouter = express.Router();
playersRouter
  .route("/")
  .get(playerController.index)
  .post(playerController.create);
module.exports = playersRouter;
