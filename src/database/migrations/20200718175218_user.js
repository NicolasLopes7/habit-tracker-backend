exports.up = function ({ schema }) {
  return schema.createTable("user", function (table) {
    table.increments("id").notNullable();
    table.string("name").notNullable();
    table.integer("age").notNullable();
    table.integer("weight").notNullable();
  });
};

exports.down = function ({ schema }) {
  return schema.dropTable("user");
};
