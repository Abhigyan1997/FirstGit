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
 student1.setPlacementAge(11)(40);
 