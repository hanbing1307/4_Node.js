//导入http模块
const http = require('http')

// 2.创建web服务器实例
// 调用http.createServer()方法，即可快速创建一个web服务器
const server = http.createServer()
// 3.为服务器实例绑定request事件
// 为服务器实例绑定request事件，即可监听客户端发送过来的网络请求
// 使用服务器实例的 .on()方法，为服务器绑定一个request事件
server.on('request', (req) =>{
    // req是请求对象，它包含了与客户端相关的数据和属性，例如：
    // req.url是客户端请求的URP地址
    const url = req.url
    // req.method是客户端的method请求类型
    const method = req.method
    const str = `Your request url is ${url}, and request method is ${method}`
    console.log(str)
})
// 4.启动服务器
// 调用服务器实例的.listen()方法，即可启动当前的web服务器实例：
// 调用server.listen(端口号, cb回调)方法，即可启动web服务器
server.listen(80, () =>{
    console.log('http server running at http://127.0.0.1')
})