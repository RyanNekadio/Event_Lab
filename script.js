const buttonAction = document.querySelector('#enter');
const todoList = document.querySelector('#list');

buttonAction.addEventListener('click', (event) => {
    event.preventDefault();
    const listItem = document.createElement('li');
    const input = document.querySelector('#new-todo');
    listItem.innerText = input.value;
    todoList.appendChild(listItem);
    console.log(listItem);
});

console.log(todoList);


