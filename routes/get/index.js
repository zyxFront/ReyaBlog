'use strict';

let handlebars 	= require('handlebars');
let config 		= require('../../config');
let mongoose 	= require("mongoose");
let Article 	= require("../../sql/models/Article");

mongoose.connect("mongodb://127.0.0.1:27017/ReyaBlog");

module.exports = (req,res)	=> {
	Article.find({},function(err,articles){
		if(err){
			console.log(err);
			res.send('Error:',err);
		}else{
			res.send(config.html.index({articles:articles}));
		}
	});
}