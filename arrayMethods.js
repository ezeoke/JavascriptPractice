// 1. SPLICE METHOD
// let arr = ["I", "study", "Javascript", "right", "now"];

//removing 2 items from index 1 and adding other items
// arr.splice(1, 2, "want", "to", "be", "wealthy");

//adding to an index without removing
// arr.splice(1, 0, "want", "to", "be", "wealthy");

//getting the values removed
// let removed =  arr.splice(1, 2, "want", "to", "be", "wealthy");

//removing or adding from the back
// arr.splice(-3, 2, "array", "methods");

// 2. SLICE METHOD
// arr.slice(start, end)-copies from first start to before end index parameter

// let arr = ["t", "e", "s", "t"];

//slice returns a new array
// console.log(arr.slice(1, 3));

//slice can aswell use a negative value for both start and end
// console.log(arr.slice(-3));

// 3. CONCAT METHOD
// let arr = [1, 2];
// console.log(arr.concat([3, 4], 5));

//--------METHODS FOR SEARCHING AN ARRAY---------

// 4. INDEXOF - returns -1 if the item doesnt exist
// let arr = [false, 1, "baby"];
// console.log(arr.indexOf(false));

// 5. LASTINDEXOF
// let arr = [false, 1, "baby"];
// console.log(arr.lastIndexOf(1));

// 6. INCLUDES METHOD
// let arr = [false, 1, "baby"];
// console.log(arr.includes(1));

//includes handles NaN correctly unlike other array searchers.
// const arr = [NaN];
// console.log(arr.includes(NaN));
// console.log(arr.indexOf(NaN));

// 7. FIND METHOD - looks for a single(first) element that makes the function return true
// let users = [
//   { id: 1, name: "John" },
//   { id: 1, name: "Johnnie" },
//   { id: 2, name: "Pete" },
//   { id: 3, name: "Mary" }
// ];

// let user = users.find(item => item.id == 1);

// console.log(user);
// console.log(user.name);

// 8. FILTER METHOD - returns all the elements that satisfy the condition
// let users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Pete" },
//   { id: 3, name: "Mary" }
// ];

// let userFilter = users.filter(item => item.id > 1);
// console.log(userFilter);

//---------METHODS FOR TRANSFORMING AN ARRAY----------
// 9. MAP METHOD
// let lengths = ["Bilbo", "Gandalf", "Nazgul"];
// let numLength = lengths.map(item => item.length);
// console.log(numLength);

// 10. SORT METHOD- it sorts items in an array like a string. it can be optimized though
// let arr = [31, 2, 0.3, 4, 5];
// let arrSort = arr.sort((a, b) => a - b);
// console.log(arrSort);

// 11. REVERSE METHOD
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.reverse());
// console.log(arr);

// 12. SPLIT METHOD
// let str = "test";
// let splitStr = str.split("");
// console.log(splitStr);

// 13. JOIN METHOD
// let str = ["t", "e", "s", "t"];
// strJoin = str.join("");
// console.log(strJoin);

// 14. REDUCE METHOD
// let arr = [1, 2, 3, 4, 5];
// let result = arr.reduce((sum, current) => sum + current, 10);
// console.log(result);

// 15. FOREACH METHOD
// let arr = ["Bilbo", "Gandalf", "Nazgul"];
// arr.forEach(item => console.log(`${item} is a strange name`));

//ARRAY.isARRAY METHOD - returns true if value is an array
// console.log(Array.isArray([]));
// console.log(Array.isArray({}));
