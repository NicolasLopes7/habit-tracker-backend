const connection = require("../database/connection");

class UserController {
  async store(req, res) {
    const { name, age, weight } = req.body;
    await connection("user").insert({ name, age, weight });
    return res.sendStatus(200);
  }

  async update(req, res) {
    const { ...updateUserData } = req.body;
    await connection("user").update(updateUserData);
    return res.sendStatus(200);
  }
  async delete(req, res) {
    const { userId } = req.params;
    await connection("habit").where("userId", userId).del();
    await connection("checkPoint").where("userId", userId).del();
    await connection("weight").where("userId", userId).del();
    await connection("user").where("id", userId).del();
    return res.sendStatus(200);
  }

  async show(req, res) {
    const { userId } = req.params;

    const selectedUsers = await connection("user")
      .where("id", userId)
      .select(["name", "age", "weight"]);

    const user = selectedUsers[0];

    user.habits = await connection("habit")
      .where("userId", userId)
      .where("visible", true)
      .select(["id", "name"]);

    user.checkpoints = await connection("checkPoint")
      .join("habit", "habit.id", "=", "checkPoint.habitId")
      .where("checkPoint.userId", userId)
      .select(["checkPoint.id", "habit.name", "checkPoint.createdAt"]);

    user.weights = await connection("weight")
      .where("userId", userId)
      .select(["id", "createdAt", "weight"]);

    return res.json(user);
  }
}

module.exports = new UserController();
