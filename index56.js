// 56 - JavaScript Conditionals: if, else if, else ladder

console.log("Hello I am conditional tutorial")

let age = 1;
// let grace = 2;

//Asignment Operators
// age += grace
// console.log(age) 3

//Arithmetic operators
// console.log(age + grace)
// console.log(age - grace)
// console.log(age * grace)
// console.log(age / grace)
// console.log(age ** grace)  power operator 9
// console.log(age % grace) reminder

/*
I am a 
multiline 
comment
*/

if (age == 18) {
    console.log("You can drive");
}

else if (age == 0) {
    console.log("Are you kidding?")
}

else if (age == 1) {
    console.log("Are you again kidding?")
}

else {
    console.log("You cannot drive");
}


a = 6; 
b = 8;
let c = a > b ? (a - b) : (b - a);

/*
translation of the above:
if(a>b){
    let c = a - b;
}
else {
    let c = a - b;
}

*/