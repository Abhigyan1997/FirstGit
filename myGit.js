class student{

  constructor(name,age,Marks){
 
   this.name=name;
 
   this.age=age;
 
   this.Marks=Marks
 
  }
  setPlacementAge(minPlacementAge){
    return(minMarks)=>{
      if(this.Marks>minMarks && this.age>minPlacementAge){
        console.log(this.name + " is ready for placement");
      }else{
         console.log(this.name + " is not ready for placement")
      }
    }
  }
 
 }
 
 student1=new student("Ram",22,78);
 
 student2=new student("peter",23,1234,79);

student3=new student("sam",25,1234,88);

student4=new student("tim",24,1234,68);

student5=new student('mike',21,1234,43);

student1.setPlacementAge(18)(40);
student2.setPlacementAge(18)(40);
student3.setPlacementAge(18)(40);
student4.setPlacementAge(18)(40);
student5.setPlacementAge(18)(40);