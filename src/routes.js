const { Router } = require("express");
const UserController = require("./controllers/userController");
const HabitController = require("./controllers/habitController");
const WeightController = require("./controllers/WeightController");
const CheckPointController = require("./controllers/CheckPointController");

const routes = Router();

routes.post("/user", UserController.store);
routes.put("/user", UserController.update);
routes.get("/user/:userId", UserController.show);
routes.delete("/user/:userId", UserController.delete);

routes.post("/habit", HabitController.store);
routes.delete("/habit/:habitId", HabitController.delete);

routes.post("/weight", WeightController.store);

routes.get("/checkPoint", CheckPointController.store);
// ?userId=2&habitId=3
module.exports = routes;
