var p=document.getElementById("screen");
var val="";
function calculation(a)
{
    if(a=='c') //clear the all calculation
    {
     p.value="";
    val="";
  
    }
    else if(a=='v1')
    {
        val=val+'(';
        p.value=val;
    }
    else if(a=='v2')
    {
        val=val+')';
    p.value=val;
    }
    else{

    val=val+a;
    p.value=val;
    }

    

}

function result()
{
  var i;
  let a="";
  let st=[];//store the number
  let sy=[];// store the integer
  for(i=0;i<val.length;i++)
  {
    let code=val.charCodeAt(i);
    let c=val.charAt(i);
    console.log(code);
    if(code>=48 && code<=57 || code==46)
    {

        a+=c;
        console.log(a);
    }
    else{

        if(a!="") // if a is null in case of number then we have to handle it
       {
       st.push(a);
        a="";
       }
       sy.push(c);
    }
}
if(a!="") // if a is null in case of number then we have to handle it
{
st.push(a);
}

console.log(sy); // in to check error in the console
console.log(st);

var max=0;
var count;
var index;
var len=sy.length;
for(let j=0;j<=len;j++)
{
for(i=0;i<=sy.length;i++)
{
    count=precedence(sy[i]);
    console.log(typeof count);
    if(count>max)
    {
        max=count; //handle the bodmass rule
        index=i;
    }
}
if(max==5)
{
    var v=sy[index+1];
    sy.splice(index,3,v);
    console.log(sy);
}
switch(sy[index])
{
    case '+':
        {
         a=parseFloat(st[index]);
         b=parseFloat(st[index+1]);
         let res=a+b;
         res=""+res;
         st.splice(index,2,res);
         sy.splice(index,1);
         break;
        }
    case '-':
            {
             a=parseFloat(st[index]);
             b=parseFloat(st[index+1]);
             let res=a-b;
             res=""+res;
             st.splice(index,2,res);
             sy.splice(index,1);
             break;
            }
     case '*':
        {
         a=parseFloat(st[index]);
         b=parseFloat(st[index+1]);
         let res=a*b;
         res=""+res;
         st.splice(index,2,res);
         sy.splice(index,1);
         break;
        }
    case '/':
            {
             a=parseFloat(st[index]);
             b=parseFloat(st[index+1]);
             let res=a/b;
             res=""+res;
             st.splice(index,2,res);
             sy.splice(index,1);
             break;
            }
     case '%':
            {
             a=parseFloat(st[index]);
             b=parseFloat(st[index+1]);
             let res=a%b;
             res=""+res;
             st.splice(index,2,res);
             sy.splice(index,1);
             break;
            }
     case '^':
                {
                 a=parseFloat(st[index]);
                 b=parseFloat(st[index+1]);
                 let res=Math.pow(a,b);
                 res=""+res;
                 st.splice(index,2,res);
                 sy.splice(index,1);
                 break;
                }
     case 's':
                {
                     a=parseFloat(st[index]);
                     let res=Math.sqrt(a);
                     res=""+res;
                     st.splice(index,1,res);
                     sy.splice(index,1);
                     break;
                    }
}
max=0;

}
console.log(st);
console.log(sy);
p.value=p.value+"="+st[0];


}
function delet()
{
  let g=document.getElementById("screen").value;
  let arr=g.slice(0,-1);
  p.value=arr;
  val=arr;
}
function precedence(op){
    if(op == '+'||op == '-')
    return 2;
    if(op == '*'||op == '/')
    return 3;
    if(op=='**' || op =='√')
    return 4;
    if(op=='(' || op ==')')
    return 5;

    return 1;
}
