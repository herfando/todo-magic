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

  // Bikin span buat teks biar terpisah dari tombol delete
  const span = document.createElement("span");
  span.textContent = taskText;

  // Bikin tombol delete
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.onclick = function () {
    li.remove();
  };

  // Masukkan teks dan tombol ke dalam li
  li.appendChild(span);
  li.appendChild(deleteBtn);

  // Masukkan ke daftar
  list.appendChild(li);

  // Kosongkan input lagi
  input.value = "";
}

// Tekan Enter = tambah task
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
