const express = require('express');
const router = express.Router();
const { getUserById, getUser, updateUser } = require('../controllers/user');
const { isSignedIn, isAuthenticated, isAdmin } = require('../controllers/auth');
const {
	createPost,
	getPostById,
	updatePost,
	deletePost,
	filterPosts,
	getAllPosts,
	getUserPosts,
	searchPost,
} = require('../controllers/post');

router.param('userId', getUserById);
router.param('postId', getPostById);

router.post('/post/create/:userId', isSignedIn, isAuthenticated, createPost);

router.put(
	'/post/update/:userId/:postId',
	isSignedIn,
	isAuthenticated,
	updatePost
);

router.delete(
	'/post/delete/:userId/:postId',
	isSignedIn,
	isAuthenticated,
	deletePost
);

//filter posts
router.post('/posts/filter', filterPosts);

router.get('/posts/all/:userId', isAuthenticated, isAdmin, getAllPosts);

router.get('/posts/user/:userId', isAuthenticated, getUserPosts);

router.get('/searchtest/:keyword', searchPost);

module.exports = router;
