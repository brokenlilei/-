###  Vue指令
  - 为了方便开发者进行开发，Vue中使用了指令，这些指令包含很多
     元素身上的属性和JS的一些内置类方法。

  + v-html  -->  innerHTML
  + v-text  -->  innerText
  + v-show  -->  display:block/none   在页面显示的是布尔值
  + v-if    看一下布尔值是否为true，如果是true就渲染页面否则就不渲染
  + v-else  限制:他上面必须是v-if或者v-else-if
  + v-else-if  限制：前一兄弟元素必须有v-if或者 v-else-if。
  + v-on：（缩写为@） 事件名="事件函数|简单语法"
          一般事件函数是放在methods下

          - $event 如果不传参，第一个参数就是事件对象
                    ***如果传了参还是想拿到事件对象，则需要在模板中的事件函数内传一个
          - 修饰符 : .13  .enter  .stop  .prevent   .once  ....
          - 解绑事件可以使用：
             ```
                @mousedown="onoff && down($event)"
                当onoff是真的就添加事件，假的就解除事件

             ```

   + v-for="val,key in 数据"   --->  遍历对象或者数组
       假如是数组val就是数组的成员，key就是索引
       如果是对象val键值，key为键名                          