const express = require("express");
const cors = require("cors");
const routes = require("./src/routes");
const app = express();

require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use(routes);

const PORT = process.env.PORT || 5000;
app.listen(process.env.PORT || 5000);
