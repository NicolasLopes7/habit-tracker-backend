exports.up = function ({ schema }) {
  return schema.createTable("weight", function (table) {
    table.increments("id").notNullable();
    table.integer("weight");
    table.integer("userId").references("id").inTable("user");
    table.string("createdAt").notNullable();
  });
};

exports.down = function ({ schema }) {
  return schema.dropTable("weight");
};
