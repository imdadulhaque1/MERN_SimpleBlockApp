const express = require("express");
const router = express.Router();

const {getAllUser, signup} = require("../controllers/userController");

router.get('/', getAllUser);
router.post('/signup', signup)

module.exports = router;