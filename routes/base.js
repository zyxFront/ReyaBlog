'use strict';

let express	= require('express');
let router 	= express.Router();

router.get('/',require('./get/index'));
router.get('/id',require('./get/article'));

module.exports = router;