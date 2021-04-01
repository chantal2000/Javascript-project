function Compare(){
    var a="Five"
    var b=5
    var c='5'
    function Show(){
        console.log(a==b);
        console.log(b==c);//loosely
        console.log(b===c);//strictly
    }Show()
}Compare()                               // function closure