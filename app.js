document.getElementById('todoForm').addEventListener('submit', saveTodo);

// initial array of todos, reading from localStorage
const todos = JSON.parse(localStorage.getItem('todos')) || [];

function saveTodo(e){
    e.preventDefault();

    let title = document.getElementById('title').value;
    
    // simple validation
    if(title.length > 0){
        const todo = {
            title, 
            complete: false, 
            id: todos.length > 0 ? todos[todos.length -1].id + 1 : 1,
        }

        todos.push(todo);
        // localStorage
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    document.getElementById('todoForm').reset();
    showTodos();
}

function showTodos(){

    const todoList = document.getElementById('todoList');

    todoList.innerHTML = '';

    for(let i = 0; i < todos.length; i++){
        console.log(todos[i].title, todos[i].complete);
        let title = todos[i].title;
        todoList.innerHTML += `
            <div class="">
                <div class="">
                    
                    <p class="" 
                        onclick="toggleTodo(${todos[i].id})"
                        id="${todos[i].id}">

                        ${todos[i].complete ? title.strike() : title}
                       
                    </p>
                  
                    <a class="" onclick="deleteTodo(${todos[i].id})">X</a>
                </div>
            </div>
        `;
    }
}

function deleteTodo(id){
    for(let i = 0; i < todos.length; i++){
        if(todos[i].id == id){
            todos.splice(i, 1);
        }
    }
    // localStorage
    localStorage.setItem('todos', JSON.stringify(todos));
    showTodos();
}

function toggleTodo(id){
    for(let i = 0; i < todos.length; i++){
        if(todos[i].id == id){
            todos[i].complete = !todos[i].complete;
        }
    }
    showTodos();
}

showTodos();
