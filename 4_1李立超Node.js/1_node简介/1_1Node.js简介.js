/* 
        node文档：https://nodejs.dev/en/
    Node.js简介
        Node.js是一个构建在V8引擎之上的JavaSc运行环境。

        它使得JS可以运行在浏览器以外的地方。相对于大部分的服务端语言来说，Node.js有很大的不同，它采用了单线程，且通过异步的方式来处理并发的问题。

        Node.js诞生于2009年目前最新的版本是18.x。

        Node.js
            - 运行在服务器端的js
            - 用来编写服务器
            - 特点：
                - 单线程、异步、非阻塞   Java是多线程
                - 统一API

        Nvm ：可以使用不同版本node.js    使用 nvm 管理版本（nvm常用命令）
            指令：
                nvm list - 显示已安装的node版本
                nvm install 版本 安装指定版本的node
                配置nvm的镜像服务器
                    nvm node_mirror https://npmmirror.com/mirrors/node/
                nvm install latest - 安装最新版
                nvm use 版本 - 指定要使用的node版本

                cls 清屏

        
                nvm install latest 安装最新版本node.js
                nvm use 版本号 使用某一具体版本，例如 ：nvm use 14.3.0
                nvm list 列出当前已安装的所有版本
                nvm ls 列出当前已安装的所有版本
                nvm uninstall 版本号 卸载某一具体版本，例如：nvm use 14.3.0
                nvm ls-remote Mac版本中,列出全部可以安装的node版本
                nvm ls available windows版本,列出全部可以安装的node版本
                nvm current 显示当前的版本
                nvm alias 给不同的版本号添加别名
                nvm unalias 删除已定义的别名
                nvm reinstall-packages 在当前版本node环境下，重新全局安装指定版本号的npm包

                
        node.js 和 JavaScript的区别：
            JavaScript 主要是 ECMAScript 数组对象（DOM BOM）在浏览器里运行的
            node.js也有ECMAScript  没有DOM BOM
*/   

 /* 
    一、在Node.js环境中执行Javascript代码
        (1)win + r 打开终端  输入rmd 打开命令提示符 
            或者 在js文件夹中 按住Shift + 鼠标右键，点击 在此处打开PowerShell窗口
        (2)输入 node要执行的js文件路径
    二、fs文件系统模块
        2.1、什么是fs文件系统模块
            fs模块是Node.js官方提供的、用来操作文件的模块。提供了一系列方法和属性，用来满足用户对文件的操作需求。
                例如：fs.readFile()方法，用来读取指定文件中的内容
                    fs.writeFile()方法，用来向指定文件中写入内容
            如果要在JavaScript代码中，使用fs模块来操作文件，则需要先导入：
                 Const fs = require(‘fs’)
        2.1.1、读取指定文件中的内容
             (1)fa.readFile()语法格式:
                    fa.readFile(path[, options], callback)
                    括号内为参数，[]内的参数为可选参数，()内为必选参数
                        参数一：Path:必选参数，字符串，表示文件路径
                        参数二：可选参数，表示以什么编码格式来读取文件
                        参数三：必选参数，文件读取完成后，通过回调函数拿到读取结果
*/
