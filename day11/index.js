var EmployeeDetails = {
    name:"aarti m valatkar",
    age: 25,
    location:"mumbai",
    designation:"Architecture",
    isOpen:true,
    Sites:[
        "thane",
        "Bandra",
        "CST",
        "Dadar",
        "lowerparel",
    ],
    clients:{completedsites:100 , visitedsites:20 },

};


console.log(EmployeeDetails.Sites);
console.log(EmployeeDetails.designation);
console.log(EmployeeDetails.Sites);
console.log(EmployeeDetails.isOpen);
console.log(EmployeeDetails.name);
console.log(EmployeeDetails.clients.completedsites);


console.log(EmployeeDetails["name"]);

console.log(EmployeeDetails["age"]);

console.log(EmployeeDetails["designation"].length)


const keys = Object.keys(EmployeeDetails);
console.log("keys::"+keys);

const val = Object.keys(EmployeeDetails);
console.log("val::"+val);

for(let key in EmployeeDetails){


    console.log("key:"+key,EmployeeDetails[key])
}
