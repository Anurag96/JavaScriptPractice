let a=2;

function addProblem(){
    return new Promise((resolve,reject)=>{
        if(a==2){
            resolve('Result Matched')
        }else{
            reject('Result dint Matched')
        }
    })
}

//Promise,then,catch
// addProblem().then((message)=>{
// console.log(message)
// }).catch((err)=>{
// console.log(err)
// })

//Promises,Async,await
 async function ResultAsync(){
  try{                                          // entire process goes inside try-catch block
      const resultFinal = await addProblem();  // 'async' is always followed by await calling function
      console.log(resultFinal)
  }catch(err){
      console.log(err)
  }
}
ResultAsync()  // don't forget to call 