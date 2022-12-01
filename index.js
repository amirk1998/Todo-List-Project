const todoInput = document.querySelector('.todo-input');
const addTodoBtn = document.querySelector('.todo-button');
const todoList = document.querySelector('.todolist');

//event listener
addTodoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', checkRemove);

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
  todoInput.value = '';
}

function checkRemove(e) {
  const classList = [...e.target.classList];
  // console.log(classList);
  const item = e.target;
  const todoElement = item.parentElement.parentElement;
  // console.log(todoElement);
  if (classList[1] === 'fa-square-check') {
    todoElement.classList.toggle('completed');
  } else if (classList[1] === 'fa-trash-can') {
    todoElement.remove();
  }
}
