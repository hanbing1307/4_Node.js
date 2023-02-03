/* 
    fs模块（File System）
        - fs用来帮助node操作磁盘中的文件
        - 文件操作也就是所谓的I/O操作（input/ output）
        - 使用fs模块，同样需要引入

        fs.readFile() 读取文件
        fs.appendFile() 创建新文件，或将数据添加到已有文件中
        fs.mkdir() 创建目录
        fs.rmdir() 删除目录
        fs.rm() 删除文件
        fs.rename() 重命名
        fs.copyFile() 复制文件
*/

// const fs = require("fs")
const fs = require("node:fs")

// 可参考黑马node.js中的fs内容