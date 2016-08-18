var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
	title: {type: String, required: true},
	text: {type: String, required: true},
	author: {type: String, required: true},
	author_id: {type: String, required: true},
	date: {type: Date, require: true},
	comments: [
		{
			text: String,
			author: String,
			date: Date
		}
	]
});

module.exports = mongoose.model('Article', articleSchema);