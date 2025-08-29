const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");
const addBtn = document.getElementById("addBtn");

function addTask() {
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // Klik task -> toggle selesai
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  list.appendChild(li);
  input.value = "";
}

// Tombol Add
addBtn.addEventListener("click", addTask);

// Event keyboard di input
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    // Enter -> tambah task
    addTask();
  } else if (
    (event.key === "Backspace" || event.key === "Delete") &&
    input.value === ""
  ) {
    // Backspace/Delete saat input kosong -> hapus task terakhir
    const lastTask = list.lastElementChild;
    if (lastTask) {
      lastTask.remove();
    }
  }
});
