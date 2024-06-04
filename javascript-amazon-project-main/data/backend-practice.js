//LSPPDay4 Intro to backend

//creates a new http message(request) to send to the backend
const xhr = new XMLHttpRequest();


//using the get request is same as using the browser itself
xhr.addEventListener('load', ()=>{
console.log(xhr.response);
});
xhr.open("GET", "https://supersimplebackend.dev"); //setting up request //GET means get some data from the backend, and second parameter is the location from where to get the data
xhr.send(); //asychronus code, //sends this message across the internet to the url.




