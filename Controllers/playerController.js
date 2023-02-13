const Players = require("../models/player");

class PlayerController {
  index(req, res, next) {
    console.log("hello");
    console.log(Players);
    Players.find({})
      .then((players) => {
        res.render("players", {
          title: "The list of Players",
          players: players,
        });
      })
      .catch(next);
  }
  create(req, res, next) {
    const player = new Players(req.body);
    console.log(req.body.image);
    player
      .save()
      .then(() => res.redirect("/players"))
      .catch((error) => {
        console.log(error);
      });
  }
}
module.exports = new PlayerController();
