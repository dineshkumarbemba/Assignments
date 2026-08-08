let empDetails:{empName:string,empSalary:number,empExp:number,empRating:number}[]=[
{empName:"Alice Johnson",empSalary:75000.0,empExp:5.1,empRating:4.2},
{empName:"Bob Smith",empSalary:68000.0,empExp:3.2,empRating:3.8},
{empName:"Carol Davis",empSalary:82000.0,empExp:7.1,empRating:4.5},
{empName:"David Brown",empSalary:90000.0,empExp:10.2,empRating:2.5},
{empName:"Eva Green",empSalary:60000.0,empExp:2.4,empRating:3.5}
]
for(let i:number=0;i<empDetails.length;i++){
    let empName=empDetails[i]?.empName;    
    let empSalary=empDetails[i]?.empSalary;
    let empExp=empDetails[i]?.empExp;
    let empRating=empDetails[i]?.empRating;
    
    let hikePercentage: number = calculateHike(empSalary, empExp, empRating);
    console.log(`${empName} : Hike ${hikePercentage}%`);
  
}

function calculateHike(empSalary:number,empExp:number,empRating:number):number{
let variablePayPercent:number=0;
let bonus:number=0;
let reward:number=0;
if(empRating>=4.0){
    variablePayPercent=15.0;
    bonus=1500;
    }
    else if(empRating>=3&& empRating<4){
    variablePayPercent=10.0;
    bonus=1200;
    }
    else{
        variablePayPercent=3;
        bonus=300;
    }
    if(empExp>=5){
        reward=5000;
    }

    const hike =
    (empSalary * variablePayPercent) / 100 + bonus + reward;
    const hikePercent=(hike/empSalary)*100;
  return hikePercent;
}
