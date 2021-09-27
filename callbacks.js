console.log('start');

function loginUser(email,password, callback){
    setTimeout(() => {
        callback({useremail: email});
    },3000);
}

function getUserVideos(email, callback){
    setTimeout(() =>{
        callback(['video1', 'video2', 'video3']);
    }, 2000);
}

function videoDetails(video, callback){
    setTimeout(() =>{
        callback('title of the video');
    }, 2000);
}

const user = loginUser('devedf@goomail.com', 123456, user =>{
    console.log(user);
    getUserVideos(user.userEmail, (videos) =>{
        console.log(videos);
        videoDetails(videos[0], title => {
            console.log(title) //callback hell is when we keep stacking we fix this using promises
        })
    })
});
// console.log(user);//user will give us endefined bc user wont come back in time
//to get around this we can pass in a callback

//we will get users then videos correctly since we are using callback with the timeout
console.log("finish");