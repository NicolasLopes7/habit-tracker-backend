module.exports = {
  development: {
    client: "pg",
    connection: {
      port: "5432",
      database: "habit-tracker",
      user: "postgres",
      password: "root",
    },
    migrations: {
      directory: "./src/database/migrations",
    },
    useNullAsDefault: true,
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + "/src/database/migrations",
    },
    seeds: {
      directory: __dirname + "/src/database/seeds",
    },
  },
};
