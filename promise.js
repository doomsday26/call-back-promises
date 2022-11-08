const posts=[
    {title:'post one',body:'this is post one',createdAt:`${Date.now()}`},
    {title:'post two',body:'this is post two', createdAt:`${Date.now()}`}

]


function getPost(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{output+= `<li>${index+1}: ${post.title} </li>`})
        document.body.innerHTML=output;
    },1000 )
}

getPost();

function createPost(post){
 return new Promise((resolve,reject)=>{
    setTimeout( ()=>{posts.push(post)
    const error=false;
    if(!error){
        resolve();}else {reject('error something went wrong')
    }
    },1000)
 } );

}

function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{ 
            const error= (posts.length==0);
           
            if(!error){
                posts.pop();
                resolve();
            }else{reject('array is empty')}
        },1000);
        
    })
}

createPost({title:"post three",body:"this si post three"}).then(getPost).catch(err=>console.log(err))

deletePost().then(getPost).then(deletePost).then(getPost).then(deletePost).then(getPost).then(deletePost).catch(err=>{console.log(err);})


let promise1= Promise.resolve('hello world');
let promise2= 10;
let prommise3=new Promise((resolve,reject)=>{
    setTimeout(resolve(),2000,'goodbye')
})
Promise.all([promise1,promise2,prommise3]).then(values=>console.log(values))