let recordVideoOne= new Promise ((resolve,reject)=>{
    setTimeout(()=>{
       console.log('video 1 is recorded')
    },1000)
})

let recordVideoTwo= new Promise ((resolve,reject)=>{

    setTimeout(()=>{
        console.log('video 2 is recorded')
})
    },2000)
   

let recordVideoThree= new Promise ((resolve,reject)=>{

    setTimeout(()=>{
        console.log('video 3 is recorded')
    },2000)
    
})



let a = Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree  
])

a.then((message)=>{

    console.log(message)
}).catch((message)=>{

    console.log(message)
})

