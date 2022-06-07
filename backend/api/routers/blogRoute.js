const express = require("express");
const { getAllBlog, addBlog, updateSingleBlog, deleteSingleBlog, getSingleBlog } = require("../controllers/blogController");
const router = express.Router();



router.get('/', getAllBlog);
router.post('/add', addBlog);
router.get('/:id', getSingleBlog);
router.put('/update/:id', updateSingleBlog);
router.delete('/remove/:id', deleteSingleBlog);

module.exports = router;