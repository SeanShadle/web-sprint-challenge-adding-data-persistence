exports.seed = async function(knex){
  await knex("resources").insert([
    {name: "resource 1", description: "description 1"},
    {name: "resource 2", description: "description 2"},
    {name: "resource 3", description: "description 3"}
  ])
}