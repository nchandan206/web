

    // const username=document.getElementById("username");
    // const password=document.getElementById("password");
    //authentication for valid or invalid
function redirect()
{
const url= "http://localhost:3000/users";
fetch(url,{
    method:'GET',
})
.then(response=>response.json())
.then(data=>{

    console.log(data);
    const username=document.getElementById("username").value;
    const password=document.getElementById("password").value;

    const user=data.find((item)=> 
    item.password==password && item.name==username);
    console.log(user);
    if(user)
    {
    alert("authentication successful");
    const token=Date.now();
    console.log("token:",token);
    localStorage.setItem('token',token);
    window.location.href='home.html';
    }

    else{
        alert("you are not a valid user please signup");
        window.location.href='signup.html';

    }
})

.catch(error=>{
    console.log(error);
})
}