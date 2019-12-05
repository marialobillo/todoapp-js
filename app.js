
(function(){
    // initial array of todos, reading from localStorage
    const todos = JSON.parse(localStorage.getItem('todos')) || [];

    document.getElementById('todoForm').addEventListener('submit', function(e){
        e.preventDefault();

        let textInput = document.getElementById('text-Input').value;
        
        // simple validation
        if(textInput.length <= 0){ return;}

        const todo = {
            title: textInput, 
            complete: false, 
            id: todos.length > 0 ? todos[todos.length -1].id + 1 : 1,
        }

        todos.push(todo);

        // localStorage
        localStorage.setItem('todos', JSON.stringify(todos));
        

        document.getElementById('todoForm').reset();
        showTodos();
    });


    function showTodos(){

        const todoList = document.getElementById('todoList');

        todoList.innerHTML = '';

        for(let i = 0; i < todos.length; i++){
           
            let title = todos[i].title;

            const todoDivEl = document.createElement('DIV');
            todoDivEl.className = 'todo';
            todoList.appendChild(todoDivEl);

            const todoTitleEl = document.createElement('P');
            todoTitleEl.className = 'todoTitle';
            todoTitleEl.setAttribute('id', todos[i].id);
            todoTitleEl.onclick = function(e){
                toggleTodo(todos[i].id);

                // localStorage
                localStorage.setItem('todos', JSON.stringify(todos));
                showTodos();
            };

            todos[i].complete ? todoTitleEl.style.textDecoration = 'line-through' : todoTitleEl.style.textDecoration = '';
            todoTitleEl.textContent = title;
            todoDivEl.appendChild(todoTitleEl);

            const deleteAnchorEl = document.createElement('A');
            deleteAnchorEl.className = 'todoDelete';
            deleteAnchorEl.onclick = function(e){
                deleteTodo(todos[i].id);
                
                // localStorage
                localStorage.setItem('todos', JSON.stringify(todos));
                showTodos();
            };

            deleteAnchorEl.textContent = 'X';
            todoDivEl.appendChild(deleteAnchorEl);
        }
    }

    function deleteTodo(id){
        for(let i = 0; i < todos.length; i++){
            if(todos[i].id == id){
                todos.splice(i, 1);
            }
        }
    }

    function toggleTodo(id){
        for(let i = 0; i < todos.length; i++){
            if(todos[i].id == id){
                todos[i].complete = !todos[i].complete;
            }
        }
    }

    showTodos();

})();
