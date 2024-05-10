const array = [111,222,3333,4444]

const output = array.map((students)=> students * 2);
console.log("*****output:" +output+" *****")

console.log("****ACCUMUALTOR value*****")

const arrays = [,2,5,8,9,6]
const sum = arrays.reduce((accumulator,currentvalue)=>accumulator + currentvalue,0);
console.log(sum)

console.log("*****FOREACH******")

const array2 = [9,8,7,6,5,4,3,2,1]

array2.forEach((val) => console.log("Foreach loop:"+val));

console.log("*****combined value******")

const arr = [1,2,3,4,5,6]
const arr2 = [9,8,7,6,5,4]
const combine = arr2.concat(arr);
console.log("combine val:"+combine)


console.log("***Find ***")

const num1 = [8,5,9,6,3,4,2]
const outputs = num1.find((num1) => num1 > 2);
console.log("***val:"+outputs)


console.log("****findIndex***")
const val1 =[7,5,3,1,5,9]
const index = val1.findIndex((val1)=>val1 > 6)

console.log(index)


console.log("*****isExist OR NOT*****")
const data =[1,5,7,5,6,3,"AAAA","CVDG"]

const data1 =[1,5,7,5,6,3,"AAAA","CVDG"]
const isExist = data1.includes("AARRTI");
const isExist1 = data.includes("AAAA");

console.log("include:"+isExist)
console.log("include:"+isExist1)