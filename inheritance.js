// class Parent{
//     constructor(){
//         this.fatherName="Mahabub Alam Khan";
//     }
// }

// class Child extends Parent{
//     constructor(name){
//         super();//super diye parent ke extendts kora hoise 
//         this.name=name;
//     }
// }
// const child1=new Child("ashik");
// const child2=new Child("anik");
// console.log(child1);
// console.log(child2);

class Parent{
     constructor(){
         this.fatherName="Mahabub Alam Khan";
     }
 }

 class Child extends Parent{
     constructor(name){
         super();//super diye parent ke extendts kora hoise 
         this.name=name;
     }
     getFullname(){
         return this.name+ " " +this.fatherName;
     }
 }
 const child1=new Child("ashik");
 const child2=new Child("anik");
 console.log(child1.getFullname());
 console.log(child2.getFullname());