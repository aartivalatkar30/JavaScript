let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

let target = 2;

function BinarySearch(array,target){
console.log("target is:"+target) //17
  let left = 0;
  let right = array.length - 1;
  while(left <=right ){
    let midindex = Math.floor((left + right)/2); //mid = 7 ,
    console.log(midindex,"is a midindex of ",array[midindex]+"th position");//7
    if(array[midindex] === target){
      console.log("midindexarray is ::"+array)
      return midindex;
    }else if(array[midindex]<target){

      console.log(array[midindex],"element is less than target is "+[target])//4,7
      left = midindex+1;
    }else if(array[midindex] > target){

      console.log(array[midindex,target,"element is greater than target"])
      right = midindex - 1;
      console.log("right:"+right)
    }
  }
}

BinarySearch(numbers,target)