// Promise就是用来存储数据对象
// 但是由于Promise存取方式特殊，所以可以直接将异步调用的结果存储到Promise中

const promise = new Promise((resolve, reject) => {
    resolve("周一到周五19点，我们不见不散")
    // reject("这是存储数据错误的时候执行")
})

/* 
    promise中的
        then（return new Promise())
        catch
        finally
        - 这三个方法都会返回一个新的Promise
            Promise中会存储回调函数的返回值
        finally
            - finally的返回值，不会存储到新的Promise里
*/
promise
    .then(result => {
        console.log("回调函数", result)
        return "锄禾日当午"
    })
    .then(result => {
        console.log("第二个then", result)
        return"你好node"
    })
    .then(result => {
        console.log("第二个then", result)
    })

// promise.then(result => {
//     console.log(result)
// }, reason => {
//     console.log("出错了", reason)
// })



// const p2 = promise.then(result => {
//     console.log("回调函数", result)
//     return "锄禾日当午"
// }).then()


// setTimeout(() => {
//     console.log(p2)
// }, 1000);
// console.log(p2)

// const p3 = p2.then(result => {
//     console.log(result)
//     return"这是p3的返回值"
// })
// p3.then(result => {
//     console.log(result)
// })


// promise.then(result => {
//     console.log(result)
// }, reason => {
//     console.log("出错了", reason)
// })

// function sum(a, b, cb){
//     setTimeout(() => {
//         cb(a + b)
//     }, 1000);
// }

// sum(123, 456, (result) => {
//     console.log(result)
// })


function sum(a, b){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(a + b)
        }, 1000)
    })
}

// // 错误示例
// sum(123, 456).then(result => {
//     // console.log(result)
//     sum(result, 7).then(result => {
//         sum(result, 8).then(result => {
//             console.log(result)      // 这样还没解决回调地狱问题
//         })
//     })
// })

// console.log(result)3 

sum(123, 456)
    .then(result => result + 7)
    .then(result => result + 8)
    .then(result => console.log(result))


