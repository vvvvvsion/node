var http = require('http');
http.createServer(function(req,res){
    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    res.writeHead(200,{'content-Type':'text/plain'})
    // 发送响应数据 "Hello World"
    res.end('hello web705')
}).listen(2222);
console.log('Server is busy ...');