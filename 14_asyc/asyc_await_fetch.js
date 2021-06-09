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


    //Async/Await/fetch

    async function fetchUser(){
      const res = await fetch('https://jsonplaceholder.typicode.com/users');

      const data = await res.json();
      console.log(data)
    }

    fetchUser();
