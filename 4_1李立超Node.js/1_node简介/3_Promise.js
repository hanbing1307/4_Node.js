// 异步的关键就是回调函数
// function sum(a, b){
//     return a + b
// }
// const result = sum(123, 456)
// console.log(result)

function sum(a, b, cb){
    cb(a + b)
}
sum(123, 456, function(result){
    console.log(result)
})

/* 
    异步调用必须要通过回调函数来返回数据
        当我们进行一些复杂的调用时，会出现“回调地狱”

    问题：
        异步必须通过回调函数来返回结果，回调函数一多就容易出现问题
    
    Promise
        - Promise可以帮助解决异步中的回调函数的问题
        - Promise就是一个存储数据的容器
            它拥有一套特殊的存取数据的方式
            这个方式使得它可以存储异步调用的结果，所以可以代替回调函数
*/

// 创建Promise
// 创建Promise时，构造函数中需要 一个函数 作为参数
// Promise构造函数的回调函数，它会在创建Promise时调用，调用时会有两个参数传递进去
const promise = new Promise((resolve, reject)=> {
    // resolve 和 reject 是两个函数，通过这两个函数可以向promise中存储数据
    // resolve在执行正常时存储数据，reject在执行错误时存储数据
    resolve("哈哈")
    // reject("哈哈")
    // 通过函数来向promise中添加数据，好处就是可以用来添加异步调用的数据
    // setTimeout(() => {
    //     resolve("哈哈")
    // }, 2000)
    // throw new Error("哈哈，出错了")
    // resolve("resolve返回的数据")
    // reject("reject返回的数据")
}) 
setTimeout(() =>{
    console.log(promise)
}, 3000)
console.log(promise)

/* 
    从Promise中读取数据
        - 可以通过Promise的实例方法then来读取Promise中存储的数据
        - then需要两个回调函数作为参数，回调函数用来获取Promise的数据
            通过resolve存储的数据，会调用第一个函数返回，可以从第一个函数中编写处理数据的代码
            通过reject存储的数据或者出现异常时，会调用第二个函数返回，可以在第二个函数中编写处理异常的代码
*/
promise.then((result) => {
    console.log("promise中的数据 1", result)
}, (reason) => {
    console.log("数据 2", reason)
})

/* 
    Promise中维护了两个隐藏属性：
        PromiseResult：
            - 用来存储数据
            
        PromiseState
            - 记录Promise的状态（三种状态）
                pending (数据存储正在进行中)
                fulfilled（完成） 通过resolve存储数据时
                rejected（拒绝，出错了） 通过reject存储数据时或者出错了
            - state只能修改一次，修改以后永远不会再用

        流程：
            当Promise创建时，PromiseState初始值为pending，
            当通过resolve存储数据时，PromiseState变为fulfilled（完成）
                PromiseResult变为存储的数据
            当通过reject存储数据或者出错时，PromiseState 变为rejected（拒绝，出错了）
                PromiseResult 变为存储的数据 或 异常对象
        
        当我们通过then读取数据时，相当于为Promise设置了两个回调函数
            如果PromiseState变为fulfilled,则调用then的第一个回调函数来返回数据
            如果PromiseState变为rejected，则调用then的第二个回调函数来返回数据
        
*/
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("2")
        // reject("3")
    })
    // resolve("4")
})
console.log(promise2)
promise2.then(result => {
    console.log(result)
}, reason => {
    console.log("出错了")
})

// console.log(promise2)

/* 
    catch()用法和then类似，但是只需要一个回调函数作为参数
        catch()中的回调函数只会在promise被拒绝时才调用
        catch()相当于 then(null, reason => {})
    finally()
        - 无论是 正常存储数据还是出现异常，都会执行
        - 但是finally的回调函数中不会接收到数据
        - finally()通常用来编写一些无论成功与否都要执行的数据
*/

// promise2.catch(reason => {
//     console.log(222)
// })

promise2.finally(() => {
    console.log('没有什么能够阻止我执行')
})