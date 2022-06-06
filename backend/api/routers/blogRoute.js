const express = require("express");
const router = express.Router();



router.get('/', getAllBlog);

module.exports = router;