###  AJAX 
  -  Asynchronous [eɪˈsɪŋkrənəs] （异步）  Javascript (js)     And(和)   XML (标记语言，数据)  

  -  它是一个前后台数据交互的一种技术（找到后台拿到数据的方式）

  -  难点：如何操作数据（各种数据类型的应用），异步，参数如何拼接（字段又是什么东西？），
           如何开启服务？

  - ajax获取数据并不难，难的是拿到数据之后怎么办？

```
   在工作中：
      $.ajax({})
      fetch('')
      axios.get('')
      wx.request('')
      jsonp_fetch('')
      ...


   ajax:
      <script src="data.js"></script>
      let data = {
          "0":{
              "pid":-1;
              "id":0,
              "title":'我的文档',
              checked:false
          },
          "1":{
             "pid":-1;
              "id":0,
              "title":'我的音乐',
              checked:false 
          }，
      }
  ```
 -  XML  -> 最后就是json文件，本质上是属于字符串类型的，-> '{}'或者'[]' 
         ->  最后拿到data文件。

 - ajax最大的优点：可以进行局部数据刷新，减轻服务器压力，提升用户体验



 ###  如何启动服务器？

   -点击（点进去） 服务器文件（hello world）注意：文件不能是中文
   - 首先看一下有没有node_modules文件，有就不用管，没有的话则需要安装依赖文件
   -打开npm的两种方式：shift + 鼠标右键， 选择在此处打开终端;
                      把服务器文件拖到VScode中，点击终端。

   - npm install 安装依赖文件
     - 输入npm run start  或者输入 node app  按tab键（自动帮你补齐）

     -***浏览器要输出localhost/xx.html （打开方式），千万不要双击直接运行文件(不要在本地打开，要使用localhost的方式去打开)

     - 代码放到public文件夹下


 ###  ajax的交互模型
   - 创建一个XMLHTTPRequest对象
   - 填写请求方式以及请求地址，判断是否异步
   - 发送请求
   - 监听数据响应
   - 接收到数据 



 ### Get和Post
  ```
     Get是通过URL进行请求的（四步搞定）

     http://www.baidu.com:88/get?user=lilei#age=18 
     协议     域名        端口 接口  查询信息    hash信息

     get的优势及缺点：
         最大优势就是速度很快（常用于展示类的）

         缺点：相对来说不安全（在请求时会显示地址栏或者历史记录里面可以查到）;
               请求体积是很有限的（但会根据浏览器标准来限制）,
               上传大的东西根本传不了;
         在低版本IE下有缓存问题(/get?user=liucheng).
        第一次和第二次请求的URL是一致的，那么第二次会走第一次的缓存

   如何解决？
     1.不用get改用post
     2.URL每次不一致
        /get?user=liucheng&random=321321321
        /get?user=liucheng&random=321332576

   输入的内容是中文时，在IE下会出现错误请求和返回。
   是因为IE的低版本在解析中文的时候解析会出现问题。

   解决方案：
       1.把中文转为URI编码
         encodeURI('续') -> %E7%BB%AD
                encodeURIComponent
       2.URL编码转为中文
           decodeURI('%E7%BB%AD') -> 续
           decodeURIComponent('%E7%BB%AD')          
          


 Post是通过服务器来发送请求的(跟用户相关的信息，发送体积比较大的文件) （至少6步才能发送请求成功）
   
 优点：相对安全，因为它是通过服务后端来发送请求的;
      理论上体积可以是无限大（但是后端开发人员都会给予限制）

 缺点：比get要慢;
       必须添加请求头
       xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');     


