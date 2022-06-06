const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    user:{
        type: String,
        required: true
    }
})

const Blog = mongoose.model('blog', blogSchema)
module.exports = Blog;