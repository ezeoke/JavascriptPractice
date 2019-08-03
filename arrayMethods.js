// SPLICE METHOD
// let arr = ["I", "study", "Javascript", "right", "now"];

//removing 2 items from index 1 and adding other items
// arr.splice(1, 2, "want", "to", "be", "wealthy");

//adding to an index without removing
// arr.splice(1, 0, "want", "to", "be", "wealthy");

//getting the values removed
// let removed =  arr.splice(1, 2, "want", "to", "be", "wealthy");

//removing or adding from the back
// arr.splice(-3, 2, "array", "methods");

// SLICE METHOD
// arr.slice(start, end)-copies from first start to before end index parameter

// let arr = ["t", "e", "s", "t"];

//slice returns a new array
// console.log(arr.slice(1, 3));

//slice can aswell use a negative value for both start and end
// console.log(arr.slice(-3));

//CONCAT METHOD
// let arr = [1, 2];
// console.log(arr.concat([3, 4], 5));

//--------SEARCHING IN ARRAY---------

//INDEXOF - returns -1 if the item doesnt exist
// let arr = [false, 1, "baby"];
// console.log(arr.indexOf(false));

//LASTINDEXOF
// let arr = [false, 1, "baby"];
// console.log(arr.lastIndexOf(1));

//INCLUDES METHOD
// let arr = [false, 1, "baby"];
// console.log(arr.includes(1));

//includes handles NaN correctly unlike other array searchers.
// const arr = [NaN];
// console.log(arr.includes(NaN));
// console.log(arr.indexOf(NaN));

//FIND METHOD
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" }
];

let user = users.find(item => item.id == 1 && item.name == "John");

console.log(user);
console.log(user.name);
