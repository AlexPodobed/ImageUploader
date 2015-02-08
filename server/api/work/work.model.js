'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var WorkSchema = new Schema({
  heading: String,
  description: String,
  images: []
});

module.exports = mongoose.model('Work', WorkSchema);
