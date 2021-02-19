
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', table => {
      table.increments('projects_id')
      table.string('project_name', 128).notNullable()
      table.boolean('project_completed').defaultTo(false)
    })

    .createTable('resources', table => {
      table.increments('resources_id')
      table.string('resource_name', 128).notNullable().unique()
    })

    .createTable('tasks', table => {
      table.increments('tasks_id')
      table.string('task_description', 128).notNullable()
      table.boolean('task_completed').defaultTo(false)
      table
        .integer('project_id')
        .references('id')
        .inTable('projects')
    })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('projects')
};
