// 开发文件起名不要数字开头，尽量英语，不要中文
/* 
    什么是模块？
        模块简单理解其实就是一个代码片段，本来写在一起的JS代码，我们按照不同的功能将它拆分为一个一个小的代码片段，
        这个代码片段就是一个模块。简单来说，就是化整为零。 

    
    早期的网页中，是没有实质的模块规范的
        我们实现模块化的方式，就是最原始的通过script引入多个js文件
        问题：
            1. 无法选择要引入模块的哪些内容
            2. 在复杂的模块场景下非常容易出错
            ......
        于是，我们就继续在js中引入一个模块化的解决方法
    
    在node中，默认支持的模块化规范叫做就是CommonJS
        在CommonJS中，一个js文件就是一个模块

    CommonJS规范
        - 引入模块
            - 使用require()函数来引入模块
            - 引入自定义模块时
                - 模块名要以 ./ 或者 ../ 开头
                - 扩展名可以省略
                    - 在CommonJS中，如果省略js文件扩展名
                        node会自动为文件不全扩展名
                            ./m1.js 如果没有js，它会寻找./m1.json
                            js --> json --> node(特殊)
            - 引入核心模块时
                - 直接写核心模块的名字即可

            - 默认情况下，Node.js会将以下内容视为CommonJS模块：
                1. 使用.cjs为扩展名的文件
                2. 当前的package.json的type属性为commonjs时，扩展名为.js的文件
                3. 当前的package.json不包含type属性时，扩展名为.js的文件
                4. 文件的扩展名是mjs、cjs、json、node、js以外的值时（type不是module时）
                5. require()是同步加载模块的方法，所以无法用来加载ES6的模块。当我们需要在CommonJS中加载ES模块时，需要通过import()方法来加载。         
            - 文件作为模块
                当我们加载一个自定义的文件模块时，模块的路径必须以/、./或../开头。如果不以这些开头，node会认为你要加载的是核心模块或node_modules中的模块。

                当我们要加载的模块是一个文件模块时，CommonJS规范会先去寻找该文件，比如：require("./m1")时，会首先寻找名为m1的文件。如果这个文件没有找到，它会自动为文件添加扩展名然后再查询。扩展名的顺序为：js、json和node。还是上边的例子，如果没有找到m1，则会按照顺序搜索m1.js、m1.json、m1.node哪个先找到则返回哪个，如果都没有找到则报错。

            - 文件夹作为模块
                当我们使用一个文件夹作为模块时，文件夹中必须有一个模块的主文件。如果文件夹中含有package.json文件且文件中设置main属性，则main属性指定的文件会成为主文件，导入模块时就是导入该文件。如果没有package.json，则node会按照index.js、index.node的顺序寻找主文件。 

*/
const m1 = require("./1_2m1.js")
console.log(m1)
// m1.c()
const path = require("path")
const path = require("node:path")

/* 
    模块的包装
        每一个CommonJS模块在执行时，外层都会被套上一个函数：
            (function(exports, require, module, __filename, __dirname) {
            // 模块代码会被放到这里
            });
        所以我们之所以能在CommonJS模块中使用exports、require并不是因为它们是全局变量。它们实际上以参数的形式传递进模块的。

            exports，用来设置模块向外部暴露的内容

            require，用来引入模块的方法

            module，当前模块的引用

            __filename，模块的路径

            __dirname，模块所在目录的路径
*/

