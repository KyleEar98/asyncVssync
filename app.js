//sync code example
//sync code is everything weve done so far
//async is live updates like a search bar


function otherFunct(){
    console.log("we are in another funct");
    console.log("do some stuff");
}
//when reading code js puts everything into a callstack
//the callstack will read the start below then get popped off first
//then it will read the function and that will get popped
//and so on for "end"
console.log("start");
otherFunct();
console.log("End");


//async code example

console.log("start");

setTimeout(() => {
    console.log("we are in a timeout");
}, 2000);
//asynchronously runs this code after 2 seconds
//when calling setTimeout it will pass it to a web api and the browswer will keep track of the timer then continue running the code
// wil run start, end then we are in a timeout" 

console.log("End");