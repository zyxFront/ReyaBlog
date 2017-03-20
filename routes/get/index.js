'use strict';

let handlebars 	= require('handlebars');
let config 		= require('../../config');

module.exports = (req,res)	=> {
	var articles = [{
		title:'nihao',
		summary:'test test',
		url:'http://www.baidu.com'
	},{
		title:'nihao',
		summary:'test test',
		url:'http://www.baidu.com'
	},{
		title:'nihao',
		summary:'test test',
		url:'http://www.baidu.com'
	}];
		
	res.send(config.html.index(articles));
}