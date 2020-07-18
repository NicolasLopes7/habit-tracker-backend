const { Router } = require("express");
const UserController = require("./controllers/userController");
const HabitController = require("./controllers/habitController");
const weightController = require("./controllers/weightController");
const checkPointController = require("./controllers/checkPointController");

const routes = Router();

routes.post("/user", UserController.store);
routes.put("/user", UserController.update);
routes.get("/user/:userId", UserController.show);
routes.delete("/user/:userId", UserController.delete);

routes.post("/habit", HabitController.store);
routes.delete("/habit/:habitId", HabitController.delete);

routes.post("/weight", weightController.store);

routes.get("/checkPoint", checkPointController.store);
// ?userId=2&habitId=3
module.exports = routes;
