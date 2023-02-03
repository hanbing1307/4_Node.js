// // 导入path模块
// const path = require('path')

// // 使用path.join
// const pathStr = path.join('/a', '/b/c', '../', '/d', '/e')   // ../会抵消前面一个路径
// console.log(pathStr)     //  /a/b/d/e

// const pathStr2 = path.join('/a', '/b/c', '../',  '../', '/d', '/e')   // 两个../会抵消前面两个路径
// console.log(pathStr2)     //  /a/d/e


// 导入path和fs模块
const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, './2_1练习.txt'), 'utf-8', function(err, dataStr){
    if(err){
        return console.log(err.message)
    }
    console.log(dataStr)
})