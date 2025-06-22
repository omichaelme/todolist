document.getElementById("add-task-btn").addEventListener("click", addTask);
document
  .getElementById("task-input")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTask();
    }
  }); 

function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskList = document.getElementById("task-list");

    // Create new task item
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");

    // Create task text node
    const taskTextNode = document.createElement("span");
    taskTextNode.textContent = taskText;

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", deleteTask);

    // Append task text and delete button to task item
    taskItem.appendChild(taskTextNode);
    taskItem.appendChild(deleteBtn);

    // Add the task item to the task list
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = "";
  }
}

function deleteTask(event) {
  const taskItem = event.target.parentElement;
  taskItem.remove();
}

document
  .getElementById("task-list")
  .addEventListener("click", function (event) {
    if (event.target && event.target.nodeName === "SPAN") {
      const taskItem = event.target.parentElement;
      taskItem.classList.toggle("completed");
    }
  });
