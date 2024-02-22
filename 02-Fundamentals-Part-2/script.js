/*
'use strict';

let hasDriverLicense = false;
const passtest = true;

if(passtest) hasDriverLicense = true;
if(hasDriverLicense) console.log('I can drive :D');



//functions
function logger(){
    console.log('My name is maxamed');
}
//calling function
logger();

function fruitProcessor(apples,oranges){
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const applejuice =fruitProcessor(5,0);
console.log(applejuice); 

//function declarations
function calcAge1(birthyear) {
    return 2037 - birthyear;
}

const age1 =calcAge1(1991)

//function expression 
const calcAge2 =function (birthyear){
    return 2037 - birthyear;
}

const age2 = calcAge2(1991);
console.log(age1,age2);



const calcAge2 =function (birthyear){
    return 2037 - birthyear;
}

//Arrow functions
const calcAge3 = birthyear => 2038-birthyear;
const age3 =calcAge3(1991);
console.log(age3);

const yearsuntilretirement = (birthyear, firstName) =>{
    const age = 2037 - birthyear;
    const retirememt = 65 -age;
    return `${firstName} retires in ${retirememt}`;
}

console.log(yearsuntilretirement(1991, 'omar'));
console.log(yearsuntilretirement(1981, 'abdi'));



//functions calling other functions

function cutfruitpiecess(fruit){
    return  fruit *4;
}

function fruitProcessor(apples,oranges){
    const applePiecess =cutfruitpiecess(apples);
    const orangesPiecess =cutfruitpiecess(oranges);
    const juice = `juice with ${applePiecess} pieces of apples and ${orangesPiecess} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2,3));



const calcAge = function (birthyear){
    return 2037 - birthyear;
}

const yearsuntilretirement = function (birthyear,
     firstName){
    const age =calcAge(birthyear);
    const retirememt = 65 -age;

    if(retirememt > 0){
        console.log(`${firstName} retires in ${retirememt} years`)
        return retirememt;
    }else{
        console.log(`${firstName} has already retired 🍕`)
        return -1;   
    }

 }

console.log(yearsuntilretirement(1991,'omar'));
console.log(yearsuntilretirement(1950,'jama'));

//Arrays

const friend1 = 'maxamed';
const friend2 = 'omar';
const friend3 = 'jama';

const friendss = ['maxamed', 'omar', 'jama'];;
console.log(friendss)

console.log(friendss[0]);
console.log(friendss[2]);

console.log(friendss.length);
console.log(friendss[friendss.length - 1]);

const calcage = function(birthyear){
    return 2037 - birthyear;
}

const years = [1990, 1965, 2010, 2018];

const age1 = calcage(years[0]);
const age2 = calcage(years[1]);
const age3 = calcage(years[years.length -1]);
console.log(age1, age2, age3);

//Add element 
const friends = ['maxamed', 'omar', 'jama'];
friends.push('abdi');
console.log(friends);

friends.unshift('abdi');
console.log(friends);

//remove elements
friends.pop();
friends.pop();
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('abdi'));
console.log(friends.indexOf('omar'));

console.log(friends.includes('abdi'));
console.log(friends.includes('omar'));

if(friends.includes('maxamed')){
    console.log('you have a friend called maxamed');
}else{
    console.log('Not found make friend maxamed');
}




const jonas = {
    firsName :'maxamed',
    lastName : 'eid',
    age : 2037 - 1991,
    job : 'Software Engineer',
    city : 'hargeisa',
    country : 'somaliland',
    freiends: ['micheal','abdi','jonas'],
};
console.log(jonas);
console.log(jonas.lastName);


const namekey = 'name';
console.log(jonas['first' + namekey]);
console.log(jonas['last' + namekey]);

const Interest= prompt('what do you want to know about maxamed? choose between firstName,lastName,age,job,city,and freiends');
console.log(Interest);


console.log(`${jonas.firsName} has ${jonas.freiends.length},
and his best friends is called ${jonas.freiends[0]}`);


//objects

const jonas = {
    firsName :'jonas',
    lastName : 'eid',
     job : 'Software Engineer',
    city : 'new York',
    birthyear: 1991,
    country : 'united states of America',
    freiends: ['micheal','steven','jhons'],
    HasDriverlicense : true,

    calcAge : function(){
        this.age = 2037 - this.birthyear;
        return this.age;    
    },
    getSummary : function(){
        return `${this.firsName} is a ${this.calcAge()} -year old ${jonas.job} and has a ${this.HasDriverlicense ? 'a': 'no'
    } driver's license.`
    }
};
console.log(jonas.calcAge());


console.log(jonas.getSummary());


//Loops

// console.log('Lifting weights repetition 1 🫲🫲');
// console.log('Lifting weights repetition 2 🫲🫲');
// console.log('Lifting weights repetition 3 🫲🫲');
// console.log('Lifting weights repetition 4 🫲🫲');
// console.log('Lifting weights repetition 5 🫲🫲');
// console.log('Lifting weights repetition 6 🫲🫲');
// console.log('Lifting weights repetition 7 🫲🫲');
// console.log('Lifting weights repetition 8 🫲🫲');
// console.log('Lifting weights repetition 9 🫲🫲');
// console.log('Lifting weights repetition 10 🫲🫲');

//for loops keeps running while condition is true
for(let rep=5; rep<=10; rep++) {
    console.log(`Lifting weights repetition ${rep} ❤️`);
}

const jonas = [
   'jonas',
   'eid',  
    'Software Engineer',
    'new York',
     1929,
    ['omar', 'abdi', 'maxamed']
];

// console.log(jonas[0]);

for(let i = 0; i< jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);
}


const years = [1991, 2002, 2003, 2021];
const ages= [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

//continue and break the loop
console.log('----ONLY STRING----')
for(let i = 0; i< jonas.length; i++) {
    if(typeof jonas[i] !=='string') continue;
    console.log(jonas[i], typeof jonas[i]);
}

//continue and break the loop
console.log('----BREAK WITH NUMBER----')
for(let i = 0; i< jonas.length; i++) {
    if(typeof jonas[i] !=='number') break;
    console.log(jonas[i], typeof jonas[i]);
}




const jonas = [
    'jonas',
    'eid',  
     'Software Engineer',
     'new York',
      1929,
     ['omar', 'abdi', 'maxamed']
 ];

 for(let i= jonas.length -1; i >= 0; i--) {
    console.log(i,jonas[i]);
 }

 for(let exercise =1; exercise < 4; exercise++) {
  console.log(`--Starting exercise ${exercise} `); 

  
 for(let rep =1; rep < 4; rep++) {
    console.log(` exercise ${exercise}:Lifting weights repetition ${rep} 😊😊 `); 
 }  

 }



 //while loop
for(let rep=5; rep<=5; rep++) {
    console.log(`Lifting weights repetition ${rep} ❤️`);
}

let rep =1;
while(rep <= 10){
    // console.log(`WHILE :Lifting weights repetition ${rep} ❤️`);

    rep++;
}


let dice = Math.trunc(Math.random() * 6) +1;

while (dice !==6){
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) +1;
    if(dice === 6) console.log(`Loop is about to end...`);
}

*/


