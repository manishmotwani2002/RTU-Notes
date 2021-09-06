const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
	comment: {
		type: String,
		trim: true,
	},
});

module.exports = mongoose.model('Comment', commentSchema);
