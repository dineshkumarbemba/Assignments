const transactionAmount:number[]=[50000,-2000,3000,-15000,-200,-300,4000,-3000];
let totalCreditTransactions:number=0;
let totalDebitTransactions:number=0;
let totalCreditAmount:number=0;
let totalDebitAmount:number=0;
let totalCreditSuspeciousAmount:number=0;
let totalDebitSuspeciousAmount:number=0;
let totalDebitSuspeciousAmountvalue:number=0;

for(let i:number=0;i<transactionAmount.length;i++){
   const currentAmount=transactionAmount[i];
   //console.log(currentAmount);
   if(currentAmount && currentAmount>0){
    totalCreditTransactions=totalCreditTransactions+1;
    totalCreditAmount+=currentAmount;
    if(currentAmount >10000){
        totalCreditSuspeciousAmount++;
    }
   }
   else{
    totalDebitTransactions++;
    totalDebitAmount-=currentAmount!;
    if(currentAmount && currentAmount <-10000){
        totalDebitSuspeciousAmount++;
        totalDebitSuspeciousAmountvalue=totalDebitSuspeciousAmount+currentAmount;
    }
   } 
 }
 console.log("total credit amount"+totalCreditAmount);
  console.log("total credit transactions"+totalCreditTransactions);
  console.log("total credit suspecious amount"+totalCreditSuspeciousAmount);
  console.log("total debit amount"+totalDebitAmount)
  console.log("total debit transaction"+totalDebitTransactions)
console.log("total debit suspeciious transaction"+totalDebitSuspeciousAmount)
console.log(totalDebitSuspeciousAmountvalue)

