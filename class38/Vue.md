###  Vue
  - jquery  52.8K
  - Angular  55.8K
  - React   141K
  - Vue     155K
     -  MVVM(双向数据绑定)
     - 难点：父子组件的床底，路由配置和使用，生命周期，vueX，逻辑很重要，做项目
>    https://cn.vuejs.org/

- 渐进式框架(弱主张的，逐渐学习的，有过程的。)
- Vue全家桶：vue，vueX，vue-router，vue-cli统称为Vue全家桶


### 如何使用Vue
  - 引入vue
  - 在HTML里挂载一个根元素
     ```
            <div id="app"></div>
     ```
  - 给vue实例化一下  ==>  new Vue({})

  - 配置参数：
    + el: '挂载元素',
    + data(存数据): 在new Vue下值为 ***对象***

  - 输出数据用 双花括号  {{放数据名称即可}}  小胡子      