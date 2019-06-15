// const month = prompt('what is your birth month?', 'input your birth month');

// const num = prompt('what is the numerical position of your birth month in a year', 'eg 1 for january');

// const successMsg = 'Your input is verified. You can proceed';

// const errorMsg = 'Wrong input for month or month number. Please try again';

// let show =

// month === 'january' && num == 1 ? successMsg 

// : month === 'february' && num == 2 ? successMsg

// : month === 'march' && num == 3 ? successMsg

// : month === 'april' && num == 4 ? successMsg

// : month === 'may' && num == 5 ? successMsg

// : month === 'june' && num == 6 ? successMsg

// : month === 'july' && num == 7 ? successMsg

// : month === 'august' && num == 8 ? successMsg

// : month === 'september' && num == 9 ? successMsg

// : month === 'october' && num == 10 ? successMsg

// : month === 'november' && num == 11 ? successMsg

// : month === 'december' && num == 12 ? successMsg

// : errorMsg;

// alert(show);

// let noOfI = 8;

// for(let i = 1; i <= noOfI; i++){
//     console.log(i)
// };

// let noOfI = 8;
// let i = 3;

// function greeting(){
//     console.log("good morning sir");
// }

// while(i <= noOfI){
//     greeting();
// i++
// }

// let noP = 5;
// let i = 2;
// do{
//     console.log('this runs');
//     i++
// } while (
//     i <= noP
// )

// a function that calculates age

// let name;

// let dOB;

// let currentYear; 

// function collectDetails(){
//     name  = prompt('what is your name?');
//     dOB = prompt('which year were you born?')
//     currentYear = prompt('what is the current year?');
// }

// function age(){
//     const myAge = currentYear - dOB;

//     alert(`My name is ${name}. I was born in the year ${dOB} so I am ${myAge} years old`)
// };

// collectDetails();
// age();

//an array

// let names = ['cuba', 'loves', 'everyone'];

// alert(names[2]);

// names[1] = 'baba';

// alert(names);


//A function that checks for even or odd numbers

// let num;

// function getNum(){
//   let num = prompt('input a number');
// };

// function oddEven(){
//     if(num % 2 == 0){
//     alert('The number is an even number')
// }else{
//     alert('The number is an odd number')
// }
// };

// getNum();

// oddEven();


//A function that calculates the factorial of a number between 50 & 1025

// let z=9;
// let results = 1;
// for(let i = z; i >= 1; i--){
//     results = results * i;
// };
// console.log(results)


// function factorize(){;
//       let z = prompt('input a number between 50 & 125');

//       let results= 1;

//     if(z >= 50 && z <= 125){
//         for(let i = 1; i <= z; i++){
//             results = results * i;
//         };
//         alert(`The factorial of ${z} is ${results}`)
//     }else{
//         alert(`Please input a number in the provided range`)
//     }
// }

// factorize();


// let interns = ['justice', 'joy'];

// interns[2] = 'cuba';

// interns.push('olive');

// interns.unshift('dodo');

// interns.pop();

// interns.shift();

// console.log(interns)

// let people = [];

// let names = prompt('add a name');

// people.push(names);

// alert(people);

//splice
// let arr = ['obi', 'ada','nnanna', 'nana', 'cuba']

// arr.splice(2, 0, 'bobo');

// // console.log(arr);

// //slice....this throws a new array
// let men = arr.slice(2, 4);

// // console.log(men);

// // concat-adds arrays
// let cars = ['benz', 'bmw'];

// console.log(arr.concat(cars))


// let num =[4000, 2, 4, 81, 1025, 0.1, 105, 5, 9, 73, 2000, 7450];

// let smallest = num[0];

// for(let i = 0; i < num.length; i++){
//     if(num[i] < smallest){
//         smallest = num[i]
//     }
//     console.log(smallest)
// }


// let checkBiggestNumber = function(arr){
//     let results = [];
//     let baba = [];
//     for(let i = 0; i < arr.length; i++){
//      results.push(arr[i]);
//      for(let j = 0; j < results.length; j++){
//         if (results[i] < arr[j]){
//             baba.push(arr[i]);
//         }
//      }
//     }
//     return baba
// }

// console.log(checkBiggestNumber(num))



// let arry = [1,75,938,38272,6,8,0.5];

// let s = arr[0];

// arry.map(n => n < s && (s=n));

// console.log(s);

// let arr = ['obi', 'ada', 'bobo', 'baba', 'babs']

