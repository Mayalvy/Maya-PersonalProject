async function getUser() {
    try {
        const response = await fetch('/user/getUser');
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        if (jsonResponse.user) {
            helloUser(jsonResponse.user.name, document.getElementById('userName'));
        } else {
            window.location.href = './../login/login.html';
        }
    } catch (error) {
        console.error(error);
    }
}

getUser();

function helloUser(userName, element) {
    try {
        if (!element) {
            throw new Error('Element not found');
        }
        element.innerHTML = `Hello ${userName}`;
    } catch (error) {
        console.error(error);
    }
}

function renderTodo(todos) {
    const todoContainer = document.getElementById('todosContainer');
    if (!todoContainer) {
        console.error("todosContainer not found");
        return;
    }
    todoContainer.innerHTML = '';
    if (todos.length === 0) {
        todoContainer.innerHTML = '<p>No todos to display</p>';
        return;
    }
    todos.forEach(todo => {
        const todoElement = document.createElement('div');
        todoElement.classList.add('todo');

        if (todo.status === 'complete') {
            todoElement.classList.add('complete');
        } else {
            todoElement.classList.add('incomplete');
        }

        todoElement.innerHTML = `
            <div class="todo-header">
                <h3 class="todo-title">${todo.title}</h3>
                <span class="todo-status ${todo.status}">
                    ${todo.status === 'complete' ? '✔️ Complete' : '❌ Incomplete'}
                </span>
            </div>
            <p class="todo-description">${todo.description || 'No description provided.'}</p>
            <p class="todo-due-date">Due: ${new Date(todo.dueDate).toLocaleDateString()}</p>
        `;

        todoContainer.appendChild(todoElement);
    });
}

const newTodoForm = document.getElementById('newTodoForm');
if (newTodoForm) {
    newTodoForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        const titleElement = document.getElementById('title');
        const descriptionElement = document.getElementById('description');

        if (!titleElement || !descriptionElement) {
            console.error("Input elements not found");
            return;
        }


        try {
            const response = await fetch('http://localhost:3000/todo/addTodo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, description }),
            });

            const result = await response.json();
            if (result.ok) {
    
                loadtodos(); 
            } else {
                alert('Failed to create todo');
            }
        } catch (error) {
            console.error('Error creating todo:', error);
        }
    });
} else {
    console.error('newTodoForm element not found');
}

async function loadtodos() {
    try {
        const response = await fetch('http://localhost:3000/todo');
        if (!response.ok) throw new Error('Failed to load todos');
        const todos = await response.json();
        renderTodo(todos);
    } catch (error) {
        console.error('Error loading todos:', error);
    }
}

getUser();
loadtodos();
