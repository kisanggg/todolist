var todos = [
  "install node js",
  "install Angular CLI",
  "create new app",
  "develop app",
  "deploy app",
];
function newElement() {
  var todoinput = document.getElementById("myTodo").value.trim();
  if (todoinput === "") return;
  todos.push(todoinput);
  console.log(todos);
  document.getElementById("myTodo").value = "";
  renderTodos();
}

function renderTodos() {
  var todoList = document.getElementById("myUl");
  todoList.innerHTML = "";

  todos.map(function (todo) {
    var newTododiv = document.createElement("div");
    newTododiv.className = "myElement";
    newTododiv.id = "element";

    var todoDiv = document.createElement("div");
    todoDiv.className = "myElement";

    var todoInput = document.createElement("input");
    todoInput.type = "text";
    todoInput.className = "text";
    todoInput.value = todo;
    todoInput.readOnly = true;

    var editButton = document.createElement("button");
    editButton.type = "button";
    editButton.className = "button";
    editButton.innerText = "edit";
    editButton.onclick = function () {
      todoInput.readOnly = false;
      todoInput.focus();
    };

    var deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete";
    deleteButton.innerText = "remove";
    deleteButton.onclick = function () {
      todos = todos.filter(function (item) {
        return item !== todo;
      });

      renderTodos();
    };
    todoDiv.appendChild(todoInput);
    todoDiv.appendChild(deleteButton);
    todoDiv.appendChild(editButton);
    todoList.appendChild(todoDiv);
  });
}

function newDelete() {
  const elem = document.getElementById("element");
  elem.remove();
}
