const Post = require('../models/post');
var ObjectId = require('mongoose').Types.ObjectId;

exports.createPost = async (req, res) => {
	const { title, description, branch, semester, content, subject } = req.body;
	console.log('manish');
	// console.log(req);

	console.log(title, description, branch, semester, content, subject);

	const details = req.body;
	details.user = req.profile._id;
	console.log('req.profile', req.profile);
	details.userName = req.profile.name;

	if (!title || !branch || !semester || !subject || !content) {
		return res.status(422).json({
			error: 'Please enter all the required fields',
		});
	}

	const post = new Post(details);

	console.log('POST', post);
	post.save((err, post) => {
		if (err) {
			console.log('err', err);
			return res.status(422).json({
				err: 'not able to save post in DB',
			});
		}
		res.json({
			post,
		});
	});
	// });
};

exports.getPostById = (req, res, next, id) => {
	Post.findById(id).exec((err, post) => {
		if (err || !post) {
			return res.status(422).json({
				err: 'No post found in DB',
			});
		}
		req.post = post;
		next();
	});
};

exports.updatePost = (req, res) => {
	const details = req.body;
	const post = new Post(details);
	post.save((err, post) => {
		if (err) {
			return res.status(422).json({
				err: 'not able to save post in DB',
			});
		}
		res.json({
			post,
		});
	});
};

exports.deletePost = (req, res) => {
	const postId = req.params.postId;
	Post.remove(
		{
			_id: postId,
		},
		(err, response) => {
			if (err) {
				return res.status(422).json({
					err: 'Post can not be removed from DB',
				});
			}
			res.send('Succesfully Deleted Post From the DB!!');
		}
	);
};

exports.filterPosts = (req, res) => {
	const { semester, branch, subject } = req.body;

	Post.find({ semester: semester, branch: branch, subject: subject })
		.then((response) => {
			console.log(response);
			res.send(response);
		})
		.catch((err) => {
			console.log(err);
			res.send(err);
		});
};

exports.getAllPosts = (req, res) => {
	Post.find()
		.then((response) => {
			console.log(response);
			res.send(response);
		})
		.catch((error) => {
			console.log(error);
			res.send(error);
		});
};

exports.getUserPosts = (req, res) => {
	const userId = req.params.userId;

	Post.find({ user: new ObjectId(userId) })
		.then((response) => {
			console.log(response);
			res.send(response);
		})
		.catch((err) => {
			console.log(err);
			res.send(err);
		});
};

exports.getUserForPost = (req, res) => {
	req.profile.salt = undefined;
	req.profile.password = undefined;
	req.profile.createdAt = undefined;
	req.profile.updatedAt = undefined;

	return res.json(req.profile);
};

exports.searchPost = (req, res) => {
	const keyword = req.params.keyword;
	console.log(keyword);

	var regex = new RegExp(keyword, 'i');

	Post.find({ $or: [{ description: regex }, { title: regex }] })
		.then((response) => {
			console.log('response', response);
			res.send(response);
		})
		.catch((error) => {
			//error handling
			console.log('error', error);
			res.send(error);
		});
};
