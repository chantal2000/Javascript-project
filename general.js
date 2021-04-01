let x=30;
let y=x - " ";
console.log(y);  // implicit coersion 

var names=["Chantal","Linda"]
names.push("Marie"); // to add item in array
console.log(names)





var z=[[1,2,3],[4,5,6]];
var newArr = [];
for(var i = 0; i < z.length; i++)
{
    newArr = newArr.concat(z[i]);           // converting 2 dimensional to one dimensional array
}

console.log(newArr);

