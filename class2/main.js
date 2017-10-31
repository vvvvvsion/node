var count1 = require('./build/dev_server');
var count2 = require('./build/dev_server');

console.log(count1.count());
console.log(count2.count());
console.log(count1.count());



// 虽然一般我们使用JS编写模块，但NodeJS也支持使用C/C++编写二进制模块。