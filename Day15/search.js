// let array = ;
// number=7;


function search(array,number){
let min= 0;
let max = array.length - 1;
while(min <= max){

  let midindex =Math.floor((min + max) / 2);

  console.log("midindex :"+midindex+" min :"+min+" max: "+max);

  if(array[midindex] < number){
    min = midindex+1;
  }else if(array[midindex] > number){

    max = midindex-1;

  }
  else{

    return  midindex;
  }

}

}
const res = search([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],7);
console.log(res);
