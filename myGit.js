//CURRYING USING BIND

let multiply=function(x,y){
  console.log(x*y);
}
let multiplybytwo=multiply.bind(this,2);
multiplybytwo(6);

let multiplybythree=multiply.bind(this,3);
multiplybythree(6);

//CURRYING USING CLOSURE
let multiply2=function(x){
  return function (y){
  console.log(x*y);
  }
}
multiplyByTwo=multiply(2);
multiplyByTwo(3);
multiplyByThree=multiply(3);
multiplyByThree(10);