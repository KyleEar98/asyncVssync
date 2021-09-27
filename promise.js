//promise gives us back a result of an async operation or failure of one

//creation of a promise
//later below we need to consume it
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('User not logged in'))
        //resolve({user: "ed"});
    },2000);
});


promise.then(user =>{
    //console.log(user); 
    //print user: ed
}).catch(err => console.log(err));