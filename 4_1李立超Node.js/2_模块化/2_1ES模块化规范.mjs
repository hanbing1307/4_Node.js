
// const obj = require("./2_3m3") // 取所有的属性
// const obj = require("./2_3m3").name  // 取指定的属性
// console.log(obj)

// const {name} = require("./2_3m3")
// console.log(name)

// const {name, age, gender} = require("./2_3m3")
// console.log(name, age, gender)

/* 
    2015年随着ES6标准的发布，ES的内置模块化系统也应运而生，并且在Node.js中同样也支持ES标准的模块化。说来说去使用模块化无非需要注意两件事导出和引入：
    默认情况下，node的模块化标准时CommonJS
        想要使用ES的模块化，可以采用以下两种方案
            1. 使用mjs作为扩展名
            2. 直接修改package.json将模块化设置为ES模块
                当我们设置“type”："module"，当前目录下所有的js文件都默认为es module
*/

// 导出m4模块, es模块不能省略扩展名(官方标准)
// import "./2_4m4.mjs"

// 导出具体某些数据
// import {a, b, c} from "./2_4m4.mjs"
// console.log(a, b, c);

// 通过as来指定别名
// import{a as hello, b as hi, c} from "./2_4m4.mjs"
// console.log(hello, hi);

//导入所有，不过开发时要尽量避免import * 情况
// import * as m4 from "./2_4m4.mjs";
// console.log(m4);
// console.log(m4.a)
// console.log(m4.b);

// 导入模块的默认导出,名字可以更换, 一个模块中只有一个默认导出
// import sum from "./2_4m4.mjs"
// console.log(sum);
// import hello from "./2_4m4.mjs"
// console.log(hello);


import {a, b, c} from "./2_4m4.mjs"

// 通过es模块化，导入的内容都是常量
// console.log(a);

// a = 20

// 常量并不影响对象的更改
// es模块都是运行在严格模式下的
// es模块化，在浏览器中同样支持，但是通常我们不会直接使用
// 通常都会结合打包工具使用
console.log(c);
c.name = "沙和尚"
console.log(c);