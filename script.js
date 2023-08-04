const addTaskbtn = document.getElementById("add--task");
const ongoing = document.getElementById("ongoing");
const completed = document.getElementById("completed");

loadTodo();

 //Event-Listeners
addTaskbtn.addEventListener("click", Task);
ongoing.addEventListener("click", function(event) {
    if (event.target.classList.contains("task--status")) {
      const list = event.target.parentElement;
      list.remove();
    }
  });



// functions
function Task(){
    let taskvalue = document.getElementById("inputtext").value;
    if(taskvalue === ""){
        alert("Blank tasks aren't allowed");
        return;
    }
    const taskcomp = document.createElement('button');
    const taskdiv = document.createElement('div');
    const task = document.createElement('p');

    taskcomp.innerHTML="DELETE"
    task.innerHTML= taskvalue;
    taskdiv.classList.add("task");
    task.classList.add("task--desc");
    taskcomp.classList.add("task--status");

    taskdiv.appendChild(task);
    taskdiv.appendChild(taskcomp);
    ongoing.appendChild(taskdiv);
    
    statusbtn.appendChild(taskdiv);
    deletebtn.appendChild(taskdiv);


    document.getElementById("inputtext").value="";
    saveTodoList();
}


function saveTodoList(){
    const tasks = Array.from(document.querySelectorAll('.task--desc'));
    const todoList = tasks.map(task => task.innerHTML);
    localStorage.setItem('todoList', todoList.join(';'));
}

function loadTodo() {
   const savedTodoList = localStorage.getItem('todoList');
    if (savedTodoList) {
        const todoList = savedTodoList.split(';');

        todoList.forEach(taskText => {
            const taskdiv = document.createElement('div');
            const task = document.createElement('p');
            const taskcomp = createButton("DONE!");
            const taskdel = createButton("DELETE");

            task.innerHTML = taskText;
            taskdiv.classList.add("task");
            task.classList.add("task--desc");

            taskdiv.appendChild(task);
            taskdiv.appendChild(taskcomp);
            taskdiv.appendChild(taskdel);
            ongoing.appendChild(taskdiv);

    })
    }
}




/* <div class="task">
    <p class="task--desc">Brew some coffee for myself</p>
    <input type="checkbox" class="task--status">
    </div> */