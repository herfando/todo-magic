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

// Event untuk keyboard di input
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    // Enter -> tambah task
    addTask();
  } else if ((event.key === "Backspace" || event.key === "Delete") && input.value === "") {
    // Backspace/Delete saat input kosong -> hapus task terakhir
    const lastTask = list.lastElementChild;
    if (lastTask) {
      lastTask.remove();
    }
  }
});
