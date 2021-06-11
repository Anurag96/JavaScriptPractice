let recordVideoOne= new Promise ((resolve,reject)=>{
    console.log('video 1 is recorded')
})

let recordVideoTwo= new Promise ((resolve,reject)=>{
    console.log('video 2 is recorded')
})

let recordVideoThree= new Promise ((resolve,reject)=>{
    console.log('video 3 is recorded')
})

//Example for Promise.all() to run all the promises together, Also .all() run everthing in parallel

let a = Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree  
])

a.then((messages)=>{

    console.log(messages)
}).catch((messages)=>{

    console.log(messages)
})

