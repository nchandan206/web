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
        edit.addEventListener('click',()=>{
            handleedit(item.id);
        })

        delet.addEventListener('click',()=>{
            handledelet(item.id);
        })
   
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

function handleedit(id){
    const url= `http://localhost:3000/blocks/${id}`;
    const newtitle=window.prompt("enter thenew title");
    const newdescription=window.prompt("enter thenew description");

    // const newtitle=document.getElementById("title").value;
    // const newdescription=document.getElementById("des").value;
    // console.log(newtitle);
    // console.log(typeof newtitle);
    // if(newtitle=="")
    // {
    //     newtitle=item.title;
    // }
    // if(newdescription=="")
    // {
    //     newdescription=item.descriptio;
    // }
    const updateblog={
        title:newtitle,
        descriptio:newdescription
    }
    fetch(url,{
     method:'PUT',
     headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify(updateblog)
})
.then(response=>{
    if(response.ok)
    {
        alert(`blog with id ${id} updated`);
    }
    else{
        alert("error");
        // throw new Error("error");
    }
})
// .then(response=>response.json())
.catch(error=>{
    console.log(error);
})

}

function handledelet(id)
{
    const url= `http://localhost:3000/blocks/${id}`;
    fetch(url,{
        method:'DELETE',
    })

    .then(response=>{
        if(response.ok)
        {
            alert(`blog with id ${id} deleted`);
        }
        else{
            alert("error");
            // throw new Error("error");
        }
    })

}
