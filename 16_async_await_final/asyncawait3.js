const userLeft = false;
const userEating = false;

function resultPlan()
{return new Promise((resolve,reject)=>{

    if(userLeft){
        reject ({
            userStatus: 'Customer din\'t wait',
            message: 'Customer left :('
        })
    }else if(userEating){
        resolve({
            userStatus: 'Customer is Eating',
            message: 'Customer was satisfied'
        })
    }else{
        reject ({
            userStatus: 'Customer is waiting',
            message: 'Customer is mad'
        }) 
    }
})
}

// Promise , then(),catch()
/*
a.then((result)=>{
console.log(`${result.userStatus} & ${result.message}`)
}).catch((err)=>{
console.log(`${err.userStatus} & ${err.message}`)
})
*/

//Async & Await
async function customerResult(){
  try {
    const result = await resultPlan();
    console.log(`${result.userStatus} & ${result.message}`)
  } catch (err) {
    console.log(`${err.userStatus} & ${err.message}`)
  }  
}
customerResult()
