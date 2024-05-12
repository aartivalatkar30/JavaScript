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