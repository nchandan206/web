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


function display(data)
{
    const container=document.getElementById("div");
    data.map(item=> {
        const el=document.createElement('p');
        if(item.name=="chandan nayak")
        {
            alert("we can use it");
        }
        el.textContent=`name: ${item.name},email: ${item.email},id: ${item.id}`;
        container.appendChild(el);
    })
}

function rule()
{
    var a=document.getElementById("name").value;
    const container=document.getElementById("div");
    data.map(item=> {
        if(item.name==a)
        {
            alert("successful");
            
        }
    })
    

}