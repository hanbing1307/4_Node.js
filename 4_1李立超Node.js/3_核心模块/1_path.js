/* 
    path模块
        - 表示路径
        - 通过path可以用来获取各种路径
        - 要使用path，需要先对其进行引入
        - 方法：
            path.resolve([...paths])
                - 用来生成一个绝对路径
                    相对路径：./xxx ../xxx xxx
                    绝对路径：
                        - 在计算机本地
                            c:\xxx
                              /User/xxxx
                        - 在网络中
                            http://www.xxxx/...
                            https://www.xxx/....
                    - 如果直接调用resolve，则返回当前的工作目录
                        注意：我们通过不同的方式执行代码时，它的工作目录是有可能不同的

                    - 如果将一个相对路径作为参数，
                        则resolve会自动将其转换为绝对路径

                    - 一般会将一个绝对路径作为第一个参数
                        一个相对路径作为第二个参数
                        这样它会自动计算出最终路径
*/
const path = require('node:path')
// const path = require('path')

// console.log(path)

// const result = path.resolve()
// const result = path.resolve("E:\\all_code\\htmlcode\\4_1李立超Node.js\\3_包管理器","hello.js")

// 最终形态
// 以后再使用路径时，尽量通过path.resolve()来生成路径
const result = path.resolve(__dirname, "./hello.js")
console.log(result);