const url= "http://localhost:3000/users";

const newuser={
    name:"kuna nayak",
    email:"kuna@gmail.com"
}
fetch(url,{
    method:'post',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify(newuser)
})
.then(response=>response.json())
.then(data=>{
    console.log(data);
    // display(data);
})

.catch(error=>{
    console.log(error);
})