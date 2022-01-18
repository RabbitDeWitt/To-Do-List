const ul = document.querySelector('ul');
const addTaskBtn = document.getElementById('addTask');
let itemId;
let li;
let item;

addTaskBtn.addEventListener('click', addTask);

function addTask(){
    itemId = ul.childElementCount;
    item = document.getElementById('task');
    if(item.value !==""){
        li = createItemEl(itemId, item.value);   
        item.value = "";
    }

}

function removeTask(itemId){
    for(i = 0; i < ul.children.length; i++){
        if(ul.children[i].getAttribute('index') == itemId){
            ul.children[i].remove();
        }
    }
}

function createItemEl(itemId, itemValue){
    li = document.createElement('li');
    li.setAttribute('index', itemId);
    li.appendChild(document.createTextNode(itemValue));
    li.appendChild(createRemoveTaskBtn(itemId));

    li.onclick = function(){
        this.classList.toggle('completed');
    }

    ul.appendChild(li);
}

function createRemoveTaskBtn(itemId){
    let btn = document.createElement('button');
    btn.setAttribute('onclick', `removeTask(${itemId})`)
    btn.innerHTML = `<i class="far fa-trash-alt">`;
    return btn;
}