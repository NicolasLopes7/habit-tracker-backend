exports.up = function ({ schema }) {
  return schema.createTable("habit", function (table) {
    table.increments("id").notNullable();
    table.string("name").notNullable();
    table.integer("userId").references("id").inTable("user").notNullable();
    table.boolean("visible").notNullable().defaultTo(true);
  });
};

exports.down = function ({ schema }) {
  return schema.dropTable("habit");
};
