###  Jquery
   -  是一个JS的类库，它简化了DOM操作，动画操作，兼容性和数据请求操作。

   -  https://www.jquery123.com/ 中文网

   -  1.72左右的版本

   -  (安装) npm init -y 生成一个package.json文件
   -   npm install jquery  -D

   -   jquery 有多个版本
          源码版（学习版）： jquery.js
          压缩版：jquery.min.js

   -  引用jquery  <script src="./node_modules/jquery/dist/jquery.min.js"></script>
     

###  选择器
   -  $符 就是 jquery对象
      $() 就是 fn()  相当于函数调用
      CSS如何去选择，Jq就如何去选择

  - ```
     $('#box')   获取id
     $('#li')    获取所有li元素
     $('.active')  获取所有的.active元素
     $('input[type="button"]')   属性选择器
     $('input[type="button"]')   
     $('li:even')   偶数，js从0开始计数
     $('li:odd')    奇数，JS从0开始计数

     $(':button)  伪类选择器(获取type为button的元素)

     $('div:eq(0)')    代表找第一个div

     ```

###  属性操作
 - attr  ->  getAttribute,setAttribute    获取/设置一个属性
 - removeAttr  ->   removeAttribute      删除一个属性
 - prop       ->    表单的状态布尔值（表单元素使用的）
 - val     ->  value
 - html()  ->  innerHTML
 - text()  ->  innerText



###  样式操作
   -  css()   设置行间样式   -> style

   $('#box').css('width')   ->  获取style的宽度
   $('#box').css('width',200) ->  设置宽度
     $('#box').css({
         'width':200,
         'background':'red'
     })
               -->   批量添加

    显示：  show()
    隐藏：  hide()


###   jquery对象转原生对象，原生对象转jquery对象
  ```

    原生对象转jquery只需要包住$()即可

    box --> $(box)  就变成了jquery对象

    jquery对象转原生对象：
       $box --> $box.get(0)   ||   $box[0]   

  ```                 