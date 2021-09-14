class Person
{
    constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
   }

   walk(distance){

   }

}

class Student extends Person
{
 constructor(firstName, lastName, age, studID){
 super(firstName, lastName,age);
 this.studID = studID;         
 }    
 enroll(subject)
 {
     
 }
}