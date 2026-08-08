let studentName:string[]=["Suresh","Mahesh","Naresh"];
let studentMarks:number[]=[75,80,82];

let updatedMarks:number[]=[];
let total:number=0;
for(let i:number=0;i<studentMarks.length;i++){
    updatedMarks[i]=studentMarks[i]!+10;
    total +=updatedMarks[i]!;
//console.log(updatedMarks[i])
console.log("updated marks: "+studentName[i]+":"+updatedMarks[i])
}
const average=total/updatedMarks.length
console.log(average)