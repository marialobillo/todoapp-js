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
        console.log(todos[i].title);
    }
}
