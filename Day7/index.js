
function Addition(){

    
    // console.log("hiiii");

    var num1 = 100;
    var num2 = 200;
     return num1 + num2;
     console.log("answe")
    
}

const ans = Addition();


function IncreaseNumberOfProduct() {
    var product = 1000;
    return product + product;
  }
  const price = IncreaseNumberOfProduct();
  
  const num1 = 30;
  const num2 = 50;

  function Addition(num1 ,num2)
{

    return num1 + num2;
}


function Subtract(num1 ,num2)
{

    return num1 - num2;
}


function Multiply(num1 ,num2)
{

    return num1 * num2;
}

function Divide(num1 ,num2)
{

    return num1 / num2;
}

console.log(Addition(num1,num2));

console.log(Subtract(num1,num2));

console.log(Multiply(num1,num2));

console.log(Divide(num1,num2));



function CheckNoEvenOdd(){

    if(num1 % 2 ===0){
console.log("even")

    }else{

        console.log("ODD")
    }
}

CheckNoEvenOdd(50);


console.log(">>>>>>>>>ARRAY>>>>>>>>>>>")

var employee = ["Aarti","Pooja","Jyoti","Akshay"];

console.log(employee.length);
console.log(employee,"employees");
console.log(employee[1]);
console.log(employee[3]);

console.log(employee[employee.length-1]);



console.log("<<<<<<<<<<Print numbers from 1 to 100, by using for loop.>>>>>>>>>>>>>");

for(var i = 1;i<=100;i++){

console.log(i)
}


console.log("<<<<<<<<<Print number from 10 to 60 with gap of 4;>>>>>>>>>>>>>");


for(var i=10;i<=60;i+=4){

    console.log(i)
}

console.log("<<<<<<<<Print number from 33 to 76 with gap of 3 but number also must be even>>>>>>>>>>>>>")

for(var i = 33;i<=76;i+=3){

    if(i%2== 0){
        console.log(i)

    }
}

console.log("<<<<the addition of number from 23 to 89 with gap of 2 and number must be odd.>>>>");

var Count = 0;
for (var i = 23; i <= 89; i += 2) {
  if (i % 2 === 1) {
    console.log(i);
    Count += i;
  
  }
}
console.log("count is:"+Count);


console.log("1 - 5; 1 * 2 *  3 *  4 *  5  -> 120")

var count ;
for(var i = 1;i<=5;i++)
    {

        if(count == undefined){

            count = i;
        }else{

count = count*i;
        }

    }

    console.log("total count is"+count)

    var number = 5;
number = number + 1;
number += 3;
number++;
number++;
number++;
console.log(number);

var number = 100;
number = number - 1;
number -= 10;
number--;
console.log(number);