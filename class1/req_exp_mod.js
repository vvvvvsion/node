// 模块
//
// 编写稍大一点的程序时一般都会将代码模块化。在NodeJS中，一般将代码合理拆分到不同的JS文件中，每一个文件就是一个模块，而文件路径就是模块名。
//
// 在编写每个模块时，都有require、exports、module三个预先定义好的变量可供使用。
//注意，这一块是可以省略.js的，我只告诉你可以省略js,没告诉你可以省略其他的，比如.json

// 在require操作时，即使你不抛出这个函数对象，它依旧可以执行。（跟顺序有关）

// require
//
// require函数用于在当前模块中加载和使用别的模块，传入一个模块名，返回一个模块导出对象。
// 模块名可使用相对路径（以./开头），或者是绝对路径（以/或C:之类的盘符开头）。另外，模块名中的.js扩展名可以省略。
//
// 另外，可以使用以下方式加载和使用一个JSON文件。
//
// var data = require('./data.json');

//引入hello.js
// var foo = require('./hello');
// var foo1 = require('./hello/hello1.js');
//
// // //引入server.js
// // var foo2 = require('/server/server')
// var foo3 = require('./server/server1.js')
// // module.exports = foo3;




// exports
//
// exports对象是当前模块的导出对象，用于导出模块公有方法和属性。别的模块通过require函数使用当前模块时得到的就是当前模块的exports对象。以下例子中导出了一个公有方法。
//
// exports.hello = function () {
//     console.log('Hello World!');
// };
// 注意：引入的时候要让函数自执行。两种方式引入
// //引入hello.js
// var foo1 = require('./hello/hello1');
// foo1.hello()
// // //引入server.js
// var foo3 = require('./server/server1')
// // foo3.hello()


// module
//
// 通过module对象可以访问到当前模块的一些相关信息，但最多的用途是替换当前模块的导出对象。例如模块导出对象默认是一个普通对象，如果想改成一个函数的话，可以使用以下方式。

// module.exports = function () {
//     console.log('Hello World!');
// };
// 以上代码中，模块默认导出对象被替换为一个函数。

var foo = require('./hello/hello2');