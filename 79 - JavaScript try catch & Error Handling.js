// 79 - JavaScript try catch & Error Handling

let a = prompt("Enter first number")

let b = prompt("Enter second number")
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed")
}

let sum = parseInt(a) + parseInt(b) //parseInt helps in a string into an integer 

function main(){ 
    let x = 1;
    try {
        console.log("The sum is ", sum * x)
        return true
        
    } catch (error) {
        console.log("Error aa gaya bhai")
        return false
    } 
    finally{ // finally helps in running the below code even after the return function
        console.log("files are being closed and db connection is being closed")
    }
  
}

let c = main()
