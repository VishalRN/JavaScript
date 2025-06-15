// 76 - Async/Await & Fetch API in JavaScript with Examples

// async function getData() {
//     // Simulate getting data from a server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }

// settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully

async function getData() {
    // Simulate getting data from a server
    // In fetch api await function needs to be used two times to pass the data and total 2 promise,one for get the data and the other for passing the data
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // let data = await x.json()
    // console.log(data)

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({ 
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
    let data = await x.json() 
    return data
}

async function main(){
    console.log("Loading modules")

    console.log("Do something else")

    console.log("Load data")

    let data = await getData()

    console.log(data)

    console.log("process data")

    console.log("task 2")

}

main()

 

// data.then((v) => { 
//     console.log(data)

//     console.log("process data")

//     console.log("task 2")
 
// })