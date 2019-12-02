document.getElementById('todoForm').addEventListener('submit', saveTodo);

// initial array of todos
const todos = [];

function saveTodo(e){
    e.preventDefault();

    let title = document.getElementById('title').value;
    
    // validation
    if(title.length > 0){
        const todo = {
            title, 
            complete: false, 
            id: todos.length > 0 ? todos[todos.length -1].id + 1 : 1,
        }

        todos.push(todo);
    }

    document.getElementById('todoForm').reset();
    showTodos();
}

function showTodos(){

    const todoList = document.getElementById('todoList');

    todoList.innerHTML = '';

    for(let i = 0; i < todos.length; i++){
        console.log(todos[i].title, todos[i].complete);
        todoList.innerHTML += `
            <div class="">
                <div class="">
                    
                    <p class="" 
                        onclick="toggleTodo(${todos[i].id})"
                        id="${todos[i].id}">

                        ${todos[i].title}
                       
                    </p>
                  
                    <a class="" onclick="deleteTodo(${todos[i].id})">X</a>
                </div>
            </div>
        `;
    }
}

function deleteTodo(){

}

function toggleTodo(){

}

showTodos();
