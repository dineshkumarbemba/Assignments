//**************************************
//*********Primitive Datatypes**********
//**************************************


let numb=10;
let numb1=20;
console.log(typeof numb);
console.log(typeof numb1);

let firstName="Dineshkumar";
let lastName='Thangavelu';
let role="'Senior' SDET";
console.log(firstName);
console.log(lastName);
console.log(role);

let empInfo=`Employee first name is ${firstName},Employee last name is ${lastName},Employee role is ${role}`;
console.log(typeof empInfo);
console.log(empInfo);

//undefined

let emgAge;
console.log(typeof empAge);

//null

let salary=180000;
salary=null;
console.log(salary);

console.log("******************")

//**********Non Primitive*********
//********************************

//Object collection of key and value pair

let empName="Dineshkumar";
let empId=52107621;
let empOffice="HCLTECH"

let empData={
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
console.log(empData.Address.City)
//Dynamic data
console.log(empData["empName"]);
console.log(empData["Address"]["City"])
//Array
let family=["Thangavelu","Maheswari","Dineshkumar","Ramya","Aadhira"];
let familyAge=[63,54,33,26,5];
let family_age=["Thangavelu",63,"Maheswari",54,"Dineshkumar",33,"Ramya",26,"Aadhira",5];
console.log(family);
console.log(familyAge);
console.log(family_age);

console.log(family[2])
console.log(familyAge[2]);
console.log(family_age[4])

//set

let empIds= new Set();
empIds.add(52107621);
empIds.add(9500);
empIds.add(9500);
empIds.add("Dineshkumar");
console.log(empIds)
//map

let empDetails= new Map();
empDetails.set(9500,"Dineshkumar Thangavelu City Union Bank");
empDetails.set(52107621,"Dineshkumar T HCLTech");
empDetails.set(9500,"Aadhira")
console.log(empDetails);