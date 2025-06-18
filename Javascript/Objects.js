const TinderUser = new Object() //Singletone Objects
const AnotherUser = {} //Non Singletone Objects
TinderUser.id = "abc123"
TinderUser.name = "Steve"
TinderUser.age = 20
TinderUser.isloggedIn = true

console.log(TinderUser);
console.log(AnotherUser);

//Nested Objects
const RegularUser = {
    email : "someone05gmail.com",
    fullname:{
        userfullname:{
            firstname:"Steve",
            lastname:"Haringtone",  
        }
    }

}
console.log(RegularUser.fullname.userfullname);//We can access it with dot property.

//Merge Two objects
const Obj1 ={name:"Eleven",age:19,city:"Hawkings"}
const Obj2 ={name:"Mike",age:20,city:"Hawkings"}
const Obj4 ={name:"Will,age:19",city:"Hawkings"}
const Obj3 ={...Obj1,...Obj2}//if there is same key properties in both of  the objects then only one value will print,but if its not same then use Object.assign
//to print the both value if the key properties is same you can use the spread operator.

//Array Of Objects

const user=[
        {
           id:"sdc123",
            email:"sdc123google.com",
        },
    {
        id2:"adc234",
        email:"adcyahoo.com",
    },
    {
        id3:"dfg456",
        email:"dfg456gmail.com",

    }

    
]
user.forEach(u => {
    console.log(u.id, u.email);
});

console.log(Object.keys(TinderUser));//Define the key properties of the objects.
console.log(Object.values(TinderUser));//Deifne the values of objects.
console.log(Object.entries(TinderUser));//Define the key with valuees of objects.

//if you wants to know that any perticular propertie is available or not if wants to check it there is a method called hasOwnProperties.
console.log(TinderUser.hasOwnProperty("isloggedIn"));//It wll return the value in boolean(true/false).