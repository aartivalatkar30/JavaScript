console.log("*****Given an array, find two numbers whose addition is target******")

var array =[1,2,3,4,5,6,7,8,9]
var target=25;
var count = 0;
for (var i = 0; i < array.length; i++) {
 
  
  for (var j = i + 1; j < array.length; j++) {
    
    console.log("inside a for loop.");
    count++

    console.log(array[i], "+", array[j], "=", array[i] + array[j]);

  }

}
console.log("count is::"+count)