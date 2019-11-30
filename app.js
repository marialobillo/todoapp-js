
class TodoApp{
    constructor(){
        this.todos = []
    }

    addTodo(todoText){
        const todo = {
            id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
            text: todoText, 
            complete: false,
        }

        // adding the new todo to the todo array
        this.todos.push(todo);
    }

    deleteTodo(id){
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    completeTodo(){
        this.todos = this.todos.map(todo => {
            if(todo.id === id){
                return {
                    id: todo.id, 
                    text: todo.text,
                    complete: !todo.complete
                }
            } else {
                return todo
            }
        })
    }
}