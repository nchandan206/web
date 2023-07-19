const url="http://localhost:3000/blocks";
fetch(url)
.then(response=>response.json())
.then(data=>{
    console.log(data);
    display(data);
})

.catch(error=>{
    console.log(error);
})


function display(data){
    const container=document.getElementById('div');
    data.map(item=>{
        const title=document.createElement('h2');
        const description=document.createElement('p');
        title.innerText="title:"+item.title;
        description.innerText="description:"+item.descriptio;
        const edit=document.createElement('button');
        const delet=document.createElement('button');
    
        edit.innerText="edit";
        delet.innerText="delet";
        container.append(title,description,edit,delet);
   


    })

}

function add()
{
    const title=document.getElementById("title").value;
    const description=document.getElementById("des").value;

    if(title!="" && description!=""){

    const newblogs={
        title:title,
        descriptio:description
    }
    const url= "http://localhost:3000/blocks";
    fetch(url,{
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(newblogs)
    })
    .then(response=>response.json()) 
    .catch(error=>{
        console.log(error);
    })
    alert("added successfuly");
}

}