const userLeft = false;
const userWatchingCatMeme = false;

function userStatusPromise(){

    return new Promise((resolve,reject)=>{

        if(userLeft){
            reject({
                name:' User left',
                message:' :-('
            })
        }else if(userWatchingCatMeme){
            reject({
                name: 'User is watching cat memes',
                message:'user have no interest in lecture'
            })
        }else{
            resolve('User loves the lecture')
        }
    })

}

userStatusPromise().then((message)=>{
console.log('Success : ', message)
}).catch(messages=>{
console.log(messages.name+' and '+messages.message)
})