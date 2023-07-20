// else.preventDefault();
const loginform=document.getElementById("login-form");
loginform.addEventListener('submit',(e)=>{
    e.preventDefault();
    let a=0;

    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
const url= "http://localhost:3000/users";
fetch(url)
.then(response=>response.json())
.then(data=>{
    console.log(data);
    display(data);
})

.catch(error=>{
    console.log(error);
})
 
//fot traversing the database

// function display(data)
// {
//     data.map(item=> {
//         console.log(item.password);
//         if(item.name==username && item.password==password)
//         {
//             a++;
//             alert("authentication successful");
//             const token=Date.now();
//                 console.log("token:",token);
//                 localStorage.setItem('token',token);
//                 window.location.href='home.html';
            
//         }
       
//     })
//     if(a==0)
//     {
//         alert("authentication error");
//     }
// }
    // const username=document.getElementById('username').value;
    // const password=document.getElementById('password').value;
    // if(username==='chandan' && password=="chandan123")
    // {
    //     const token=Date.now();
    //     console.log("token:",token);
    //     localStorage.setItem('token',token);
    //     window.location.href='home.html';
    // }
    // else{
    //     console.error("invalid");
    // }

    // by the help filter we can give condition criteria to the return statement according to which it can reduce the array Element;

    // function display(data)
    // {


    //     let arr=data.filter(function(item) {
    //         return item.password==password && item.name==username;
    //     });
    //     console.log(arr);
    //     if(arr.length!=0)
    //      {
    //         // console.log(item.password);
    //                 // if(item.name==username && item.password==password)
    //                 // {

    //                     alert("authentication successful");
    //                     const token=Date.now();
    //                         console.log("token:",token);
    //                         localStorage.setItem('token',token);
    //                         window.location.href='home.html';
                        
    //                 // }
    //                 // else{
    //                 //     alert("authentication error");

    //                 // }
    //     }
    //     else
    //     {
    //     alert("authentication error");
    //     }
    // }


// by the help of map we can update the value of arr but not changing  the array length 
//     function display(data)
// {
//    let arr=data.map(function(item){
//     return item.password==password && item.name==username;

//     });
//     console.log(arr);
//     for(let i=0;i<arr.length;i++)
//     {
//         if(arr[i]==true)
//     {
//             a++;
//             alert("authentication successful");
//             const token=Date.now();
//                 console.log("token:",token);
//                 localStorage.setItem('token',token);
//                 window.location.href='home.html';
//     }
//     }
//     if(a==0)
//     {
//         alert("authentication error");
//     }
// }

function display(data)
{
    let a=0;
    let arr=data.find(function(item){
        return item.password==password && item.name==username;
    } );
    if(arr)
    {
        alert("authentication successful");
        a++;
                        const token=Date.now();
                        console.log("token:",token);
                        localStorage.setItem('token',token);
                        window.location.href='home.html';
    }
    else
        {
        alert("authentication error");
        }
}


})