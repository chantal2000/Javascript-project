var a=30;// Hoisting
function L(){
    let b=40;// can't be hoisted     
    const c=60;// never be reassigned
    b=40;
    c=70;
    console.log(b);
    console.log(c); //Assignment to contant value

}L();
console.log(a)

