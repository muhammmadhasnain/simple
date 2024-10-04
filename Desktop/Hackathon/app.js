let form = document.querySelector("#submit")
let input = document.querySelector("#inputTodo")
let todoList = document.querySelector("ul")
let button = document.querySelector("#clear")


var todosArray = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []

localStorage.setItem('todos', JSON.stringify(todosArray));

var storage = JSON.parse(localStorage.getItem('todos'))

form.addEventListener("submit" , (e) => {
  e.preventDefault()

todosArray.push(input.value)
localStorage.setItem('todos',JSON.stringify(todosArray))
addTodo(input.value)
input.value = ""
  
})



const  addTodo = (text) => {
    let todo = document.createElement("li")
    todo.classList.add = "todos"
    todo.textContent = text.length > 0 ? text : "empty"
        todoList.appendChild(todo)
}

for (var i =0; i <  storage.length; i++){
    addTodo(storage[i])
 }

 button.addEventListener('click', function () {

    //clear the 'localStorage' with the 'clear()' method
    localStorage.clear()
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
});

console.log(localStorage)

console.log(storage)