const express = require("express");
const { getAllBlog, addBlog } = require("../controllers/blogController");
const router = express.Router();



router.get('/', getAllBlog);
router.post('/add', addBlog);

module.exports = router;