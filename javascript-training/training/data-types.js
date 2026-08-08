//data types are classified into 2 types 1.primitive datatypes and 2.non primitive datatypes.

/*************************************************
***********primitivedatatypes********************
*************************************************/

//string

let firstName="Dinesh";
let lastName="kumar";
let role="'Senior' Test Engineer";
console.log(firstName);
console.log(lastName);
console.log(role);

let fullName=`Employee firstName is ${firstName} and Employee lastName is ${lastName}`
console.log(fullName);

let empId;
console.log(empId);

let empAge=20;
empAge=null;
console.log(empAge);

//primitive datatypes 1.object

let empData={
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
console.log(empData.empName);
console.log(empData.Address.Street)

console.log(empData["empName"]);
console.log(empData["Address"]["Street"])

let fruits=["Apple","Orange","Pineapple","Watermelon"];
let price=[120,100,50,60];
let fruitsandprice=["Apple",120,"Orange",100,"Pineapple",50,"Watermelon",60];
console.log(fruits);
console.log(price);
console.log(fruitsandprice);
console.log(fruits[3]);
console.log(fruitsandprice[3])

//function

//Test Case 1: verify the home page.
console.log("******************Test Case1: VERIFY THE HOME PAGE");
login("Chrome","Dineshkumar","Thangavelu");
console.log("Verify the home page is displayed or not");
logout();

//Test Case2: Verify the account balance
console.log("******************Test Case2: VERIFY THE ACCOUNT BALANCE");
login("FireFox","Dinesh","Thangavelu");
console.log("Verify the home page is displayed");
console.log("verify the account balance is displayed as "+ getAccountBalance());
logout();

function login(BrowserName,userName,passWord){
    console.log(`Launch the ${BrowserName} browser`);
console.log("Enter the URL:https://icici.com/");
console.log(`Enter the username as ${userName} and password as ${passWord}`);
console.log("Click on the login button");
}

function logout(){
    console.log("Logout from the application");
console.log("Close the browser");
}

function getAccountBalance(){
console.log("Navigate to account balance page");
let accountBalance=100000;
return accountBalance;
}

//set- collection of unique values of datatypes.It wont allow duplicates.
let empIds=new Set();
empIds.add(9500);
empIds.add(52107621);
empIds.add(950);
console.log(empIds)

//map-key and value pair

let empDetails = new Map();
empDetails.set(9500,"Dineshkumar");
empDetails.set(52107621,"Dineshkumar Thangavelu");
empDetails.set(9500,"aaaaa");
empDetails.set(9500,"Aadhira")
console.log(empDetails)

let currentDate= new Date();
console.log(currentDate.getDate())

let Street=Symbol();
let empData1={
    "empName":"Dineshkumar",
    "empId":52107621,
    "empRole":"'Senior' Test Engineer",
    "empVisa":false,
    "Address":{
        [Street]:"9/109,RamNagar,Poosaripatti,Nirmullikuttai Po",
        "City":"Salem",
        "State":"Tamilnadu"
    }
}
console.log(empData1)