// Ambil input dan daftar
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

function addTask() {
  // Ambil teks dari input
  const taskText = input.value.trim();

  // Kalau kosong jangan dimasukin
  if (taskText === "") {
    alert("Tugasnya harus diisi dulu!");
    return;
  }

  // Bikin item list baru
  const li = document.createElement("li");
  li.textContent = taskText;

  // Kalau diklik, hapus tugas
  li.onclick = function() {
    li.remove();
  };

  // Masukkan ke daftar
  list.appendChild(li);

  // Kosongkan input lagi
  input.value = "";
}

// ➝ Tambahkan event listener untuk tombol Enter
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});
