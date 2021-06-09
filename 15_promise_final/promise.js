let p = new Promise((resolve,reject)=>{

    let a=12;

    if(a==2){
        resolve('Success')
    } else{
        reject('Failed')
    }
})

p.then((message)=>{
console.log('This is for then', message)
}).catch((message)=>{
    console.log('This is for catch', message)
})