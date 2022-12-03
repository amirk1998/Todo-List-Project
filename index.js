const todoInput = document.querySelector('.todo-input');
const addTodoBtn = document.querySelector('.todo-button');
const todoList = document.querySelector('.todolist');
const filterOption = document.querySelector('.filter-todos');

//event listener
addTodoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', checkRemove);
filterOption.addEventListener('click', filterTodos);
document.addEventListener('DOMContentLoaded', getLocalTodos);

//function
function addTodo(e) {
  e.preventDefault();

  //get todo value
  //create new todo
  //add to DOM
  //reset input

  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  const newTodo = `<li>${todoInput.value}</li>
  <span><i class="fa-regular fa-square-check"></i></span>
  <span><i class="fa-solid fa-trash-can"></i></span>`;

  todoDiv.innerHTML = newTodo;
  // append to todo list
  todoList.appendChild(todoDiv);

  saveLocalTodos(todoInput.value);

  todoInput.value = '';
}

function checkRemove(e) {
  const classList = [...e.target.classList];
  // console.log(classList);
  const item = e.target;
  // const todoElement = item.parentElement.parentElement;
  // console.log(todoElement);
  if (classList[1] === 'fa-square-check') {
    const todoElement = item.parentElement.parentElement;
    todoElement.classList.toggle('completed');
  } else if (classList[1] === 'fa-trash-can') {
    const todoElement = item.parentElement.parentElement;
    removeLocalTodos(todoElement);
    todoElement.remove();
  }
}

function filterTodos(e) {
  //
  // console.log(e.target.value);
  // console.log(todoList.childNodes);
  const todoArray = [...todoList.childNodes];
  // console.log(todoArray);
  todoArray.forEach((element) => {
    switch (e.target.value) {
      case 'all':
        element.style.display = 'flex';
        break;
      case 'completed':
        if (element.classList.contains('completed')) {
          element.style.display = 'flex';
        } else {
          element.style.display = 'none';
        }
        break;

      case 'uncompleted':
        if (!element.classList.contains('completed')) {
          element.style.display = 'flex';
        } else {
          element.style.display = 'none';
        }
        break;
    }
  });
}

// Local
function saveLocalTodos(item) {
  // localStorage.getItem('todos')
  // localStorage.setItem('todos',JSON.stringify(todos))

  let savedTodos = localStorage.getItem('todos')
    ? JSON.parse(localStorage.getItem('todos'))
    : [];

  savedTodos.push(item);
  localStorage.setItem('todos', JSON.stringify(savedTodos));
}

function getLocalTodos() {
  let savedTodos = localStorage.getItem('todos')
    ? JSON.parse(localStorage.getItem('todos'))
    : [];
  savedTodos.forEach((element) => {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    const newTodo = `<li>${element}</li>
    <span><i class="fa-regular fa-square-check"></i></span>
    <span><i class="fa-solid fa-trash-can"></i></span>`;

    todoDiv.innerHTML = newTodo;
    // append to todo list
    todoList.appendChild(todoDiv);
  });
}

function removeLocalTodos(item) {
  // console.log(item.children[0].innerText);
  let savedTodos = localStorage.getItem('todos')
    ? JSON.parse(localStorage.getItem('todos'))
    : [];

  const filteredTodos = savedTodos.filter((element) => {
    return element !== item.children[0].innerText;
  });

  // Solved Problem => in filter,map,reduce methods , if we use {} in the callback function , we should use "return" to return the variable in these methods
  // but if we delete {} , we do NOT need to use "return".

  // OR
  //
  // const filteredTodos = savedTodos.filter(
  //   (element) => element !== item.children[0].innerText
  // );

  localStorage.setItem('todos', JSON.stringify(filteredTodos));
}
