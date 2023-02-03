/* 同步和异步*/ 

/* 
    进程和线程
        - 进程 
            - 程序运行的环境 （例如工厂的厂房，提供工作的环境）
        - 线程
            - 线程是实际进行运算的东西（例如工厂的工人）
    
    同步
        - 通常程序代码都是自上向下一行一行执行的
        - 前边的代码不执行，后边的代码也不会执行
        - 同步的代码会出现阻塞的情况（中间有代码执行慢，会阻碍后面的代码执行） 
            例如：
                1、餐厅点菜
                2、厨师炒菜
                3、上菜吃饭

        解决同步阻塞问题：
            - Java、python
                通过多线程解决。对计算机性能要求高，对代码要求高
            - node.js：
                通过异步方式
        
        异步：
            - 一段代码慢不会影响其他代码的运行
            - 异步的问题：
                - 异步的代码无法通过return来设置返回值
            - 特点：
                1、不会阻塞其他代码的执行
                2、需要通过回调函数来返回结果

            - 基于回调函数的异步带来的问题
                1、代码的可读性差
                2、可调试性差
            - 解决问题:
                - 需要一个东西，可以代替回调函数给我们返回结果
                - Promise 横空出世
                    - Promise 是一个可以用来存储数据的对象
                        Promise存储数据的方式比较特殊，这种特殊方式使得Promise可以用来存储异步调用的数据

*/

// console.log("哈哈")
// console.log("嘻嘻")
// console.log("嘿嘿")


/* 
function sum(a, b){
    //添加一个计时器
    const begin = Date.now()

    while(Date.now() - begin < 10000){
    }
    return a + b
}
console.log("11111")
// 添加一个计时器循环10s之后，sum函数就变慢了，且阻碍了后面代码的执行
const result = sum(123, 456)
console.log(result)
console.log("22222")
 */

/* 
function sum(a, b){
    //添加一个计时器
    const begin = Date.now()

    setTimeout(() => {
        return a + b
        
    }, 10000);
}
console.log("11111")
// 添加一个计时器循环10s之后，不会影响后面代码的执行
const result = sum(123, 456)
// 这里result结果是undefined，因为异步的代码无法通过return来设置返回值，需要回调函数
console.log(result)
console.log("22222") 
*/

/* function sum(a, b,cb){
    //添加一个计时器
    const begin = Date.now()

    setTimeout(() => {
        cb(a + b)  
    }, 10000)
}
console.log("11111")
// 添加一个计时器循环10s之后，不会影响后面代码的执行
sum(123, 456, (result)=>{
    console.log(result)
})
// 这里result结果是undefined，因为异步的代码无法通过return来设置返回值，需要回调函数

console.log("22222") */

function sum(a, b,cb){
    //添加一个计时器
    const begin = Date.now()

    setTimeout(() => {
        cb(a + b)  
    }, 5000)
}
console.log("11111")
// 如果后面又要调用回调函数，就要把新的异步函数写在回调函数里面，多次回调之后，就出现回调地狱（死亡金字塔），且代码可读性差，运行非常慢，不好调试
sum(123, 456, (result)=>{
    sum(result, 7, (result)=>{
        sum(result, 8, (result) =>{
            console.log(result)
        })
    })
})

console.log("22222")


