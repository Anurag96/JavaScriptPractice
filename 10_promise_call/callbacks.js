const posts = [
    {title:'POST One',body:'This is post 1'},
    {title:'POST Two',body:'This is post 2'}
]

function getPost(){
setTimeout(()=>{
    let output = '';
    posts.forEach((post,index)=>{
        output +=`<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
    }
,1000);
}

getPosts();  