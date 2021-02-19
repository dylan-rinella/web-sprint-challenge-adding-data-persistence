exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {projects_id: 1, project_name: 'React Project', project_compelted: false},
        {projects_id: 2, project_name: 'JavaScript Project', project_compelted: false},
        {projects_id: 3, project_name: 'HTML Project', project_compelted: false}
      ]);
    });
};
