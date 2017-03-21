'use strict';

let handlebars 	= require('handlebars');
let config 		= require('../../config');

module.exports = (req,res)	=> {
	console.log('start');
	var articles = [{
		title:'【声音江】解花语',
		imgUrl:'/static/images/flower.jpg',
		summary:'人们总是这样，喜新厌旧，疯狂地喜欢着新鲜的东西，比如芊芊的舞。因为爱而自我怀疑的人，你永远不知道你有多美。',
		url:'/id'
	},{
		title:'【声音江】解花语',
		imgUrl:'/static/images/flower.jpg',
		summary:'人们总是这样，喜新厌旧，疯狂地喜欢着新鲜的东西，比如芊芊的舞。因为爱而自我怀疑的人，你永远不知道你有多美。',
		url:'/id'
	},{
		title:'【声音江】解花语',
		imgUrl:'/static/images/flower.jpg',
		summary:'人们总是这样，喜新厌旧，疯狂地喜欢着新鲜的东西，比如芊芊的舞。因为爱而自我怀疑的人，你永远不知道你有多美。',
		url:'/id'
	}];
		
	res.send(config.html.index({articles:articles}));
}