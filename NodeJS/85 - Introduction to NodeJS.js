// 85 - Introduction to NodeJS
console.log("Hello World")
// Nodejs is javascipt v8 engine that allows developers to run JavaScript on the server side.
// NPM is a toolthat is used to install, update, and manage JavaScript packages
// The npm init command is used to initialize a new Node.js project by creating a package.json
// 2 ways to create modules in Node.js: ESM (ECMAScript Modules) and CommonJS.
// Node modules are reusable pieces of code that allow developers to break down large applications into smaller, manageable parts, enhancing code organization, reusability, and maintainability. 

var slugify = require('slugify')

let a = slugify('some string') // some-string
console.log(a)

// if you prefer something other than '-' as separator
const b = slugify('some st&&*(^%$$^^&ring', '_')  // some_string
console.log(b)

// Further Reading: https://nodejs.org/en/learn/getting-started/introduction-to-nodejs
// require is used to import any module 
// const http = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });