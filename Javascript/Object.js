const JsUser = {
    name : "Sandip",
    "fullName":"Bagdasandip",
    age : 19,
    email :"sbagda051gmail.com",
    location:"Rajkot",
    isloggedin:false,
    LastLoggedIn:["Monday","Wednesday","Friday"]
}
//When you access the property of the objects with[] then you need to define the properties or keys.
console.log(JsUser["name"]);
console.log(JsUser.fullName);
console.log(JsUser.age);
console.log(JsUser.location);
console.log(JsUser.LastLoggedIn);
console.log(JsUser.email);
//to freeze the Object value so we can not access it again
JsUser.location="Junagadh"
Object.freeze(JsUser);
