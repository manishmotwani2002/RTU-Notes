const express = require('express');
const { isAuthenticated } = require('../controllers/auth');
const { createComment } = require('../controllers/comment');
const router = express.Router();

router.post('/comment', createComment);

module.exports = router;
