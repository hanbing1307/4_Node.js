// 开启一个定时器
// 定时器的作用是间隔一段时间后，将函数放入任务队列中
setTimeout(() => {
    console.log(1)
}, 0)
// console.log(2)
// 输出结果 2   1

/* 
    Promise的执行原理：
        - Promise在执行， then就相当于给Promise一个回调函数
            当Promise的状态从 pending 变为 fulfilled时，
                then的回调函数会被放入到任务队列中
*/

queueMicrotask(() => {
    setTimeout(() => {
        console.log(4)
    })
    console.log(3)
})


Promise.resolve(1).then(() =>{
    console.log(2)
})
// console.log(3)

/* 
    JS是单线程的，它的运行是基于事件循环机制（event loop）
        - 调用栈（先进后出，类似子弹弹夹，先进的子弹后面打出）
            - 栈
                栈是一种数据结构，后进先出
            - 调用栈中，放的是要执行的代码
        - 任务队列（先进先出）
            - 队列
                - 队列是一种数据结构，先进先出
            - 任务队列的是将要执行的代码
            - 当调用栈中的代码执行完毕后，队列中的代码才会按照顺序依次进入到栈队列中
            - 在JS中任务队列有两种
                - 宏任务队列（大部分代码都去宏任务队列中排队）
                - 微任务队列（Promise的回调函数（then, catch, finally）
            
                    宏任务: script, setTimeout, setInterval, setImmediate,  I/O, MutationObserve, UI rendering
                    微任务: process.nextTick, promise.then(), object.observe, MutationObserver
                - 
*/