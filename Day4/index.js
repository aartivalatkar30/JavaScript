var validage = 15;
console.log(validage > 18);

if (validage > 18) {
  console.log("Your age is valid for Driving License.");
} else if (validage == 18) {
  console.log("you are allowed for LL.");
} else if (validage == 10) {
  console.log("Your age is 10.");
} else {
  console.log("Your age is Not valid for Driving License.");

}



var num1 = 10;
var num2 = 10;
console.log(num1 == num2);

var num1 = 10;
var num2 = '10';
console.log("number "+num1 == num2);
console.log("number "+num1 === num2);

console.log("greater than "+20 > 30);
console.log("less than "+20 < 30);
console.log("less than equl to "+30 <= 30);
console.log("greater than equal to"+30 >= 30);
console.log("not equal to"+30 != 30);


console.log("-------EVEN-ODD------------");

var num=345;
if(num % 2 == 0){
    console.log("nuber is evev");
}else{
    console.log("number is odd");
}

