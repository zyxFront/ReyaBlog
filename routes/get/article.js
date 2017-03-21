'use strict';

let handlebars 	= require('handlebars');
let config 		= require('../../config');

module.exports = (req,res) => {
	const STYLE = true ? 'orange':'blue';
	const data = {
		style:STYLE,
		author:'reya',
		createDate:'2017-03-17',
		browseHistory:2017,
		labels:[{
			link:'http://www.baidu.com',
			label:'生活'
		},{
			link:'http://www.sogou.com',
			label:'饮食'
		},{
			link:'http://www.mogujie.com',
			label:'习惯'
		}],
		article:''
	};
	res.send(config.html.article(data));
}