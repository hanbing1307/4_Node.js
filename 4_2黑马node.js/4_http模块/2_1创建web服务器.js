//导入http模块
const http = require('http')

// 2.创建web服务器实例
// 调用http.createServer()方法，即可快速创建一个web服务器
const server = http.createServer()
// 3.为服务器实例绑定request事件
// 为服务器实例绑定request事件，即可监听客户端发送过来的网络请求
// 使用服务器实例的 .on()方法，为服务器绑定一个request事件
server.on('request', (req,res) =>{
    // 只要由客户端请求我们自己的服务器，就会触发request事件，从而调用这个事件处理函数
    console.log('Someone visit our web server.')
})
// 4.启动服务器
// 调用服务器实例的.listen()方法，即可启动当前的web服务器实例：
// 调用server.listen(端口号, cb回调)方法，即可启动web服务器
server.listen(80, () =>{
    console.log('http server running at http://127.0.0.1')
})