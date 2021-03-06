const express = require("express");
const router = express.Router();

const {getAllUser, signup, login} = require("../controllers/userController");

router.get('/', getAllUser);
router.post('/signup', signup)
router.post('/login', login)

module.exports = router;