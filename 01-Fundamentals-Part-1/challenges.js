// //challenge 1
// const massmark = 78 ;// mark
// const heightmark = 1.68;

// const bmimark = massmark  / heightmark **2;

// console.log(bmimark);

// const massjohn = 92 ;// mark
// const heightjohn = 1.95;

// const bmijohn = massjohn  / (heightjohn * heightjohn);

// console.log(bmijohn);


// const markHeigherBMI = bmimark > bmijohn;
// console.log(markHeigherBMI);

// //challenge 2 if else

// if(bmimark >= bmijohn){
//     console.log("marks BMI  is higher than johns")
// }else{
//     console.log("marks BMI is higher than johns")
// }
   
// challenge 3
// const everage_Score_dolphins = (97 + 112+ 101) / 3;
// console.log(everage_Score_dolphins);

// const everage_Score_koalas = (109 +95+50) /3;
// console.log(everage_Score_koalas);

// if(everage_Score_dolphins > everage_Score_koalas){
//     console.log("dolphins win the trophy 🏆");
// }else if(everage_Score_koalas > everage_Score_dolphins){
//     console.log("koalas win the trophy 🏆");
// }else if(everage_Score_dolphins === everage_Score_koalas && everage_Score_dolphins >=100 && everage_Score_koalas >=100){
//     console.log("Both win the trophy 🏆");
// }
// else{
//     console.log("No one wins the trophy☹️☹️");
// }

const bill = 40;
const tip = bill <= 300 && bill >=50 ? bill * 0.15:
bill * 0.2;
console.log(`th tip wa ${bill}, the tip was ${tip},
and the total value ${bill + tip}`);