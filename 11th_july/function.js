// function fun_name(){
// // code 
// }
function add(){
    var n1=parseInt(prompt("enter a"));
    var n2=parseInt (prompt("enter b"));
    var n3=n1+n2;
    console.log(n3);
    document.getElementById("common").innerHTML="result=".concat(n3);

}
function sub(){
    var n1=parseInt(prompt("enter a"));
    var n2=parseInt (prompt("enter b"));
    var n3=n1-n2;
    console.log(n3);
    document.getElementById("common").innerHTML="result=".concat(n3);

}

function mul(){
    var n1=parseInt(prompt("enter a"));
    var n2=parseInt (prompt("enter b"));
    var n3=n1*n2;
    var a="result=";
    console.log(n3);
    document.getElementById("common").innerHTML=a.concat(n3);

}
function div(){
    var n1=(prompt("enter a")).valueOf();
    var n2=(prompt("enter b")).valueOf();
    var n3=n1/n2;
    console.log(typeof n1);
    console.log(n3);
    document.getElementById("common").innerHTML="result=".concat(n3);
    
    
}