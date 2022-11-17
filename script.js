console.log("hello");

function calcTip(bill){
   
   if (bill > 50 && bill < 300){
    return `the bill is ${bill} and the tip is ${bill * (15/100)} and the total price is ${bill*(15/100)+bill}`
   }
   else{
    return `the bill is ${bill} and the tip is ${bill * (20/100)} and the total price is ${bill*(20/100)+bill}`

   }
   
}


console.log(calcTip(275))
let t=calcTip(400)
console.log(t)