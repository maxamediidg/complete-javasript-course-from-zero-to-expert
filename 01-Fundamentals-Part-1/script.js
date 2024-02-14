/*
let js = 'amazing'
      console.log(40+50);


console.log("jonas");
console.log(23);

//Varibles
let firstName ="jonas";
console.log(firstName);

let myfirst_job = 'programmer';
console.log(myfirst_job);

let $new = 28;

//Data Types
let javascriptIsFn = true;
console.log(javascriptIsFn)
console.log(typeof javascriptIsFn);
console.log(typeof 123);
console.log(typeof 'jonas');

let year;
console.log(year);
console.log(typeof year);

year = 2024;
console.log(year);
console.log(typeof year);

//math Operators
const now = 2037
const agejonas = now- 1991;
const agesarah = now-2018;
console.log(agejonas ,agesarah);

console.log(agejonas * 2, agejonas / 10, 2 ** 3);

const first_Name = 'jonas';
const lastname = 'shcedmtman';

console.log(firstName + '' + lastname);

//assignment operators
let x= 10+5; // 15
x +=10; // x= x+10 = 25
x *=4; // x x=*4 = 100
x++; // x = x+1
x--; // x= x-1
console.log(x);

//comparison operators
console.log(agejonas > agesarah); // >, <, >= ,<=
console.log(agejonas >=18);
//calculate everage age

const isFullAge = agejonas >=18;
console.log(now - 1991 > now - 2018);

//operator precedence
console.log(25-10-5);

const averageAge = agejonas +agesarah /2
console.log(agejonas, agesarah, averageAge);

const firstName= 'jonas';
const job = 'teacher';
const birthyear = 1991;
const year = 2037;

const jonas = "I'm"+ firstName + ', a ' +( year - birthyear)+ 'years old ' + job + '!';
console.log(jonas);

//if else
const age = 15;
if(age >= 18){
console.log('sarah can start driving License 🚗');
}else{
const yearsleft = 18 - age;
console.log('sarah is young wait ',yearsleft);
}

const birthyears = 1991;
let century;
if(birthyears <= 2000){
 century =20;
}else{
 century =21;
}
console.log(century)

Type conversions
const inputyear = '1991';
console.log(Number(inputyear), inputyear);
console.log(Number(inputyear) + 18);

//type coertion
console.log('Iam' + 23 + ' years old');
console.log('23' - '10' -3);
console.log('23'/ '2');

let n = '1' + 1; // '11'
n= n -1 
console.log(n);

//5 falsy values 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

let money = 10;
if(money) {
      console.log('spent money');
}else{
      console.log('you should to work');
}

//Equality operator
const age = 18;
if(age===18) console.log('you just became an adult :D');

const favourite = Number(prompt("what's your favourite number"));
console.log(favourite);
console.log(typeof favourite);

if(favourite ===23){
      console.log('cool! 23 is an amazing number');
}else if(favourite ===7){
      console.log('7 is also an awesome number');
}else{
      console.log('Number is not 23 and 7')
}
if(favourite !==23) console.log('why no 23!');


//logical operator 
const hasDriverlicense = true;
const hasgoodvision = false;

console.log(hasDriverlicense && hasgoodvision);
console.log(hasDriverlicense || hasgoodvision);



//Switch Statement
const day = "monday";

switch (day) {
  case "monday":
    console.log("plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the Weekend : D");
    break;
  default:
    console.log("I don't know that day");
}

*/

//Conditional operator
const age = 23;
age >= 18 ? console.log("I like to drink wine 🍷"):
console.log("I like to drink water 💧💧");

