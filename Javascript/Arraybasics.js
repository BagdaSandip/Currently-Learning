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