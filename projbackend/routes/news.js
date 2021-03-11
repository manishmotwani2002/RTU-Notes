const express = require('express');
const { getNews } = require('../controllers/news');
const router = express.Router();

//news api route
router.get(
	'http://newsapi.org/v2/everything?q=tesla&from=2021-02-05&apiKey=1d8a4a3c4f8e4becbf220810c8b06dba',
	getNews
);

router.post('/news', getNews);

module.exports = router;
