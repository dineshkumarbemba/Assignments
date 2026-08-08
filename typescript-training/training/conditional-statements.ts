//conditional statement-statement along with condition. statement is line of code

let percentage:number=90;

if(percentage>=35){
    console.log("Hey you got passed")
    if(percentage>=90){
        console.log("GRADE A")
    }
    else if(percentage>=80){
        console.log("GRADE B")
    }
    else if(percentage>=70){
        console.log("GRADE C")
    }
    else if(percentage>=50){
        console.log("GRADE D")
    }
}
else{
    console.log("You are failed")
}

//switch-case

let env:string="dev";

switch(env){
    case "dev":console.log("launch the application with uat env");
    break;
    case "qa":console.log("launch the application in qa env");
    break;
    case "stage":console.log("Launch the application in stage env");
    break;
    case "prod":console.log("Launch the application in prod env");
    break;
    default :console.log("please pass right env");
    break;
}

let ar:(string|number)[]=["Dinesh",33,"Ramya",26];
console.log(ar)
ar.push("Aadhira",5)
console.log(ar)

