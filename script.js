const taskform=document.querySelector('#taskform');
const taskinput=document.querySelector('#taskinput');
const addbtn=document.querySelector('.add');
const deletebtns=document.querySelectorAll('.delete');
const ol=document.querySelector('ol');
const list=document.querySelectorAll('li');

async function addTask(taskText){
    return new Promise(resolve=>{
        setTimeout(()=>{
            let newLI= document.createElement('li');
            // newLI.innerHTML=`${taskText} <button class="btn delete"><span class="material-symbols-outlined">close</span></button>`;
            // ol.append(newLI);
            newLI.textContent=taskText+" ";

            let delbtn=document.createElement('button');
            delbtn.className='btn delete';
            delbtn.innerHTML='<span class="material-symbols-outlined">close</span>';

            delbtn.addEventListener('click',()=>{
                newLI.remove();
                alert("Task deleted Successfully");
            })
            newLI.append(delbtn);
            ol.append(newLI);
            resolve();
        },1000)
    })
}
function deleteTask(list){
    ol.removeChild(list);
    alert("Task deleted Successfully");
}
addbtn.addEventListener('click',
    async function(e){
        e.preventDefault();
        try{
            await addTask(taskinput.value);
            taskinput.value="";
            alert("Task added Successfully :)");
        }
        catch{
            alert("Couldn't add task T-T");
        }
});
deletebtns.forEach( btn=>{
    btn.addEventListener('click',(e)=>{
    deleteTask(e.target.closest('li'));
    console.log(e.target.closest('li'));
    })
})