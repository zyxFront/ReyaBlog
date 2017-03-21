'use strict';

let mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/ReyaBlog");

// 骨架模板
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

// 模型
let Article = mongoose.model('Article',articleSchema);
let article = new Article({
	articleId 		:"String",
	title 			:"【声音江】解花语",
	author			:"reya",
	createDate 		:new Date(),
	browseHistory	:123,
	labels 			:['a'],
	imgUrl 			:"String",
	summary 		:"人们总是这样，喜新厌旧，疯狂地喜欢着新鲜的东西，比如芊芊的舞。因为爱而自我怀疑的人，你永远不知道你有多美。",
	content 		:"String"
});

article.save(function(err){
	if(err){
		console.log('save failed!');
		return;
	}

	console.log('new one');
});