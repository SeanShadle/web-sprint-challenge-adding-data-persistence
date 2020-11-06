exports.seed = async function(knex){
  await knex("tasks").insert([
    {description: "task 1", notes: "note 1", projects_id: 1, completed: false},
    {description: "task 2", notes: "note 2", projects_id: 3, completed: false},
    {description: "task 3", notes: "note 3", projects_id: 2, completed: false},
  ])
}