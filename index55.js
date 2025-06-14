// 55 - JavaScript Variables, Data Types & Objects 
// Variables is container that stores data of any kind 


console.log("Hey this is tutorial 55");

//var is globally scoped whereas let and const are block scoped 
let a = 5;
// a = a + 1
let b = 6;
let c = "Vishal";
let _a = "Shubham"; //Allowed
let $a = "Gagan"; //Allowed
// var 55a = "Rohan"; // Not Allowed

// console.log(a +  b + 8); 20
// console.log(typeof a, typeof b, typeof c); for datatype

{
    let a = 66;
    console.log(a) // 66 because let is block scoped
}

console.log(a) // 5 because let is block scoped

// const a1 = 6; 
// a1 = a1 + 1; // Not Allowed because a1 is constant
// console.log(a1)

//Datatype Primitative and Object
let x = "Vishal";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r) // null datatype is object

//Object,Many items at once
let o = {
    "name": "Vishal",
    "job code": 5600,
    "is_handsome": true
}

console.log(o);
o.salary = "100crores";
console.log(o);
o.salary = "500crores";
console.log(o);
