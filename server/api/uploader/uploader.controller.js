var fs = require('fs');
var path = require("path");
var rootPath = path.join(process.cwd(), 'client', 'assets');
var workCtrl = require('../work/work.controller');

console.log(rootPath)
exports.upload =  function(req, res){
  var filesDir = path.join(rootPath, 'files'),
      workDir = path.join(filesDir, req.query.id),
      fstream;

  req.pipe(req.busboy);

  if(!fs.existsSync(filesDir)){
    fs.mkdirSync(filesDir);
  }

  if(!fs.existsSync(workDir)){
    fs.mkdirSync(workDir)
  }

  req.busboy.on('file', function(fieldname, file, filename){
    console.log('uploading: ' + filename);

    fstream = fs.createWriteStream(path.join(workDir, filename));
    file.pipe(fstream);

    fstream.on('close', function(){
      var imgPath = '/assets/files/' + req.query.id + '/' + filename;
      workCtrl.updateImages(req.query.id, imgPath, res)
    });
  })
};







/*
*
*
*
* req.busboy.on('file', function(fieldname, file, filename){
 console.log('uploading: ' + filename);
 filesIndex++;

 fstream = fs.createWriteStream(path.join(workDir, filename));
 file.pipe(fstream);

 fstream.on('close', function(){
 console.log(filename + ' uploaded')
 filesIndex--;

 if(filesIndex === 0){
 console.log('last one');
 res.send({success: "success"});
 }
 })
 })
*
*
*
*
* */
