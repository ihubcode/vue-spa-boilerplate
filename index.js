'use strict';
const util = require('util');
const path = require('path');
const express = require('express');
const app = express();

const settings = require('./settings');
app.set('trust proxy', 1);

let env = process.env.NODE_ENV;
if (!env) {
	env = process.env.NODE_ENV = 'production';
}

if (env === 'development') {
	// static
	app.use('/static', express.static(path.resolve(__dirname, 'webapp/static'), {maxAge: 86400000 * 7}));
	const dev = require('./webapp/build/dev');
	dev.use(app);
} else {
	app.use(express.static(__dirname + '/webapp/dist', {maxAge: 86400000 * 7}));
	app.use((req, res) => {
		res.sendFile(__dirname + '/webapp/dist/index.html'); // html5 push state
	});
}

app.listen(settings.port);
util.log(settings.appname + ' runnng port:' + settings.port);
