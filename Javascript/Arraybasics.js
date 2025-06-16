const myarr = [22,33,54,45]
console.log(myarr) //way to access the array

const myarr2 = new Array(2,12,23,24,25)
console.log(myarr2[2])

//to add value in array there is a method called push.

myarr.push(50)
console.log(myarr);

//to remove the last value there is a method called pop.

myarr.pop(45)
console.log(myarr);
 
//to add the value in starting of the array there is a method called unshift.
myarr.unshift(2)
console.log(myarr);

//also there is a oposite method called shift it's remove the initial value from array

myarr.shift(2)
console.log(myarr);

//Now if you wants to know that there is a perticular value is include or not so it will give you the answer in boolean(true,false).
console.log(myarr.includes(54))
console.log(myarr); 

//to know the index of the array there is method called indexof().

console.log(myarr.indexOf(54))

//if you wants to join two array there is method called join() it will join your array and also convert the second array into string.
const newarr = myarr2.join()
console.log(newarr);
console.log(myarr2);
//to merge the two array with the help of the concat method. 
const RCB = ["Virat kohli","Rajat patidar","Josh Hazelwood"]
const MI =["Rohit Sharma","Hardik Pandya","Jasprit Bumrah"]
const BothTeam = RCB.concat(MI)
console.log(BothTeam);

const Otherteam = [...RCB, ...MI]
console.log(Otherteam);

//to spread out the array
const Array1 = [1,2,3,[4,5],6,7,[4,5,6,[10,11]]]
const real_another_array = Array1.flat(Infinity)
console.log(real_another_array);

//to know about the array or convert into array
console.log(Array.isArray("Sandip"));
console.log(Array.from("Sandip")); 

//Return the new array from a set of elements,simply covert elemets into the array.
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));


