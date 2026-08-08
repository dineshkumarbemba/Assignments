//typescript:superset of javascript.all javascript components plus typesafety.
let num1:number=10;
let num:number=20;
console.log(typeof num1)//string

let firstName:string="Dinesh";
let lastName:string="kumar";
let role:string="'Senior' Test Engineer";
console.log(firstName);
console.log(lastName);
console.log(role);

let fullName:string=`Employee firstName is ${firstName} and Employee lastName is ${lastName}`
console.log(fullName);

let result:boolean=10<20;
console.log(result)

let empId:undefined;
console.log(empId)

let salary:null=null;
console.log(salary)

//union--it represents more than one datatype within variable.
let empAddress:any="salem";
empAddress=636007;
empAddress=true
console.log(typeof empAddress)

interface empInfo{
    "empName":string,
    "empId":number,
    "empRole":string,
    "empVisa":boolean,
    "Address":{
        "Street":string,
        "City":string,
        "State":string
    }
}
let empData:empInfo={
    "empName":"Dineshkumar",
    "empId":52107621,
    "empRole":"'Senior' Test Engineer",
    "empVisa":false,
    "Address":{
        "Street":"9/109,RamNagar,Poosaripatti,Nirmullikuttai Po",
        "City":"Salem",
        "State":"Tamilnadu"
    }
}
console.log(empData)

let fruits:string[]=["Apple","Orange","Pineapple","Watermelon"];
let price:number[]=[120,100,50,60];
let fruitsandprice:(string|number)[]=["Apple",120,"Orange",100,"Pineapple",50,"Watermelon",60];
console.log(fruitsandprice)

let data:[string,number,boolean]=["Dineshkumar",52107621,true];
console.log(data)

//function

//Test Case 1: verify the home page.
console.log("******************Test Case1: VERIFY THE HOME PAGE");
login("Chrome","Dineshkumar",123456);
console.log("Verify the home page is displayed or not");
logout();

//Test Case2: Verify the account balance
console.log("******************Test Case2: VERIFY THE ACCOUNT BALANCE");
login("FireFox","Dinesh","Thangavelu1");
console.log("Verify the home page is displayed");
console.log("verify the account balance is displayed as "+ getAccountBalance());
logout();

function login(BrowserName:string,userName:string,passWord:string|number):void{
    console.log(`Launch the ${BrowserName} browser`);
console.log("Enter the URL:https://icici.com/");
console.log(`Enter the username as ${userName} and password as ${passWord}`);
console.log("Click on the login button");
}

function logout():void{
    console.log("Logout from the application");
console.log("Close the browser");
}

function getAccountBalance():(number|string)[]{
console.log("Navigate to account balance page");
let accountBalance:(number|string)[]=[100000,"Dineshkumar Thangavelu"];
return accountBalance;
}