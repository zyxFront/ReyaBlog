'use strict';

let fs = require('fs');
let handlebars = require('./lib/handlebarsHelper');

const global = {
	__html__:{},
	get html(){
		return this.__html__
	}
};

global.init = ()=>{
	return new Promise((resolve,reject) => {
		global.__html__.index 	= handlebars.compile(fs.readFileSync('./public/index.html','utf-8'));
		global.__html__.article = handlebars.compile(fs.readFileSync('./public/article.html','utf-8'));
		resolve();
	});
};

module.exports = global;