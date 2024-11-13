

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
       
       
    }
    catch (error) {
        console.error(error);
    }
}

getUser();

function helloUser(userName:string, element:HTMLElement|null){
    try {
        if(!element){
            throw new Error('Element not found');
        }
        element.innerHTML = `Hello ${userName}`;
    } catch (error) {
        console.error(error);
        
    }
    
}

function renderTodo(todos) {
    const todoContainer = document.getElementById('todoContainer');
    if (!todoContainer) {
        console.error("todoContainer not found");
        return;
    }
    todoContainer.innerHTML = '';
    if (todos.length === 0) {
        todoContainer.innerHTML = '<p>No posts to display</p>';
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