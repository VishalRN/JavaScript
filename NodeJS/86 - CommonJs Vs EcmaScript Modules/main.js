// import {a, b, d} from "./mymodule.js"
// console.log(a, b, d)


// import harry from "./mymodule.js"
// console.log(harry)

// (function(exports, require, module, __filename, __dirname) {

//     // Module code actually lives here only in CommonJS
// THE ABOVE VARIABLES ARE RAPPED AUTOMATICALY IN THE ABOVE FUNCTION BUT ONLY IN COMMON JS 
  
//   });

const a = require("./mymodule2.js")

console.log(a, __dirname, __filename)