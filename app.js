// Tüm Elementleri seçmek

const form=document.querySelector("#todoAddForm");
const addInput=document.querySelector("#todoName");
const todoList=document.querySelector(".list-group");
const firstCardBody=document.querySelectorAll(".card-body")[0];
const secondCardBody=document.querySelectorAll(".card-body")[1];
const clearButton=document.querySelector("#clearButton");
let todos=[];

runEvents();

function runEvents(){
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",pageLoaded);
    secondCardBody.addEventListener("click",removeTodoToUI);
}

function pageLoaded(){
    checkTodosFromStorage();
    todos.forEach(function(todo){
        addToDoUI(todo);
    });
}
function removeTodoToUI(e){
    if(e.target.className === "fa fa-remove"){
        const todo = e.target.parentElement.parentElement;
        todo.remove();
        showAlert("warning",todo.textContent+" removed.");
    }

}
function addTodo(e){
    const inputText= addInput.value.trim();
    if(inputText==null || inputText==""){
         showAlert("alert","Please write to do element.");
    }else{
        //Arayüze ekleme
        addToDoUI(inputText);
        addToDoStorage(inputText);
        showAlert("success",inputText+" added.");
      
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

function addToDoStorage(newToDo){
   checkTodosFromStorage();
   todos.push(newToDo);
   localStorage.setItem("todos",JSON.stringify(todos));
}

function checkTodosFromStorage(){
    if(localStorage.getItem("todos")===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
}
{/* <div class="alert alert-warning" role="alert">
                        This is a warning alert—check it out!
                    </div> */}
function showAlert(type,message){
    const div=document.createElement("div");
    //div.className="alert alert-"+type;
    div.className=`alert alert-${type}`;
    div.textContent=message;

    firstCardBody.appendChild(div);
     setTimeout(function(){
        div.remove();
     },2500);
}