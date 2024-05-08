var array =[1,2,3,4,5,6];
var target =6;

function FindTarget(array, target) {
    for (var i = 0; i < array.length - 1; i++) {
     
      for (var j = i + 1; j < array.length; j++) {
       
        if (array[i] + array[j] === target) {
          console.log(array[i], array[j]);
        }
        
      }
      
    }
  }
  FindTarget(array, target);
  

  console.log("*************")

  var  array=[1,6,8,9,7,6,3,2,5,4]
  target = 12;

  function FindThreeNumber(array, target) {
    var results = [];
    for (var i = 0; i < array.length - 2; i++) {
      for (var j = i + 1; j < array.length - 1; j++) {
        for (var k = j + 1; k < array.length; k++) {
          console.log(array[i], array[j], array[k]);
        
        
        }
      }
    }
    return results;
    
}
    console.log(FindThreeNumber(array,target))


    console.log("*******arrays methods*******");

    var array = [6,8,2];
    array.push(4);
    console.log("push:"+array)

    array.pop();
array.pop();
console.log("POP:"+array);
array.unshift(10, 5);
array.unshift(9);
console.log("unshift:"+array);
array.shift();
console.log("shift:"+array);


var emp = ["aarti","jyotii","pooja","bhushan","akshay"]


emp.splice(1,2,"jyotii");
console.log(emp.slice(0, -1));
console.log(emp);

const todo = ["wakeup","brekafast","workout","eat","study","sleep"]
todo.splice(1,1);
console.log("array-splice::"+todo)


const array3 =[1,5,9,"AA","RT","1I"];
console.log("toString:"+array3.toString());


const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log("sort::"+months);


const array2 = [999999,2000,1999,9999,99999];
array2.sort();
console.log(array2);


const array1 = [1, 30, 4, 21, 100000];
array1.sort((a, b) => a - b);
array1.sort((a, b) => b - a);
console.log(array1)