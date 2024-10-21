document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-text');
    const todoList = document.getElementById('todo-list');
    const addTodoButton = document.getElementById('add-todo');

    
    addTodoButton.addEventListener('click', () => {
        const todoText = todoInput.value.trim();
        if (todoText) {
            const todoItem = document.createElement('li');
            todoItem.innerHTML = `
                <span class="todo-text">${todoText}</span>
                <div>
                    <button class="mark-complete">Complete</button>
                    <button class="delete">Delete</button>
                </div>
            `;
            todoList.appendChild(todoItem);
            todoInput.value = '';

        
            todoItem.querySelector('.mark-complete').addEventListener('click', () => {
                todoItem.classList.toggle('completed');
            });

            
            todoItem.querySelector('.delete').addEventListener('click', () => {
                todoList.removeChild(todoItem);
            });
        }
    });
});
