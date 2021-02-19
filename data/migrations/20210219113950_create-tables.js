
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', table => {
      table.increments('projects_id')
      table.string('project_name', 128).notNullable()
      table.boolean('project_completed').defaultTo(false)
    })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('projects')
};
