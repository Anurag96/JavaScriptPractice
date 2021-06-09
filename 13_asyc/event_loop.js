const firstMethod = ()=>{
console.log('This is first ',1)
}
const secondMethod = ()=>{
    setTimeout(()=>{
        console.log('This is second ',2)
    },300)
}
const thirdMethod = ()=>{
    console.log('This is third',3)
    
}

firstMethod();
secondMethod();
thirdMethod();