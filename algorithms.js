// const name = 'blessed';

// // function reverse(str){

// //  let bab =  str.split('').reverse().join('');
// //  return bab
// // }

// // reverse(name)

// // for(let nam of name){
// // console.log(nam)
// }

// palindromes are strings that appear same even after reversing;

// const palin = 'bob';

// function palindrome(names){
//     let reversed = '';
//     for(let name of names){
//         reversed = name + reversed;
//     }
//     return reversed == names? true : false;
// }

// console.log(palindrome(palin))


// function reverseNumber(numb)
// {
//     let number;
//     for (let num of String(numb)){
//         number = num + number;
//         // console.log(number)
//     }
// let nomber=parseInt(number)
// return nomber
// }
// console.log((reverseNumber(46)))

// function reverseNegativeNumber(numb)
// {
//     let number;
//     for (let num of String(numb)){
//         number = num + number;
//         // console.log(number)
//     }
// let nomber= Math.sign(numb) * parseInt(number)
// return nomber
// }
// console.log((reverseNegativeNumber(-474486)))

//using algo to capitalize words in a sentence
function capitalizeWord(str){
let words = [];
for(let word of str.split('')){
    words.push(word[0].toUpperCase() + word.slice(1))
}
return words.join('')
}

capitalizeWord('a big word')
