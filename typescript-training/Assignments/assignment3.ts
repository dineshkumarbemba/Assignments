const studentNames:String[]=["Suresh","Mahesh","Naresh"];
const studentMarks:number[]=[75, 80, 82];

let total:number=0;
let updatedMarks:number[]=[];
console.log("Updated Marks:");
for(let i:number=0;i<studentMarks.length;i++){
    updatedMarks[i]=studentMarks[i]!+10;
    total+=updatedMarks[i]!;
    console.log(studentNames[i]+":"+updatedMarks[i]);
}
const average:number=total/updatedMarks.length
console.log("average is" +average)
