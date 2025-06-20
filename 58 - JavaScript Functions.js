// 58 - JavaScript Functions

function nice(name) {
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " your tshirt is nice!")
    console.log("Hey " + name + " your course is good too!")
}

nice("Rohan")
nice("Vishal")

function sum(a, b, c = 3) {
    console.log(a, b, c)
    return a + b + c
}

result1 = sum(3, 2)
result2 = sum(7, 5)
result3 = sum(3, 13, 1) // c =1

console.log("The sum of these numbers is: ", result1)
console.log("The sum of these numbers is: ", result2)
console.log("The sum of these numbers is: ", result3)

// Arrow Function (it can be used again and again)
const func1 = (x) => {
    console.log("I am an arrow function", x) //it can be reused
}

func1(34);
func1(66);
func1(84);

