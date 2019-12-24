/*
   1,通过全局对象下的_filename能够获取当前文件的绝对路径（包含文件本身）
         console.log(_filename);

   2,表示当前执行脚本所在的目录（运行文件的根目录），不包含文件本身的内容
   
   
   let path = require('path')   找路径的
   console.log(path.join('wwwroot','./api.js));
   
   自动帮我们找到当前文件的路径和配置路径进行连接
   C:\class\2019-9-16\officialclass\2019-12-23\1.js
*/