let name="Dineshkumar Thangavelu";
console.log(name);

for(let i:number=1;i<=10;i++){
    console.log("Aadhira")
}

let j:number=1;
let status:boolean=false
while(j>0){
    if(j>10||status){
        break;
    }
    console.log("infinite loop")
    j++;
}

let fruits:string[]=["Banana","Watermelon","Lemon","Apple"];
for(let i:number=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
let fruits1:string[]=["Banana","Watermelon","Lemon","Apple"];
for(let fruit of fruits){
    console.log(fruit)
}

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

for(let key in empData){
   console.log( key)
   // console.log(empData[key])
}