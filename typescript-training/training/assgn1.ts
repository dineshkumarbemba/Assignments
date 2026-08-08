function loanElligibility(
 customerName:String,
 creditScore:number, 
 income:number,
 isEmployed:boolean, 
 debtToIncomeRatio:number,

):void{
    if(creditScore>750){
        console.log("since credit score is 750 and above so elligible for loan")
    }
    else if(creditScore>=650){
      if(income>=50000){
        if(isEmployed){
            if(debtToIncomeRatio<40){
                console.log("Elligible for Loan")
            }
            else{
                console.log("debtToIncomeRatio is not satisfied its higher")
            }
        }
        else{
            console.log("Customer is not employed")
        }
      }
      else{
        console.log("Customer salar is not 50000 and above")
      }
    }
    else{
        console.log("Credit score is less than 650");
    }
}



loanElligibility(
    
"John Doe",
720,
55000.0,
false,
35.0,
)