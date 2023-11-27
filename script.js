const buttonAction = document.querySelector('#enter');
const todoList = document.querySelector('#list');
const deleteAction = document.querySelector('#delete');
const dateAction = document.querySelector('#show-date');


buttonAction.addEventListener('click', (event) => {
    event.preventDefault();
    const listItem = document.createElement('li');
    const input = document.querySelector('#new-todo');
    listItem.innerText = input.value;
    todoList.appendChild(listItem);
    console.log(listItem);
    console.log(todoList);
});

deleteAction.addEventListener('click', (event) =>{
    event.preventDefault();
    todoList.removeChild(todoList.lastChild);
    console.log(todoList);
});

dateAction.addEventListener('click', (event) => {
    event.preventDefault();
    const currentDate = new Date();
    const currentDateTime = currentDate.toLocaleString();
    console.log(currentDate);
});





