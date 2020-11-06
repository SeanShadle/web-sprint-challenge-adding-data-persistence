const db = require('../data/config')

modules.exports = {
    getProjects,
    getProjectsById,
};

function getProjects(){
    return db("projects");
}

function getProjectsById(){
    return db("projects").where({id}).first();
}
