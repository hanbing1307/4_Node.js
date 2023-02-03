// 引入fs模块
const fs = require('fs')

// 2. 使用fs.writeFile()方法读取文件
fs.writeFile('./4_3fs.writefile.txt', 'Hello, Node.js', 'utf-8', function(err){
    // 2.1 如果文件写入成功，则err等于null
    // 2.2 如果文件写入失败，则err的值等于一个错误对象
    console.log(err)
})