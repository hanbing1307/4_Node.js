// 1. 导入fs模块
const fs = require('fs')

// 2. 使用fs.readFile()方法读取文件
// 参数1： 必选参数，字符串，表示文件的路径
// 参数2： 可选参数，表示以什么 编码格式来读取文件
// 参数3： 必选参数，文件读取完成后，通过回调函数拿到读取的结果
fs.readFile('./4_1fs.readfile.txt', 'utf-8', function(err, dataStr){
    // 2.1 打印失败的结果
    if(err){
        return console.log('文件读取失败' + err.message)
    }
    // 2.2 打印成功的结果
    console.log('文件读取成功，内容是' + dataStr)
})