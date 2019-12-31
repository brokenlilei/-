const express = require('express');
const bodyParser = require('body-parser');  //post能够用req.body
const app = express();
const multer = require('multer');
  
  app.use(express.static('www'));  //[1,2,3,4,5]
 app.use(multer({dest:'upload/'}).array('filename'));//single单个，array数组，可上传多张
 app.use(bodyParser.json());    //解决axios不能够用对象的问题
 app.use(bodyParser.urlencoded({extended:false}));
 app.use('/upload',require('./router/upload/upload'));

app.listen(80);
