let name:string="Aadhira";
for(let i:number=1;i<=10;i++){
    console.log(name)
}
console.log("*****************************")
let pageloaded:boolean=false
let j:number=1;
while(j>0){
    if(j>=10||pageloaded){
        break;
    }
    console.log(name)
    j++
}

let family:string[]=["Thangavelu","Maheswari","Dineshkumar","Ramya","Aadhira"];

for(let fam of family){
    console.log(fam)
}

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
for(let key in empData){
    console.log(key);
    //console.log(empData[key]);
}

let x:number=0;
do{
    console.log("Dineshkumar T");
    x++;
}
while(x<=10);

for(let a:number=0;a<=10;a++){
    if(a>=5 && a<=7 ){
     continue;   
    }
    console.log(a);
}
