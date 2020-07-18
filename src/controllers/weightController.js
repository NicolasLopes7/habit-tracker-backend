const connection = require("../database/connection");

class WeightController {
  async store(req, res) {
    const { weight, userId } = req.body;
    await connection("weight").insert({
      weight,
      userId,
      createdAt: new Date(),
    });
    return res.sendStatus(200);
  }
}

module.exports = new WeightController();
