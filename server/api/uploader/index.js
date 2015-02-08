'use strict';

var express = require('express');
var controller = require('./uploader.controller');

var router = express.Router();

router.post('/', controller.upload);

module.exports = router;

