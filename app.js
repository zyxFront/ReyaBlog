'use strict';

let express 		= require('express');
let logger  		= require('morgan');
let cookieParser 	= require('cookie-parser');
let bodyParser 		= require('body-parser');
let compression 	= require('compression');
	
let app 			= express();

app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

// 路由器中间件
app.use('/',require('./routes/base'));

// catch 404 and forward to error handler
app.use(function(req,res,next){
	let err = new Error('Not Found!');
});

// error handler
app.use(function(err,req,res,next){
	res.locals.message = err.message;
	res.locals.error = req.app.get('env')==='development' ? err:{} ;

	res.status(err.status || 500);
	res.render('error');
});

let server = app.listen(process.env.PORT || 36000,process.env.IP || '127.0.0.1',()=>{
	let host = server.address().address;
	let port = server.address().port;

	console.log('ReyaBlog started,Listening at http://%s:%s',host,port);
});

module.exports = app;