const Comment = require('../models/comment');

exports.createComment = (req, res) => {
	console.log('manis');
	const { content } = req.body;
	console.log(content);
	const comment = new Comment({ comment: content });

	comment.save((error, comment) => {
		if (error) {
			console.log(error);
			return res.status(400).json({
				error: 'Not able to save comment!!',
			});
		}

		res.send(comment);
	});
};
