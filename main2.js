let todos = [];

function addTodo() {
    const input = document.getElementById('todoInput');
    const text = input.value.trim();
    
    if (text) {
        todos.push({
            id: Date.now(),
            text: text,
            completed: false
        });
        input.value = '';
        renderTodos();
    }
}

function toggleTodo(id) {
    todos = todos.map(todo => 
        todo.id === id ? {...todo, completed: !todo.completed} : todo
    );
    renderTodos();
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
}

function renderTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.innerHTML = `
            <input 
                type="checkbox" 
                ${todo.completed ? 'checked' : ''} 
                onchange="toggleTodo(${todo.id})"
            >
            <span class="${todo.completed ? 'completed' : ''}">${todo.text}</span>
            <button onclick="deleteTodo(${todo.id})">Delete</button>
        `;
        todoList.appendChild(li);
    });
}

// Allow adding todos with Enter key
document.getElementById('todoInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});