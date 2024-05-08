var count;
for(var i =1;i<4;i++){

    if(count==undefined){
        count = i;
    }else{

        count +=i;
    }
}
console.log(count);
console.log("**********")

for(var i=1;i<10;i++){

    console.log(i)
}
console.log("****reverse*****")


for(var i=30;i>10;i--){

    console.log(i)
}


console.log("*****  Print reversae number from given array, use for loop *******")

var array = [1,2,3,4,5,6,7,8,9];
for (var i = 0; i < array.length; i++) {
    console.log("legnth of array:"+array[i]);
  }
  
  for (var i = array.length - 1; i >= 0; i--) {
    console.log("reverse array:"+array[i]); 
  
  }


  console.log("*******find addition of numbers from array who are odd*******")

  var array=[11,100,117,119,200,210,221]
  var count = 0;
  for(var i=0;i<array.length;i++){
    if(array[i] % 2 ===1){

        count += array[i];
    }
    i++
  }
console.log(count,"count")

var name = "awdiz";
console.log(name)
console.log(name.length)


console.log("*****Given an array find name of student whose lenght is more than 5.*****")


var stud = ["AArti","Poojaa","Jyoti","tanishka"]
console.log(stud)

for(var i=0;i<stud.length;i++){

    if(stud[i].length>5){

        console.log(stud[i])
    }
}