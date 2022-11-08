
const date = new Date();
const posts=[
    {title:'post one',body:'this is post one',createdAt:`${Date.now()}`},
    {title:'post two',body:'this is post two', createdAt:`${Date.now()}`}

]
console.log(posts);
let count=1;
function getPost(){
    setTimeout(()=>{
        let output='';
        let date2 = new Date();
        posts.forEach((post,index)=>{output+= `<li>${index+1}: ${post.title} created at :${(date2.getTime()-post.createdAt)%1000} seconds ago </li>`})
        console.log(output+''+ count++ );
        document.body.innerHTML=output;
    },1000 )
}

getPost();

function createPost(post, callback){
 
   post={...post,createdAt:`${Date.now()}`}
setTimeout( ()=>{posts.push(post);callback()},2000)
}

 createPost({title:"post three",body:"this is post 3"},getPost)

 function create4thPost(post ,callback){
    callback(post,getPost);
 }

 create4thPost({title:'post four',body:'this is post 4'},createPost)




setInterval(() => {
    getPost()
}, 1000);