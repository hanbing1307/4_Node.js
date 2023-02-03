// 导入path模块
const path = require('path')

// 定义文件的存放路径
const fpath = '/a/b/c/index.html'

// const fullName = path.basename(fpath)
// console.log(fullName)

const nameWithoutEt = path.basename(fpath, '.html')
console.log(nameWithoutEt)