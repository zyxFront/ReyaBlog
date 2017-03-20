/*
	服务器端handlerbares自定义方法
	通过自定义方法使得handlerbars框架更完善
	更好的满足需求
 */

'use strict';

let handlebars = require('handlebars');

handlebars.registerHelper('encodeURIComponent',(url)=>{
	return encodeURIComponent(url);
});

module.exports = handlebars;