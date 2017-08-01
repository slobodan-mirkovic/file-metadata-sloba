
var express = require('express');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

var app = express();


  
  app.get('/', function(req,res){
  res.sendFile(process.cwd() + '/views/index.html');
});
     
  app.use(express.static(process.cwd() + '/public'));

app.post('/filesize', upload.any(), function (req, res, next) {
  console.log(req.files);
  res.send({ size: req.files[0].size})
})
  
 
     






// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;