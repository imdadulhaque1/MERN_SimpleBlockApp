const express = require("express");
const { getAllBlog, addBlog, updateSingleBlog, deleteSingleBlog } = require("../controllers/blogController");
const router = express.Router();



router.get('/', getAllBlog);
router.post('/add', addBlog);
router.put('/update/:id', updateSingleBlog);
router.delete('/remove/:id', deleteSingleBlog);

module.exports = router;