let num1:number=10;
let num2:number=10.25;

console.log(typeof num1);
console.log(typeof num2);
console.log(num1 + " "+ num2);

let firstName:string ="Dinesh";
let lastName:String ="Kumar";
let role:string ="'Senior' SDET";

console.log(firstName);
console.log(lastName);
console.log(role);

let empInfo:string=`Employee first name is ${firstName},Employee last name is ${lastName},Employe role is${role}`;
console.log(empInfo);

let result:boolean=10>20;
console.log(result);

let empAge:undefined;
console.log(typeof empAge);

//null

let salary:null=null;
console.log(salary);

let firstName1:string|number ="Dinesh";
//firstName1=10000;
console.log(typeof firstName1)

let firstName2:any="dineshkumar";
firstName2=true;
console.log(firstName2)
console.log(typeof firstName2)

//Object in Typescript

interface empInfo{
    "empName":string,
    "empId":number,
    "empOffice":string,
    "Address":{
"City":string,
"State":string,
"pincode":number
    }

}

let empData:empInfo={
    "empName":"Dineshkumar",
    "empId":52107621,
    "empOffice":"Jigani",
    "Address":{
        "City":"Salem",
        "State":"Tamilnadu",
        "pincode":636139

    }
}

console.log(empData);
console.log(empData["Address"]["City"]);

let family:string[]=["Thangavelu","Maheswari","Dineshkumar","Ramya","Aadhira"];
let familyAge:number[]=[63,54,33,26,5];
let family_age:(string|number)[]=["Thangavelu",63,"Maheswari",54,"Dineshkumar",33,"Ramya",26,"Aadhira",5];
console.log(family);
console.log(familyAge);
console.log(family_age);

console.log("**********************");
//Test Case 1: verify the home page.
console.log("******************Test Case1: VERIFY THE HOME PAGE");

logIntoApplication("Chrome","https://icici.com/");

console.log("Verify the home page is displayed or not");

logOuntFromApplication();

//Test Case2: Verify the account balance
console.log("******************Test Case2: VERIFY THE ACCOUNT BALANCE");

logIntoApplication("FireFox","https://icici.com/");

console.log("Verify the home page is displayed");
console.log("Navigate to account balance page");
getAccountBalance();
console.log("verify the account balance is displayed as "+getAccountBalance());

logOuntFromApplication();

function logIntoApplication(browserName:string,url:string):void{
console.log(`Launch the  ${browserName} Browser`);
console.log(`Enter the URL: ${url}`);
console.log("Enter the username as 'Dinesh' and password as 'Dinesh@1993'");
console.log("Click on the login button");
}
function logOuntFromApplication():void{
console.log("Logout from the application");
console.log("Close the browser");
}

function getAccountBalance():(number|string)[]{
    console.log("Navigate to account balance page");
    let accountBalance:(number|string)[]=[100000,"Dineshkumar"];
    return accountBalance;   
}