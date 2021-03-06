'use strict';

var _ = require('lodash');
var fs = require('fs');
var path = require("path");
var Work = require('./work.model');
var rootPath = path.join(process.cwd(), 'client', 'assets', 'files');
var rmdir = require('rimraf');

// Get list of works
exports.index = function(req, res) {
  Work.find({}).sort({created: 1}).exec(function (err, works) {
    if(err) { return handleError(res, err); }
    return res.json(200, works);
  });
};

// Get a single work
exports.show = function(req, res) {
  Work.findById(req.params.id, function (err, work) {
    if(err) { return handleError(res, err); }
    if(!work) { return res.send(404); }
    return res.json(work);
  });
};

// Creates a new work in the DB.
exports.create = function(req, res) {
  Work.create(req.body, function(err, work) {
    if(err) { return handleError(res, err); }
    return res.json(201, work);
  });
};

// Updates an existing work in the DB.
exports.update = function(req, res) {
    var isRemoveArray = req.query && !!req.query.remove;

  if(req.body._id) { delete req.body._id; }

  Work.findById(req.params.id, function (err, work) {
    if (err) { return handleError(res, err); }
    if(!work) { return res.send(404); }

    var updated = _.merge(work, req.body);
    if(isRemoveArray){
        updated.images = [];
    }
    updated.save(function (err) {
      if (err) { return handleError(res, err); }

      if(isRemoveArray){
          rmdir(path.join(rootPath, req.params.id), function (err) {
              if (err) return handleError(res, err);
              return res.send(204);
          });
      }else{
          return res.json(200, {status: 'success'});

      }
    });
  });
};

exports.updateImages = function(id,imgPath, res){
  Work.findByIdAndUpdate(id, {
    $push: {images: imgPath}
  }, function(err, model){
    if (err) { return handleError(res, err); }
    return res.json(200, {status: "OK"});
  });
};

// Deletes a work from the DB.
exports.destroy = function(req, res) {
  Work.findById(req.params.id, function (err, work) {
    if(err) { return handleError(res, err); }
    if(!work) { return res.send(404); }
    work.remove(function(err) {
      if(err) { return handleError(res, err); }
        rmdir(path.join(rootPath, req.params.id), function(err){
            if(err) return handleError(res, err);

            return res.send(204);
        });
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
