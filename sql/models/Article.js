'use strict';

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let articleSchema = new Schema({
	articleId 		:String,
	title 			:String,
	author			:String,
	createDate 		:Date,
	browseHistory	:Number,
	labels 			:Array,
	imgUrl 			:String,
	summary 		:String,
	content 		:String
});

let Article = mongoose.model('Article',articleSchema);

module.exports = Article;