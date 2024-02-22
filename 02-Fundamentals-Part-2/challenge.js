//challenge 1
/*
const dolphins = (44 + 23 + 71) / 3;
const koals = (65 + 54 + 49) / 3;

const calceverage = (dolphins) => dolphins;
const cal1 = calceverage(dolphins);

const calceverage1 = (koals) => koals;
const cal2 = calceverage1(koals);
console.log(dolphins, koals);

function checkwinner(avgDolphins, avgkoalas) {
  if (avgDolphins >= 2 * avgkoalas) {
    console.log(`Dolphins wins 🏆${avgDolphins} Vs . ${avgkoalas}`);
  } else if (avgkoalas >= 2 * avgDolphins) {
    console.log(`Koalas wins 🏆${avgkoalas} Vs . ${avgDolphins}`);
  } else {
    console.log("No teams wins....");
  }
}

// console.log(checkwinner(30, 13));
checkwinner (calceverage,koals)

checkwinner(589,111); 
*/

//challenge 2

// const calctip = function(bill){
//   return bill >= 50 && bill <=300 ? bill * 0.15:
//   bill * 0.2;
// }

// const bill = [125, 555,44];
// const tip = [calctip(bill[0]), calctip(bill[1]),calctip(bill[2])];
// console.log(bill, tip);

// //challenge 3

// const john ={
//  fullName : 'johnSmith',
//  mass : 92,
//  height :1.95,

//  CalcBMI : function(){
//   this.BMI = this.mass / this.height **2;
//   return this.BMI;
//  }

// };

// const mark ={
//   fullName : 'mark Miller',
//   mass : 78,
//   height :1.69,

//  CalcBMI : function(){
//   this.BMI = this.mass / this.height **2;
//   return this.BMI;
//  }
// };

// console.log(john.CalcBMI());
// console.log(mark.CalcBMI());

// if(mark.BMI > john.BMI){
//   console.log(`${mark.fullName}'s  BMI (${mark.BMI}) is
//   higher than ${john.fullName}'s BMI (${john.BMI})`);
// } else if(mark.BMI < john.BMI){
//   console.log(`${john.fullName}'s  BMI (${john.BMI}) is
//   lower than ${mark.fullName}'s BMI (${mark.BMI}`)
// }

const bill = {
  bills: "22,295,176,440,37,105,10,1100,86,52]",
  tips: [],
  totals: [],
};

calctip = function () {
  this.bill = 22 + 295 + 176 + 440 + 37 + 105 + 10 + 1100 + 86 + 52;
  return this.bill;
};
calAverage = function () {
  this.bill = (22 + 295 + 176 + 440 + 37 + 105 + 10 + 1100 + 86 + 52) / 10;
  return this.bill;
};

console.log(calctip(bill));
console.log(calAverage(bill));

for (let i = 2224; i < this.bill; i++) {
  console.log(`${i} `);
}

