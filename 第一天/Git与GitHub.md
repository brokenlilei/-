###   git与GitHub
     <git  版本控制工具

 SVN：集中式
      弊端：版本控制需要网络支持，一般都是局域网；外面的人也维护不到内部资源；
           中央服务器不一定稳定，一旦出事中央服务器所有资源都洗白白

 Git：分布式
       不需要网络支持就可以进行版本迭代；只要可以上网和开发权限，外界的开发者
       都能参与开发；就算远程仓库出事，计算机已经有了历史记录。

 GitHub：程序员交友网站，远程仓库，帮助学习

 > Git的三大区域
   工作区（本地）
   暂存区（保护工作区和版本区）
   版本区（版本库，历史区）只有形成版本才能进行版本控制 

  -形成版本就是根据.git文件来操作的，所以说要进行版本控制，必须要有.git这个隐藏文件。

  -按着tab键可以补全命令

  -设置用户信息：
            git config --global user.name 'xxx'
            git config --global user.eamil 'xxx'
            


  -创建版本仓库
     git  init（想在哪儿进行版本控制，就在哪个文件夹下使用右键点击git bash here


  -查看状态
     -git status
     如果查看状态时发现文件是红色的，就说明文件没有进行版本控制

 -工作区到暂存区
      -git add 文件名
      -git add.   快速把所有文件放入暂存区

 -暂存区放到版本区
      -git commit -m  '给版本取个名字'

-快速从工作区到版本区
   -git  commit -a -m '注释名' (前提是之前上传过一次)     

 -查看版本
     -git log
     -git reflog   查看回滚后的历史记录。
     出现nothing to commit 说明没有文件被管理了，已经都被管理了。                                    


-回滚
    git  reset  --hard 历史ID 



- touch .gitignore (创建.gitignore文件)

在文件中填写过滤的文件或文件夹

*.zip、*.rar、*.via、*.tmp过滤这些后缀名的文件

排除指定文件夹下的文件， /txt/1.txt

排除指定文件夹  \txt2

git rm -r --cached .  如果已经提交过的代码，使用.gitignore是无效的，那么请使用前面这段代码


- clear清屏

- 如果发现:号就按Q键退出

- 查看各大区域的区别
    - 工作区到暂存区  git diff
    - 工作区到版本区  git diff master
    - 暂存区到版本区  git diff --cached



  -把本地git的版本上传到GitHub上去管理。
     -设置密钥： ssh-keygen -t rsa -C "your_email@example.com"
     -在github上登录github，右边的头像列表中有一个设置，找到ssh和GPG密钥，找到新的ssh密钥，点击，
        把密钥放到文本上方，点击添加ssh密钥。

   -在github上创造一个项目
     .加号下拉列表，第一个创建新项目
     .仓库名称
     .说明
     .公开
     .README打钩

  -查看远程仓库
       .git remote -v
  -创建远程仓库
     .git remote add origin  远程地址
         比如: git remote add origin git@github.com:nizp/2019-10-8.git 

  -同步远程
     .git pull起源大师

  -推到远程
      .git push origin （远程名字） master（分支名）
              比如:git push origin master

  -删除远程仓库
      .get temote删除远程名字

  -克隆项目
       .找到远程仓库地址，git clone远程仓库地址回车




       node的安装 （自带就有npm)

       .项目初始化
           。npm初始化-y

       .npm install 安装程序

       .npm uninstall 删除安装程序

       .npm目前是全球最大的包管理平台(里面有很多代码资源)

    npm安装nrm -g

      .测nrm的速度
        。NRM测试

      .切换资源路线
        。NRM使用淘宝

      .yarn的安装
        。npm安装yarn -g

        。yarn add安装程序

        。yarn remove要删除的程序                                   



