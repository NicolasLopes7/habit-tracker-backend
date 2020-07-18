const connection = require("../database/connection");

class HabitController {
  async store(req, res) {
    const { name, userId } = req.body;
    await connection("habit").insert({ name, userId });
    return res.sendStatus(200);
  }
  async delete(req, res) {
    const { habitId } = req.params;
    await connection("checkPoint").where("habitId", habitId).del();
    await connection("habit").where("id", habitId).update({ visible: false });
    return res.sendStatus(200);
  }
}

module.exports = new HabitController();
