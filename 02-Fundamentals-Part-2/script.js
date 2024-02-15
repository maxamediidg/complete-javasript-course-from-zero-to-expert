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
*/

//Arrays

const friend1 = 'maxamed';
const friend2 = 'omar';
const friend3 = 'jama';

const friends = ['maxamed', 'omar', 'jama'];;
console.log(friends)

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

const calcage = function(birthyear){
    return 2037 - birthyear;
}

const years = [1990, 1965, 2010, 2018];

const age1 = calcage(years[0]);
const age2 = calcage(years[1]);
const age3 = calcage(years[years.length -1]);
console.log(age1, age2, age3);