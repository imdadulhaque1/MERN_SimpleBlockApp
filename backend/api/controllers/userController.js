const bcrypt = require('bcrypt');
const userModel = require("../models/UserModel");
const saltRounds = 6;

const getAllUser = async(req, res, next) =>{
	let users;
	try{
		users = await userModel.find();
	}catch(err){
		console.log(err);
	}
	if(!users){
		return res.status(404).json({message: "No Users Found!"});
	}
	return res.status(200).json({ users });
}

const signup= async(req, res, next) =>{
		const {name, email, password} = req.body;
		
		let existingUser;
		try{
			existingUser = await userModel.findOne({email})
		}catch(err){
			return console.log(err)
		}
		if(existingUser){
			return res.status(400).json({message:"User Already Exists! Login instead."})
		}
		const salt = bcrypt.genSaltSync(saltRounds);

		const hashedPassword = bcrypt.hashSync(password, salt);
		const user = new userModel({
			name,
			email,
			password: hashedPassword
		});
		

		try{
			await user.save();
		}catch(err){
			return console.log(err)
		}
		return res.status(201).json({user})
}

module.exports = {
    getAllUser, signup
}