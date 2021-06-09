function makeRequest(location){
    return new Promise((resolve,reject)=>{
        console.log(`Making request to ${location}`)
        if(location=='Google'){
            resolve('Say hi to google')
        }else{
            reject('You can\'t talk to google')
        }
    })
}

function processRequest(response){
    return new Promise((resolve,reject)=>{
        console.log('Processing extra request')
        resolve(`Extra information + ${response}`)
    })
}

/*
We just wanna call the makeRequest() function and return the processRequest(response)
*/

let a = makeRequest('Google')
.then((message)=>{
    console.log('Response Received : '+message)
    return processRequest(message)
})

a.then((messages)=>{
    console.log(messages)
}).catch((messages)=>{
    console.log(messages)
})