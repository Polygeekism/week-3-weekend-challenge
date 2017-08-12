var pg = require('pg');

var config = {
	database: 'betelgeuse', //name of the database
	host: 'localhost', //where the databse is currently sitting
	port: 5432, //default port for postico
	max: 10, //number of simultaneous connections
	idleTimeoutMillis: 30000 //30 seconds to try and connect
}
module.exports = pg.Pool(config);