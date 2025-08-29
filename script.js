const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

function addTask() {
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;
  list.appendChild(li);

  input.value = "";
}

// Event keyboard untuk input
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); // biar tidak submit form default
    addTask();
  } 
  else if ((event.key === "Backspace" || event.key === "Delete") && input.value === "") {
    event.preventDefault();
    const lastTask = list.lastElementChild;
    if (lastTask) {
      lastTask.remove();
    }
  }
});
