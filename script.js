const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Fungsi menambahkan tugas
function addTask(taskText = null) {
  const text = taskText !== null ? taskText : input.value.trim();
  if (text === "") return;

  const li = document.createElement("li");

  // Nomor otomatis
  const taskNumber = taskList.children.length + 1;
  li.innerHTML = `<span>${taskNumber}. ${text}</span>`;

  // Tombol hapus
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Hapus";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    li.remove();
    updateNumbers();
  });

  li.appendChild(deleteBtn);

  // Klik li → tandai selesai
  li.addEventListener("click", function() {
    li.classList.toggle("done");
  });

  taskList.appendChild(li);
  input.value = "";
}

// Update nomor setelah hapus
function updateNumbers() {
  Array.from(taskList.children).forEach((li, index) => {
    li.querySelector("span").textContent = `${index + 1}. ${li.querySelector("span").textContent.split(". ")[1]}`;
  });
}

// Event listener tombol tambah
addBtn.addEventListener("click", addTask);

// Event listener keyboard
input.addEventListener("keydown", function(e) {
  // Enter → tambah tugas
  if (e.key === "Enter") {
    e.preventDefault(); // supaya tidak submit form
    addTask();
  }

  // Backspace atau Delete di input kosong → hapus tugas terakhir
  if ((e.key === "Backspace" || e.key === "Delete") && input.value === "") {
    const lastTask = taskList.lastElementChild;
    if (lastTask) {
      lastTask.remove();
      updateNumbers();
    }
  }
});
