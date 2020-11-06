exports.seed = async function(knex){
  await knex("projects").insert([
    {name: "project 1", description: "description 1", completed: false},
    {name: "project 2", description: "description 2", completed: false},
    {name: "project 3", description: "description 3", completed: false},
    {name: "project 4", description: "description 4", completed: false},
  ])
}