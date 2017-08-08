var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var leadSchema = new Schema({
	'email' : String,
	'fname' : String,
	'company' : String,
	'startDate' : Date,
	'salesman' : String
});

module.exports = mongoose.model('lead', leadSchema);
