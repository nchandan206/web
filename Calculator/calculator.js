
var p=document.getElementById("screen");
var val="";
function calculation(a){
if(a!='c' && a!='s' &&a!='^' && a!='v1' && a!='v2')
{
    val=val+a;
    p.value=val;

}
if(a=='v1')
  {
  val=val+'(';
  p.value=val;
  }
if(a=='v2') {
  val=val+')';
  p.value=val;
  }

if(a=='^')
{
    val=val+'**';
    p.value=val;

}

  if(a=='c')
  {
   p.value="";
  val="";

  }
  if(a=='s')
  {
    let s1=Math.sqrt(p.value);
    p.value=s1;
  }
}

function result()
{
  var num=eval(p.value);
  let check=p.value;
     p.value+="="+num;
     let bn="3%2";
     bn=eval(bn);
     console.log(bn);
}
function add(a)
{
  if(a=='v1')
  {
  val=val+'(';
  p.value=val;
  }
  else{
    val=val+')';
  p.value=val;
  }
}
function delet()
{
  let g=document.getElementById("screen").value;
  let arr=g.slice(0,-1);
  p.value=arr;
  val=arr;
}
