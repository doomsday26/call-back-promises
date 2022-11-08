const posts=[
    {title:'post one',body:'this is post one',createdAt:`${Date.now()}`},
    {title:'post two',body:'this is post two', createdAt:`${Date.now()}`}]


    function getPost(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{output+= `<li>${index+1}: ${post.title} </li>`})
        document.body.innerHTML=output;
    },1000 )
}
getPost();

// function createPost(post){

//  return new Promise((resolve,reject)=>{
//     setTimeout( ()=>{posts.push(post)
//     const error=false;
//     if(!error){
//         resolve();}else {reject('error something went wrong')
//     }
//     },1000)
//  } );

// }

// function updateLastUserActivityTime(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{console.log( JSON.stringify(posts) + "updated on" + Date.now());resolve()},1000)
//     }) 
// }


async function  createPost(post){

    const create= new Promise((resolve, reject) => {
        setTimeout(() => { posts.push(post);const error=false;
                if(!error){
                    resolve();}else {reject('error something went wrong')
                }
        }, 3000);
    })
    const updateLastUserActivityTime= new Promise((resolve, reject) => {
        setTimeout(()=>{console.log( JSON.stringify(posts) + "updated on" + Date.now());resolve()},1000)
    })
    await Promise.all([create,updateLastUserActivityTime]); 
}



createPost({title:"post three",body:"this si post three"}).then(getPost).catch(err=>console.log(err))
createPost({title:"post four",body:"this si post four"}).then(getPost).catch(err=>console.log(err))









const postdeleted= async()=>{

let deletePost= new Promise((resolve,reject)=>{
    setTimeout(()=>{ 
        const error= (posts.length==0);
       
        if(!error){
            posts.pop();
            resolve();
        }else{reject('array is empty')}
    },4000);
    
})


    await deletePost;
    getPost();
    await deletePost;
    getPost();
    await deletePost;
    getPost();
   let k; 
     try {
       k= await deletePost;
     } catch (err) {
        k=err;
        console.log(k);
     }
     return k;
}
//postdeleted().then(m=>{console.log(m);})


