/* 
    node文档：https://nodejs.dev/en/   可用edge翻译中文

    通过async可以快速的创建异步函数

*/
// function fn(){
//     return Promise.resolve(10)
// }

// fn().then(r => {
//     console.log(r)
// })

/* 
    通过async可以创建一个异步函数
        异步函数的返回值会自动封装到一个Promise中返回
    
    在async声明的异步函数中，我们可以使用await关键字来调用异步函数
 */

// async function fn2(){
//     return 10
// }

// let result = fn2()

// console.log(result)

// fn2().then(r =>{
//     console.log(r)
// })

function sum(a, b){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

/* 
    Promise解决了异步调用中回调函数的问题
        虽然通过链式调用解决了回调地狱，但是链式调用太多以后还是不好看
*/
async function fn3(){
//     sum(123, 456).then(r => {
//         console.log(r)
// })
// }
    // sum(123, 456)
    // .then(r => sum(r,7))
    // .then(r => sum(r, 8))
    // .then(r => console.log(r))

    // 当我们通过await去调用异步函数时，它会暂停代码的运行
    // 直到异步代码执行有结果时，才会将结果返回
    // 注意：await只能用于async声明的异步函数中，或者es模块的顶级作用域中
    // await阻塞的只是异步函数内部的代码，不会影响外部代码
    // let result = sum(123, 456)
    let result = await sum(123, 456)
    result = await sum(result, 7)
    result = await sum(result, 8)
    console.log(result)
}

fn3()
console.log("全局中的输出~")

async function fn4(){
    console.log(1)
    console.log(2)
    console.log(3)
}
fn4()

console.log(4)

// 输出顺序 1 2 3 4
// 因为async声明的函数中没有await，那么他里边的代码就会依次执行，不涉及异步

/* 
    当我们使用await调用函数后，当前函数后边的所有代码
        会在当前函数执行完毕后，被放入到微任务队列中
*/
// async function fn5(){
//     console.log(6)
//     await console.log(7)
//     //  await 后边的所有代码，都会放入到微任务队列中执行
//     console.log(8)
// }
// fn5()

// console.log(9)
// 输出结果 6 7 9 8


// 等价于上面的fn6函数
function fn6(){
    return new Promise(resolve => {
        console.log(6)
        console.log(7)
        resolve()
    }).then(r => {
        console.log(8)
    })
}
fn6()

console.log(9)