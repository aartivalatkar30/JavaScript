var numbers = [7,17,8,9,6,33,51,11,4]
var target = 11;
function linearSearch(array,target){

  for(let i=0;i<array.length;i++)

{

  if(array[i]===target){


    console.log(target+" is on "+ i +"position ")
  }
}
}
linearSearch(numbers,target);

var nom = 4;

while(nom < 24){

  console.log(nom)
  nom+=3;
}
console .log()

var val = 10;
while(val>0){

  console.log(val)
  val--;

}


console.log("***binary search***")

var numbers = [11,1,5,6,9,78,33,5,66];
var target = 78;

function BinarySearch(array, target) {
  const midIndex = Math.floor(array.length / 2);
  console.log(midIndex);
  if(target == array[midIndex]){

    console.log(midIndex);
  }
 
}

BinarySearch(numbers, target);


