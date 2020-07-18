const knex = require("knex");
const configuration = require("../../knexfile");

if (process.env.NODE_ENV == "PRODUCTION") {
  const connection = knex(configuration.production);
  module.exports = connection;
} else {
  const connection = knex(configuration.development);
  module.exports = connection;
}
