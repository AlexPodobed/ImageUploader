var fs = require('fs');
var path = require("path");
var rootPath = process.cwd();

exports.upload =  function(req, res){
  var filesDir = path.join(rootPath, 'files'),
      filesIndex = 0,
      fstream;

  if(!fs.existsSync(filesDir)){
    fs.mkdirSync(filesDir);
  }

  req.pipe(req.busboy);
  req.busboy.on('file', function(fieldname, file, filename){
    console.log('uploading: ' + filename);
    filesIndex++;

    fstream = fs.createWriteStream(path.join(filesDir, filename));
    console.log(path.join(filesDir, filename))
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
};
