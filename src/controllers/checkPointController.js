const connection = require("../database/connection");

class CheckPointController {
  async store(req, res) {
    const { userId, habitId } = req.query;
    await connection("checkPoint").insert({
      userId,
      habitId,
      createdAt: new Date(),
    });
    return res.sendStatus(200);
  }
}

module.exports = new CheckPointController();
