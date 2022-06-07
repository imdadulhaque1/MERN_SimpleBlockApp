const BlogModel = require("../models/BlogModel");

const getAllBlog = async(req, res, next)=>{
    let blogs;
    try{
        blogs = await BlogModel.find();
    }catch(err){
        return console.log(err);
    }
    if(!blogs){
        return res.status(404).json({message: "No Blogs Found!"})
    }
    return res.status(200).json({blogs})
}

const addBlog = async(req, res, next) =>{
    const {title, description, image, user} = req.body;
    const blog = new BlogModel({
        title, description, image, user,
    });
    try{
        await blog.save()
    }catch(err){
        return console.log(err)
    }
    return res.status(200).json(blog);
}

const updateBlog = async(req, res, next) =>{
    const {title, description, image} = req.body;
    const blogId = req.params.id;
    let blog;
    try{
        blog = await BlogModel.findByIdAndUpdate(blogId, {
            title, description, image
        })
    }catch(err){
        return console.log(err);
    }
    if(!blog){
        return res.status(500).json({message: "Unable to Update the Blog!"})
    }
    return res.status(200).json({blog})
}

module.exports = {
    getAllBlog, addBlog, updateBlog
}