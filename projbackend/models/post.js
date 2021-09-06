const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const postSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
			trim: true,
		},
		content: {
			type: String,
			required: true,
		},
		branch: {
			type: String,
		},
		semester: {
			type: Number,
		},
		subject: {
			type: String,
		},
		like: {
			type: Number,
			default: 0,
		},
		dislike: {
			type: Number,
			default: 0,
		},
		user: {
			type: ObjectId,
			ref: 'User',
		},
		userName: {
			type: String,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Post', postSchema);
