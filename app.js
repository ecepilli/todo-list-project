// Tüm Elementleri seçmek

const form=document.querySelector("#todoAddForm");
const addInput=document.querySelector("#todoName");
const todoList=document.querySelector(".list-group");
const firstCardBody=document.querySelectorAll(".list-group")[0];
const secondCardBody=document.querySelectorAll(".list-group")[1];
const clearButton=document.querySelector("#clearButton");

runEvents();

function runEvents(){
    form.addEventListener("submit",addTodo);
}

function addTodo(e){
    const inputText= addInput.value.trim();
    if(inputText==null || inputText==""){
        alert("Please write valide value...");
    }else{
        //Arayüze ekleme
        addToDoUI(inputText);

    }

//Storage ekleme
    e.preventDefault();
}

function addToDoUI(newToDo){
//     <li class="list-group-item d-flex justify-content-between">Todo 2
//     <a href="#" class="delete-item">
//         <i class="fa fa-remove"></i>
//     </a>
// </li>
const li=document.createElement("li");
li.className="list-group-item d-flex justify-content-between";
li.textContent=newToDo;

const a=document.createElement("a");
a.href="#";
a.className="delete-item";

const i=document.createElement("i");
i.className="fa fa-remove";

a.appendChild(i);
li.append(a);
todoList.appendChild(li);

addInput.value="";
}