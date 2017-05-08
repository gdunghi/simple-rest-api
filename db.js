var mongojs = require('mongojs');

var databaseUrl = 'mongodb://localhost:27017/Tododb';
var collections = ['users', 'clubs'];

var connect = mongojs(databaseUrl, collections);

module.exports = {
	connect: connect
};