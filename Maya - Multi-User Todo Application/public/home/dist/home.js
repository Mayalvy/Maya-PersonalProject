var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function getUser() {
    return __awaiter(this, void 0, void 0, function () {
        var response, jsonResponse, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('/user/getUser')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    jsonResponse = _a.sent();
                    console.log(jsonResponse);
                    if (jsonResponse.user) {
                        helloUser(jsonResponse.user.name, document.getElementById('userName'));
                    }
                    else {
                        window.location.href = './../login/login.html';
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
getUser();
function helloUser(userName, element) {
    try {
        if (!element) {
            throw new Error('Element not found');
        }
        element.innerHTML = "Hello " + userName;
    }
    catch (error) {
        console.error(error);
    }
}
function renderTodo(todos) {
    var todoContainer = document.getElementById('todosContainer');
    if (!todoContainer) {
        console.error("todosContainer not found");
        return;
    }
    todoContainer.innerHTML = '';
    if (todos.length === 0) {
        todoContainer.innerHTML = '<p>No todos to display</p>';
        return;
    }
    todos.forEach(function (todo) {
        var todoElement = document.createElement('div');
        todoElement.classList.add('todo');
        if (todo.status === 'complete') {
            todoElement.classList.add('complete');
        }
        else {
            todoElement.classList.add('incomplete');
        }
        todoElement.innerHTML = "\n            <div class=\"todo-header\">\n                <h3 class=\"todo-title\">" + todo.title + "</h3>\n                <span class=\"todo-status " + todo.status + "\">\n                    " + (todo.status === 'complete' ? '✔️ Complete' : '❌ Incomplete') + "\n                </span>\n            </div>\n            <p class=\"todo-description\">" + (todo.description || 'No description provided.') + "</p>\n            <p class=\"todo-due-date\">Due: " + new Date(todo.dueDate).toLocaleDateString() + "</p>\n        ";
        todoContainer.appendChild(todoElement);
    });
}
var newTodoForm = document.getElementById('newTodoForm');
if (newTodoForm) {
    newTodoForm.addEventListener('submit', function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var titleElement, descriptionElement, response, result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.preventDefault();
                        titleElement = document.getElementById('title');
                        descriptionElement = document.getElementById('description');
                        if (!titleElement || !descriptionElement) {
                            console.error("Input elements not found");
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch('http://localhost:3000/todo/addTodo', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ title: title, description: description })
                            })];
                    case 2:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 3:
                        result = _a.sent();
                        if (result.ok) {
                            loadtodos();
                        }
                        else {
                            alert('Failed to create todo');
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        console.error('Error creating todo:', error_2);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    });
}
else {
    console.error('newTodoForm element not found');
}
function loadtodos() {
    return __awaiter(this, void 0, void 0, function () {
        var response, todos, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('http://localhost:3000/todo')];
                case 1:
                    response = _a.sent();
                    if (!response.ok)
                        throw new Error('Failed to load todos');
                    return [4 /*yield*/, response.json()];
                case 2:
                    todos = _a.sent();
                    renderTodo(todos);
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.error('Error loading todos:', error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
getUser();
loadtodos();
