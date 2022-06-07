const BlogModel = require("../models/BlogModel");

//TODO:------> Show all the Blog
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

//TODO:------> Insert a new Blog
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


//TODO:------> Show a Single Blog Using ID
const getSingleBlog = async(req, res, next) =>{
    let id = req.params.id;
    let singleBlog;
    try{
        singleBlog = await BlogModel.findById(id);
    }catch(err){
        return console.log(err);
    }
    if(!singleBlog){
        return res.status(404).json({message: "No Blog Found!"});
    }
    return res.status(200).json({singleBlog});
}


//TODO:------> Update Single Blog using id
const updateSingleBlog = async(req, res, next) =>{
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


//TODO:------> Delete single Blog using ID
const deleteSingleBlog = (req, res, next) =>{
    let id = req.params.id;
    BlogModel.findByIdAndRemove(id)
        .then(data =>{
            res.status(200).json({
                message: "Blog Deleted!",
                deleteBlog: data
            })
        })
        .catch(err =>{
            res.status(500).json({
                message: "Error Occured!",
                error: err
            })
        })
}

module.exports = {
    getAllBlog, addBlog, getSingleBlog ,updateSingleBlog, deleteSingleBlog
}