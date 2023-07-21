const url="http://localhost:3000/tasks";
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
    const container=document.getElementById('p');
    data.map(item=>{
        const description=document.createElement('span');
        description.innerHTML="description:"+item.task+"  ";
        const edit=document.createElement('i');
        const delet=document.createElement('i');

    
        edit.innerHTML="<b>"+"edit"+"</b>"+"  ";
        delet.innerHTML="<b>"+"delet"+"</b>"+"<br><br>";
        edit.addEventListener('click',()=>{
            handleedit(item.id);
        })

        delet.addEventListener('click',()=>{
            handledelet(item.id);
        })
        description.append(edit,delet)
        container.append(description);



    })

}

const url1="http://localhost:3000/images";
fetch(url1)
.then(response=>response.json())
.then(data=>{
    console.log(data);
    display1(data);
})

.catch(error=>{
    console.log(error);
})
function display1(data)
{
    const container1=document.getElementById('image');
    data.map(item1=>{
        let i=0;
        while(i<item1.image.length)
        {
        const img=document.createElement('img');
        img.src=item1.image[i];
        img.alt='image';
        container1.append(img);
        i++;
        }
        
    })
}

function add()
{
    var input=document.getElementById("task").value;

    if(input=="")
    {
        alert("please enter task");
    }
    else{

    const url1= "http://localhost:3000/tasks";
    const newtask={
        task:input
    }
    fetch(url1,{
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(newtask)
    })
    .then(response=>response.json())
    .then(data=>{
    console.log(data);
    })

    .catch(error=>{
        console.log(error);
    })
}
 }




function handleedit(id){
    const url= `http://localhost:3000/tasks/${id}`;
    const newtask=window.prompt("enter task");

    const updateblog={
        task:newtask
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
.catch(error=>{
    console.log(error);
})

}

function handledelet(id)
{
    const url= `http://localhost:3000/tasks/${id}`;
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
const speed=100;
const  text="CHANDAN NAYAK";
let i=0;

function typing()
{
    if(i<text.length)
    {
        document.getElementById("para").innerHTML+=text.charAt(i);
        setTimeout(typing,speed);
        i++;
    }
}

function darkmod()
{
    
    const el=document.body;
    el.classList.toggle("dark-mode");

}

function add1()
{
const url2= "http://localhost:3000/images";
const input1=document.getElementById('input1').value;
console.log(typeof input1);
console.log(input1);

const newtask={
    image:[input1]
}

fetch(url2,{
    method:'post',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify(newtask)
})
.then(response=>response.json())
.then(data=>{
console.log(data);
})

.catch(error=>{
    console.log(error);
})
}
