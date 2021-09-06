//it is the command to require the user schema so that operation can be performed
const User = require('../models/user');
const Post = require('../models/post');

//methods

//it is a param to give details of the user by giving the id of the user
exports.getUserById = (req, res, next, id) => {
	User.findById(id).exec((err, user) => {
		if (err || !user) {
			return res.status(400).json({
				error: 'No user was found in DB',
			});
		}
		req.profile = user;
		// console.log(req.profile);
		next();
	});
};

//it is a middleware to find the details of the user when user/id route is called
exports.getUser = (req, res) => {
	//these are the methods to make these properties not to be shown when we want the information of the users
	req.profile.salt = undefined;
	req.profile.password = undefined;
	req.profile.createdAt = undefined;
	req.profile.updatedAt = undefined;

	return res.json(req.profile);
};

exports.updateUser = (req, res) => {
	User.findByIdAndUpdate(
		{ _id: req.profile._id }, //to get the id from the user object
		{ $set: req.body }, //to update all the things in the body $set is used here
		{ new: true, useFindAndModify: false }, //from docs :(
		(err, user) => {
			if (err || !user) {
				return res.status(400).json({
					error: 'Update not sucessfull!',
				});
			} else {
				user.salt = undefined;
				user.encry_password = undefined;
				res.json(user);
			}
		}
	);
};
//user ends..
