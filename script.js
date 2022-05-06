const todoInput = document.querySelector('#todo-input')

const todos = [];

todoInput.addEventListener('keyup', (e)=>{
    if(e.key==="Enter" || e.keyCode===13){
        todos.push(e.target.value);
        newTodo(e.target.value)
        todoInput.value = '';
    }
})

function newTodo(value){
    const todosContainer = document.querySelector('.todos')
    const todo = document.createElement('div');
    const todotext = document.createElement('p');
    const todoCheckBox = document.createElement('input')
    todoCheckBox.setAttribute("id",'checkbox')
    const todoCheckBoxLabel = document.createElement('label');
    const todoCross = document.createElement('span');

    todotext.textContent = value;
    todoCheckBox.type = 'checkbox';
    todoCheckBox.name = 'checkbox';
    todoCheckBoxLabel.addEventListener('click', (e)=>{
        if(todoCheckBox.checked){
            todoCheckBox.checked = false;
            todotext.style.textDecoration = 'none';
            todoCheckBoxLabel.classList.remove('activate');
        }else{
            todoCheckBox.checked = true;
            todotext.style.textDecoration('line-trough');
            todoCheckBoxLabel.classList.add('active');
        }
    });

    todoCross.textContent = 'X';
    todoCross.addEventListener('click', (e)=>{
        e.target.parentElement.remove();
    });
    
    todo.classList.add('todo');
    todoCheckBoxLabel.classList.add('circle');
    todoCross.classList.add('cross');

    todo.appendChild(todoCheckBox);
    todo.appendChild(todoCheckBoxLabel);
    todo.appendChild(todotext);
    todo.appendChild(todoCross);

    todosContainer.appendChild(todo)
}



//Change the dark/light mode

function changetheme(){
    document.body.classList.toggle('light');
}