// 1. 导入fs文件系统模块
const fs = require('fs')

// 2.调用fs.readFile()方法读取文件
fs.readFile('./成绩.txt', 'utf-8', function(err, dataStr){
    //2.1 判断是否读取成功
    if(err){
        console.log('文件读取失败' + err.message)
    }
    // console.log('文件读取成功! ' + dataStr)

    //3.1 先把成绩的数据，按照空格进行分割
    const arrOld = dataStr.split(' ')
    //3.2 循环分割后的数组，对每一项数据进行字符串的替换操作
    const arrNew = []
    arrOld.forEach(item => {
        arrNew.push(item.replace('=', ': '))
    })
    // console.log(arrNew)
    //3.3 把新数组的每一项，进行合并，得到一个新的字符串
    const newStr = arrNew.join('\r\n')
    console.log(newStr)

    //4 调用fs.writeFile()方法，把整理完成的成绩，写入到新文件夹中
    fs.writeFile('./成绩-ok.txt', newStr, 'utf-8', function(err){
        if(err){
            return console.log('成绩写入文件失败！' + err.message)
        }
        console.log('成绩写入成功')
    })
})