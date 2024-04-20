function Greet(){
    
    console.log("Thank You!!!!");

}

console.log("Function::"+Greet());
{
    var number = 100;
  }
console.log(number);
  {
    let number = 80;
    {
      console.log(number);
    }
  }
  console.log("-------------let---------------");

  let firstno=50;
  {

    const secondno = 25;
    var thirdno= 100;
    console.log(firstno);
    {
    {

         console.log("secondno:: "+secondno);
         console.log("thirdno :: "+thirdno);
         console.log("firstno :: "+firstno);


    }
    console.log("secondno::"+secondno);
   }
}
console.log(thirdno);

console.log("----------hoisting-----------");

numeric = 10;
console.log("number:::"+numeric);

var numeric;
numeric = 10;
console.log("numeric:::"+numeric);

// let numeric;
