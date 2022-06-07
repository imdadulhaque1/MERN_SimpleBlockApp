const express = require("express");
const { getAllBlog, addBlog, updateBlog } = require("../controllers/blogController");
const router = express.Router();



router.get('/', getAllBlog);
router.post('/add', addBlog);
router.put('/update/:id', updateBlog);

module.exports = router;