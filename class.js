class Student{
    constructor(sId, sName){
        this.id=sId;
        this.name=sName;
        this.school="West End High School ";
    }
}
const student1= new Student(12, "shuvo");
const student2= new Student(22, "akash");
console.log(student1, student2);