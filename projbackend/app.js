require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const app = express();

//routes
const authRoutes = require('./routes/authentication.js');
const newsRoutes = require('./routes/news');

//MongoDb Connection
mongoose
	.connect(process.env.DATABASE, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(function () {
		console.log('DB CONNECTED');
	});

app.use('/api', authRoutes);
app.use('/api', newsRoutes);

const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
	res.send('hellos...');
});

//starting the server
app.listen(port, () => {
	console.log(`app is running at ${port}`);
});
