function makeRequest (website){
    return new Promise((resolve,reject)=>{
        console.log(`Making request to ${website}`)
        if(website=='Google'){
            resolve('Come let\'s talk to each other')
        }else{
            reject('Sorry can\'t talk')
        }
    })
}

function processRequest(value){
    return new Promise((resolve,reject)=>{
        console.log('Proceesing additional request')
        resolve(`the additional value  + ${value}`)
    })
}

// let a = makeRequest('oogle').then((message)=>{
//     console.log('Response recevied =>'+message)
//     return processRequest(message)
// })

// a
// .then((messsage)=>{
// console.log(messsage)
// })
// .catch((message)=>{
// console.log(message)
// })

async function returnValue(){
    try {const message = await makeRequest('oogle')
    console.log('Response recevied =>'+message)
     const result = await processRequest(message)
     console.log(result)
    } catch (error) {
        console.log(error)
    }
}
returnValue()
