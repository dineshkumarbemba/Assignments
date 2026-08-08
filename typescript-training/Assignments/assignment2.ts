function loanVerify (   
 customerName:String,
  creditScore:number, 
 income:number,
 isEmployed:boolean, 
 debtToIncomeRatio:number,
):void{
    if(creditScore>750){
        console.log("credit score is 750 so elligible for loan loan is approved")
    }
    else if(creditScore>=650){
        if(income>=50000){
            if(isEmployed){
                if(debtToIncomeRatio<40.0){
                    console.log("Loan approved meets all criteria secondary conditions")
                }
                else{
                    console.log("Loan denied has doesnt meet expectations as debttoincomeratio is too high.")
                }
            }else{
                console.log(customerName+"is not employed so denied for loan")
            }
        }else{
            console.log(customerName+"Salary is too low less than criteria")
        }
    }else{
        console.log(customerName+"loan denied as cibil score is not good")
    }
}


 loanVerify(
"John Doe",
 720,
 55000.0,
  true,
 35.0
 );
