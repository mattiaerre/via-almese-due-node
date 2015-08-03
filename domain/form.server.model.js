'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var formSchema = new Schema({
	fullName: String,
	email: String,
	telephoneNumber: String,
	notes: String,
	language: String,
	when: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Form', formSchema);
