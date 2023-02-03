// 引入fs模块
const fs = require('fs')

// 2. 使用fs.writeFile()方法读取文件
fs.writeFile('./4_4fs.writefile.txt', 'Hello, 文件写入内容测试', 'utf-8', function(err){
    // 2.1 如果文件写入成功，则err等于null
    // 2.2 如果文件写入失败，则err的值等于一个错误对象
    if(err){
        return console.log('文件写入失败' + err.message)
    }
    // 2.2 打印成功的结果
    console.log('文件写入成功')
})