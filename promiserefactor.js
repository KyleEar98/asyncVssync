console.log('start');

function loginUser(email,password){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve({useremail: email});
        },3000);
    })
}

function getUserVideos(email){
    return new Promise ((resolve, reject ) =>{
        setTimeout(() =>{
            resolve(['video1', 'video2', 'video3']);
        }, 2000);
    })
}

function videoDetails(video){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve('title of the video');
        }, 2000);
    })
}

// const user = loginUser('devedf@goomail.com', 123456, user =>{
//     console.log(user);
//     getUserVideos(user.userEmail, (videos) =>{
//         console.log(videos);
//         videoDetails(videos[0], title => {
//             console.log(title) //callback hell is when we keep stacking we fix this using promises
//         })
//     })
// });


//below is the same as the commented code above
loginUser('ed', 'bummba')
.then(user => getUserVideos(user.email))
.then(videos => videoDetails(videos[0]))
.then(detail => console.log(detail));

//sync
async function displayUser(){
    try{
        const loggedUser = await loginUser('ed', 13485);
        const videos = await getUserVideos(loggedUser.userEmail);
        const detail = await videoDetails(videos[0]);
        console.log(detail);
    }
    catch (err){
        console.log("we couldnt ge the video");
    }
}

displayUser();


////////////////////////////////////////////////////////////////////////
// const user = loginUser('ed', 'sdf'); 
// const yt = new Promise(resolve =>{
//     setTimeout(() => {
//         console.log("getting stuff from youtube");
//         resolve({videos: [1,2,3,4,5]});
//     }, 2000);
// });

// const fb = new Promise(resolve =>{
//     setTimeout(() => {
//         console.log("getting stuff from fb");
//         resolve({user: "Name"});
//     }, 2000);
// });

// Promise.all([yt,fb])
// .then(result => console.log(result));

//both yt and fb start getting data at the same time which well get both resolves as fast as possible