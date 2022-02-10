const inputFields = document.getElementById('inputField')
const inputButton = document.getElementById('submitButton');
const todoList = document.getElementById('todo-list');

inputButton.addEventListener('click',function(e){
    e.preventDefault();
    // create a todo div element with class todo
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo');
    
    // Create LI element with todo-item class
    const newTodoLi = document.createElement('li');
    newTodoLi.classList.add("todo-item")
    todoDiv.appendChild(newTodoLi)
    newTodoLi.innerText = inputFields.value;
    inputFields.value = '';

    // Check Button 

    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    completeButton.classList.add('complete-btn');
    todoDiv.appendChild(completeButton) 
    
    // Delete Button 

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('remove-btn');
    todoDiv.appendChild(trashButton)   
    // Apped To List 
    todoList.appendChild(todoDiv)
})

// Delete The List 
todoList.addEventListener('click',function(e){
    const delItem = e.target;
   if(delItem.classList[0] === 'remove-btn'){
       const todo = delItem.parentElement;
       todo.remove()
   }  

  



})


