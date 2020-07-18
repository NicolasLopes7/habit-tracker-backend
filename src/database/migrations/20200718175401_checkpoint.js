exports.up = function ({ schema }) {
  return schema.createTable("checkPoint", function (table) {
    table.increments("id").notNullable();
    table.integer("userId").references("id").inTable("user");
    table.integer("habitId").references("id").inTable("habit");
    table.string("createdAt").notNullable();
  });
};

exports.down = function ({ schema }) {
  return schema.dropTable("checkPoint");
};
