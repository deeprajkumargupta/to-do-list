const taskform=document.querySelector('#taskform');
const taskinput=document.querySelector('#taskinput');
const addbtn=document.querySelector('.add');
const deletebtns=document.querySelectorAll('.delete');
const ol=document.querySelector('ol');
const list=document.querySelectorAll('li');
const themeboxes=document.querySelectorAll('.theme-box')

function addTask(taskText){
    if (!taskText.trim()) {
        alert("Task cannot be empty!");
        return;
    }
    let newLI= document.createElement('li');
    // newLI.innerHTML=`${taskText} <button class="btn delete"><span class="material-symbols-outlined">close</span></button>`;
    // ol.append(newLI);
    newLI.textContent=taskText+" ";

    let delbtn=document.createElement('button');
    delbtn.className='btn delete';
    delbtn.innerHTML='<span class="material-symbols-outlined">close</span>';

    delbtn.addEventListener('click',()=>{
        newLI.remove();
    })
    newLI.append(delbtn);
    ol.append(newLI);
    alert("Task added Successfully :)");
}

function deleteTask(list){
    ol.removeChild(list);
}
addbtn.addEventListener('click',
    function(e){
        e.preventDefault();
        addTask(taskinput.value);
        taskinput.value="";
});
deletebtns.forEach( btn=>{
    btn.addEventListener('click',(e)=>{
    deleteTask(e.target.closest('li'));
    console.log(e.target.closest('li'));
    })
})
themeboxes.forEach(box=>{
    box.addEventListener('click',(e)=>{
    let theme = box.getAttribute("data-theme");
    console.log(e.target.getAttribute("data-theme"));
    document.body.className = "";

    if (theme !== "default") {
      document.body.classList.add(theme);
    }
    });
});