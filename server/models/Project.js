const {model, Schema} = require("mongoose");

const projectSchema = new Schema({
    title: String,
    description: String,
    imageURL: String,
    githubURL: String,
    liveURL: String,
    createdAt: String
});

module.exports = model('Project', projectSchema);