const loginform=document.getElementById("signupform");
loginform.addEventListener('submit',(e)=>{
    e.preventDefault();

    const username=document.getElementById("username");
    const email=document.getElementById("email");
    const password=document.getElementById("password");
    const newuser={
        name:username.value,
        email:email.value,
        password:password.value
    }

const url= "http://localhost:3000/users";
fetch(url,{
    method:'GET',
})
.then(response=>response.json())
.then(data=>{
    console.log(data);
    const user=data.find((item)=> item.password==password.value && item.name==username.value);
    console.log(user);
    if(user)
    {
    let text="already signup.do you want to go login page";
    if(confirm(text)==true)
    {
        window.location.href='signin.html';

    }
    }

    else{
        alert("signup successfully");
        const url1= "http://localhost:3000/users";
    fetch(url1,{
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(newuser)
    })
    .then(response=>response.json())
    .then(data=>{
    console.log(data);
    window.location.href='signin.html';
    })

    .catch(error=>{
        console.log(error);
    })
    }
})

.catch(error=>{
    console.log(error);
})
})