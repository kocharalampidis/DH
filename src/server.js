/** @format */

const http = require('http');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

let httpServer;

// initialaize connection to server
function initialize() {
	return new Promise((resolve, reject) => {
		const app = express();

		httpServer = http.createServer(app);
		app.use(morgan('combined')); //shows logger desc.

		app.get('/', (req, res) => {
			res.end('Hello World!');
		});

		require('./app/routes/getItems')(app);

		const port = require('../src/app/config/serverConfig');
		httpServer
			.listen(port.HOST)
			.on('listening', () => {
				console.log(`Web server listening on http://localhost:${port.HOST}`);

				resolve();
			})
			.on('error', (err) => {
				reject(err);
			});
	});
}

module.exports.initialize = initialize;

// close the  connections
function close() {
	return new Promise((resolve, reject) => {
		httpServer.close((err) => {
			if (err) {
				reject(err);
				return;
			}

			resolve();
		});
	});
}

module.exports.close = close;
