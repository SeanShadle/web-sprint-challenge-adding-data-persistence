const db = require('../data/config')

modules.exports = {
    getProjects,
    getProjectsById,
    addProject,
};

function getProjects(){
    return db("projects");
}

function getProjectsById(){
    return db("projects").where({id}).first();
}

function addProject(data){
    return db("projects")
        .insert(data)
        .then(id => {
            return getProjectsById(id);
        });
}