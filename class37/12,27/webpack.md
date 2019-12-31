###  webpack 
  - **模块化**打包工具，进行一些浏览器不能识别的语法的**编译**(目的是为了让浏览器可以识别)
  - 重点：如何配置（有兴趣可以研究一下如何优化）
  - 难点：敲得少，不敢解决报错（因为报错是全英文）
  - 核心：入口(entry)、输出(output)、loader、插件(piugins),dev-server(服务器配置)
  - 遵循的是common.js规范(node.js编写)
  

> 通过入口文件，分析所有文件的依赖关系

### 使用webpack
  
- 安装流程
   -  npm install webpack -g（全局安装，只能安装一次）
   -  新建一个文件夹（该文件夹名字不能是中文&&不能叫webpack）,npm init -y
   -  npm install --save-dev webpack (局部安装) ;
      或者  yarn add webpack --dev(局部安装)

    ```
        package.json中找到scripts
        "scripts": {
            "dev":"webpack"
        }
        npm run dev     yarn run dev
    ```   
  -  手动创建一个webpack.config.js文件
  -  mode:production  生产模式  -->  打包上线，压缩版
          development  开发者环境 --->  码农需要的环境，未压缩



  ###  loader
     - loader 让 webpack 能够去处理那些非 JavaScript 文件
        （webpack只能解读JS）

 ###  dev-server
     -  webpack-dev-server


###  ES6模块 
   -  ES6 -> ECMAScript6 -> ECMAScript2015 +

    - 是 JavaScript 语言的下一代标准
    - ES6 既是一个历史名词，也是一个泛指，含义是 5.1 版以后的 JavaScript 的下一代标准，涵盖了 ES2015、ES2016、ES2017 等等

+ 引入
    import ..  from '路径'
+  导出
     export  要导出的内容

 -  第一种写法：
     ```
        import 随意取名字 from  '路径'
        export default xxx

        注意的是一个文件中只能有一个default，不然就报错
    ```

  - 第二种写法：
       ```
        import {固定的名字，跟导出的名字一致} from  '路径'
        export {xxx} 

        如果需要改名字，那么使用as
            比如:
                import {ary as arr} from  '路径'
                arr就是ary 
        ```
+  导入的时候可以使用*来导入，但是必须要用as换个名字
    比如：
       import * as aaa from '路径'
      这就等于把路径中的所有内容都获取出来了，并且是一个对象。
      aaa.xxx去拿对象里面的值，如果是default，要用aaa.default.xxx去拿。                 