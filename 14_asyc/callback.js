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

function createPost(post,callback){
  setTimeout(()=>{
      posts.push(post)
      callback();
  },2000);  
}


createPost({title:'POST THREE',body:'This is post three'},getPosts);