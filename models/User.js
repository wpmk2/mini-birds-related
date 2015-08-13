var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var userSchema = new Schema({
	email: { type: String, required: true, unique: true },
	username: { type: String, maxlength: 20, required: true, unique: true },
	level: { type: Number, min: 1, max: 100 },
	location: { type: String, maxlength: 40 },
	member: { type: Boolean, default: false }
});

module.exports = mongoose.model("User", userSchema);