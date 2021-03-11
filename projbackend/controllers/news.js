exports.getNews = (req, res) => {
	return res.json(req.articles);
};
