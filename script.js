const buttonAction = document.querySelector('#enter');
const todoList = document.querySelector('#list');
const deleteAction = document.querySelector('#delete');
const dateAction = document.querySelector('#show-date');
const formAction = document.querySelector('#todo-form');


formAction.addEventListener('click', (event) =>{
    event.preventDefault();
    const listItem = document.createElement('li'); // created list item
    const input = document.querySelector('#new-todo'); //created input
    listItem.innerText = input.value; //made list item equal to user input
    todoList.appendChild(listItem); //add this item to the todo list


    const deleteButton = document.createElement('button'); //create a delete button
    deleteButton.innerText = 'delete'; //we wrote the delete button name
    listItem.appendChild(deleteButton); //add the delete button to the list item


    deleteButton.addEventListener('click', () =>{
    todoList.removeChild(listItem); //function to delete the item
    });
});


    dateAction.addEventListener('click', (event) => {
    event.preventDefault();
    const currentDate = new Date();
    const currentDateTime = currentDate.toLocaleString();
    console.log(currentDate);
    });






