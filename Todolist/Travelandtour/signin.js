const username=document.getElementById('name');
const password=document.getElementById('password');
const sea=document.getElementById('search');

sea.addEventListener("search",()=>{
    const div1=document.getElementsByClassName('item');
    const div2=document.getElementsByClassName('item1');
    
    
    if(sea.value=='ok')
    {
        for(let j=0;j<div2.length;j++)
        {
            div2[j].style.display='none';
        }
    for(let i=0;i<div1.length;i++)
            div1[i].style.display='block';
    }
    else{
        for(let i=0;i<div1.length;i++)
        div1[i].style.display='none';

        for(let j=0;j<div2.length;j++)
        {
            div2[j].style.display='block';
        }
    }
})
function required()
{
    if(username.value==="" || password.value==="")
    {
        if(username.value=="")
             alert('username cannot be blank');
        else
        alert('password canot be blank');


    }
    else
    {
        window.location.href="home.html";
    }
}
//for password visibility
function show()
{
   const  eye=document.getElementById('i');
   const password=document.getElementById('password');
   if(eye.className=='fa-solid fa-eye')
   {
    password.type='password';
    eye.className='fa-solid fa-eye-slash';
    
   }
   else{
    password.type='text';
    eye.className='fa-solid fa-eye';
   }
   
    
}
//darkmode
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }