// Ambil elemen penting
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

// Fungsi untuk menambah task
function addTask() {
  const taskText = input.value.trim(); // ambil teks input
  if (taskText === "") return; // kalau kosong, jangan tambah

  const li = document.createElement("li");
  li.textContent = taskText;

  // Kalau klik item -> hapus
  li.addEventListener("click", () => {
    li.remove();
  });

  list.appendChild(li); // masukkan ke daftar
  input.value = ""; // kosongkan input
  input.focus(); // kembalikan fokus ke input
}

// Event klik tombol "Tambah"
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
