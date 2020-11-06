exports.up = async function(knex) {
  await knex.schema.createTable("projects", (table) => {
      table.increments("id")
      table.text("name", 128).notNull()
      table.text("description")
      table.boolean("completed").notNull().defaultTo(false)
  })

  await knex.schema.createTable("resources", (table) => {
      table.increments("id")
      table.text("name", 128).notNull()
      table.text("description")
      table.boolean("completed").notNull().defaultTo(false)
  })

  await knex.schema.createTable("tasks", (table) => {
      table.increments("id")
      table.text("description").notNull()
      table.text("notes")
      table.boolean("completed").notNull().defaultTo(false)
      table.integer("projects_id")
        .references("id")
        .inTable("projects")
  })

  await knex.schema.createTable("projects_resources", (table) => {
      table.integer("projects_id")
        .notNull()
        .references("id")
        .inTable("resources")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
      table.integer("resources_id")
        .notNull()
        .references("id")
        .inTable("resources")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
      table.primary(["projects_id", "resources_id"]);
  });
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("projects_resources")
    await knex.schema.dropTableIfExists("tasks")
    await knex.schema.dropTableIfExists("resources")
    await knex.schema.dropTableIfExists("projects")
};
