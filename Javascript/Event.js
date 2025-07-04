let btn1 = document.querySelector("#btn1");
btn1.onclick  = (e) =>{  //=> used for write function or indicate the function
    console.log(e)  // to know all the properties of the this event

    console.log(e.type) // to know which type of the event you fired

    console.log(e.target) //to know which target(tag) you used here.

     //There are many types of properties to access or know the properties you can use it from console.

};

let div = document.querySelector("#myDiv");
Div.onmouseover = (e) => {
     console.log(e)

    console.log(e.type) 

    console.log(e.target) 
};

let btn2=addEventListener("click",()=>{
    console.log("button was clicked");
})

btn2=addEventListener("click",()=>{
    console.log("button was clicked by handler-2");
})

btn2=addEventListener("click",(e)=>{
    console.log("button was clicked");
    console.log(e.type);
    console.log(e.target);
})