// console.log(arr.lastIndexOf('baba'));

// console.log(arr.includes('baba'.toUpperCase()));

// let users =[
//    { id: 1, name: 'john'},
//     {id: 2, name: 'npa'},
//     {id: 3, name: 'dad'}
// ]

//find a thing
// let ansa = users.find(user => user.id == 3);

// console.log(ansa)

//find the index of
// let nna = users.findIndex(user => user.id == 3);

// console.log(nna)

//using for loop and map() to add items in an array

//using for loop
// let item = [23, 56, 735, 73, 8, 0.4, 4];

// let unit = 0;

// for(let i = 0; i < item.length; i++){
//     unit = unit + item[i]
// }

// // using map
// item.map(num => unit += num)

// console.log(unit)

//sort()
// let numbers = [2,7,436,83,982,1,6,4,3];

//ascending order
// let sortNumbers = numbers.sort((a,b)=>b-a);

// //descending order
// let sortNumbers = numbers.sort((b,a)=>b-a);

// console.log(sortNumbers);

// let news = numbers.reverse();

// console.log(news)

// let names = 'cuba';

// let disp = names.split('');
// console.log(disp);

// let tru = disp.reverse();
// console.log(tru)

// let getin = tru.join('');
// console.log(getin)


// let names = ['cuba', 'nnanna', 'pablo'];

// names.forEach((name, index)=>
// console.log(`${name +=' smith'} is a great man and position is ${index}`)
// );

// let numbers = [1,2,3,4,5];

// const multiplyByTwo = numbers.map(
//    (num) =>{ return num * 2}
// );

// console.log(multiplyByTwo);

 let jambScore = [180, 125, 250, 270, 141]

// let pass = jambScore.filter(score => score >= 180);

// console.log(pass);

// use reduce to get the sum of all numbers in the above array

// const reduceNum = jambScore.reduce((currentValue, accumulator)=>{
//     return currentValue + accumulator
// });

// console.log(reduceNum);

// console.log(Array.of(1,2,3,4,5))

//study :
//Array.every
//Array.some

// const user = {
//     name :'cuba',
//     age: 27,
//    ` occupation: 'coder',
//     social: {
//         fb: 'fb'
//     }
// }

// const {name, age} = user;
// console.log(age);
// console.log(name);

// const {fb} = user.social;

// console.log(fb)

// let arr = ['hey', 'where', 'are'];

// let [first, second, third] = arr;

// console.log(first)

//spread and rest
// const str = ['hello', 'world'];
// console.log(...str)

// const teamA = ['dennis', 'barnabas', 'shege', 'olivia'];
// const teamB = ['ubanna', 'cuba', 'japhet', 'ng'];
w
// const teams= [...teamA, ...teamB];

// console.log(teams)

// let updatedTeams = ['kalu', 'chigo', ...teams];
// console.log(updatedTeams)


// function convertCurrency(rate, ...amounts){
// return amounts.map(amount => amount * rate)
// };

// const mounts = convertCurrency(1.54, 10, 20,30,25);
// console.log(mounts)

// const users = [
//     {name: 'favour',
//     age: 30,
//     isWorking: true
// },

//     {name: 'olivia',
//     age: 35,
//     isWorking: true
// },
//     {name: 'ubanna',
//     age: 28,
//     isWorking: false
//     }
// ]

// //return an array of users working and age above 30
// const oldUsers = users.filter(user => {
//     return user.age >= 30 && user.isWorking
// })

// console.log(oldUsers);

// const profile = {
//     name: 'cuba',
//     job: 'coder',
//     age: 27,
//     sayProfile(){
//         console.log(`${this.name} is a ${this .job}`)
//     }
// }

// profile.sayProfile()


// function Dangote (cereal, detergent, beverages){
//     this.cereal = cereal;
//     this.detergent = detergent;
//     this.beverages =beverages;
// }

// Dangote.prototype.bark = function(){
//     console.log('bark')
// }

// const baba = new Dangote('rice', 'soap', 'milo');

// console.log(baba.bark())


class Dog {
    constructor(name, age, breed){
   this.name = name || 'bingo';  
   this.age = age || 2;
   this.breed = breed || 'german shepherd'
    }

    bark(){
        console.log('bark!, bark!!, bark!!!')
    }
}


const dog = new Dog('charlie', 23, 'shepherd');
console.log(dog);

const bingo = new Dog();
console.log(bingo)

dog.bark()