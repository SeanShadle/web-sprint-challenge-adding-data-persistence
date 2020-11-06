const db = require("../data/config");

module.exports = {
    getTasks,
    getTasksById,
}

function getTasks(){
    return db("tasks as t").join('projects as p', "t.project_id", "p.id").select("p.name as project_name", "p.description as project_description", "t.*");
}

function getTasksById(id){
    return db("tasks").where({id}).first();
}