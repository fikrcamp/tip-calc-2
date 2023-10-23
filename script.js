function calculator(bill){
    total = bill + bill*0.15
    if (bill>50 && bill <300){
        total = bill + bill*0.15
        return` your bill is ${bill}$ and the tip is 15% of your bill meal so the total is ${total} $ `
    }else if (bill>300){
        total = bill + bill*0.2
        return` your bill is ${bill} $ + the tip is 20% of your bill meal so the total is ${total} $ `
    }else{
        return`there is no calculation`
    }
}

aisha= calculator(100);
console.log(aisha);
salma= calculator(700);
console.log(salma);
saynab= calculator(10);
console.log(saynab);