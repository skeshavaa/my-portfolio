const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectScehma = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: [String], required: true},
    tags: {type: [String], required: true},
    code: {type: String, required: true},
    project: {type: String, required: true}
})

module.exports = project = mongoose.model('project', ProjectScehma)