const posts =[
    {title:'POST ONE',body:'This is post one'},
    {title:'POST TWO',body:'This is post two'}
    ];
    
    function getPosts(){
        setTimeout(()=>{
            let output='';
            posts.forEach((post,index)=>{
                output+=`<li>${post.title}  </li>`;
            })
            document.body.innerHTML = output;
        },1000)
    }
    
    function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error=false;
            if(!error){
                resolve();
            }else{
                reject('Error : Something went wrong')
            }
          },2000);
    });     
}


//promise.all
const promise1 = Promise.resolve('Hello World')
const promise2 =10;
const promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"Goodbye")
})
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json())


Promise.all([promise1,promise2,promise3,promise4]).then(values=>console.log(values));