const posts=[
    {title:'Post One', body:'This is post one'},
    {title:'Post Two', body:'This is post Two'}
];
function getPosts(){
    setTimeout(() => {
        let output='';
        posts.forEach((post , index)=>{
            output+=`<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;
    },1000);
}
function createPost(post,){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            posts.push(post);
            const error=false;
            if(!error){
                resolve ();
            } else{
                reject("Error:Something went wrong")
            }
        },2000);
    })
}
function createPost4(post,){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            posts.push(post);
            const error=false;
            if(!error){
                resolve ();
            } else{
                reject("Error:Something went wrong")
            }
        },2000);
    })
}

function deletePost(post,){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(posts.length>0){
                resolve ( posts.pop());
            } else{
                reject("Array is Empty")
            }
        },2000);
    })
}

createPost4({title:'Post Four', body:'This is post four'},getPosts);
 
 createPost({title:'Post Three', body:'This is post Three'}).then(()=>{
    getPosts()
    deletePost().then((deletedElement)=>{
        console.log(deletedElement)
        getPosts();
        deletePost().then(()=>{
            getPosts();
                deletePost().then(()=>{
                 getPosts();
                   deletePost().then(()=>{
                    getPosts()
                      deletePost().then(()=>{}).catch((err)=>{
                        console.log("inside catch block",err)
                 })
            }).catch((err)=>{})
        }).catch((err)=>{})
    })
})
 }).catch(err=>console.log(err))
 