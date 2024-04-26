function verify(){
var no;
no=Number(document.getElementById("age").value);
if(no>=18)
{
    console.log("you are eligible"+no)
alert("you are eligible for a driving");
}
else
{
    console.log("not eligible"+no)
alert("You are not eligible for a driving ");
}
}