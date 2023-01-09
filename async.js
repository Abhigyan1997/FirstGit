console.log("Person1: Ticket checked");
console.log("Person2: Ticket checked");
const preMovie=async()=>{
    const wifeBringTicket=new Promise((resolve,reject)=>{
setTimeout(()=>resolve('Person3: Ticket checked'),3000);
    })
   let ticket= await wifeBringTicket;
      console.log('Wife-I have ticket');
         console.log("Husband-Lets go in");
           console.log('wife-I am hungry');
   const getPopcorn=new Promise((resolve,reject)=>resolve(`popcorn`))
   let popCorn=await getPopcorn;
      console.log('husabnd-I got popcorn');
         console.log("Husband-we should go in");
           console.log('wife=I want some butter');
   const getButter=new Promise((resolve,reject)=>resolve(`butter`))
       let butter=await getButter;    
       console.log('husabnd-I got butter');
         console.log("Husband-we should go in");
           console.log('wife=I want some cold drink');
   const getColdDrink=new Promise((resolve,reject)=>resolve(`coldDrink`)) 
    let coldDrink=await getColdDrink;
    console.log('husabnd-I got cold drink');
         console.log("Husband-anything else");
           console.log('wife-We are getting late,we should go in');
           return ticket;
}
preMovie().then((m)=>console.log(m));
console.log("Person4: Ticket checked");