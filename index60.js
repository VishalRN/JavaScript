// 60 - JavaScript Strings 
// Strings - Collection of Characeters 
// Strings are immutable 

console.log("This is strings tutorial")
let a = "Vishal";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]); undefined

console.log(a.length)

let real_name = "Vishal"
let friend = "Rohan"
console.log("His name is " + real_name + " and his friends name is " + friend)

//Templete Literals (It helps us to use both single and double quotes inside a string)
console.log(`His name is ${real_name} and his friends name is ${friend}`)

let b = "ShivamSh"
console.log(b.toUpperCase())
console.log(b.toLowerCase()) 
console.log(b.length)  
console.log(b.slice(1, 5)) //hiva
console.log(b.slice(1)) //hivamSh

console.log(b.replace("Sh", "77")) //first  occurrence
console.log(b.concat(a, " Aishwariya", " Rahul", " Priya"))

console.log(b)