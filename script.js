const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Fungsi menambahkan tugas
function addTask() {
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  // Nomor tugas otomatis
  const taskNumber = taskList.children.length + 1;
  li.innerHTML = `<span>${taskNumber}. ${taskText}</span>`;

  // Tombol hapus
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Hapus";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", function(e) {
    e.stopPropagation(); // supaya li tidak ikut toggle done
    li.remove();
    updateNumbers();
  });

  li.appendChild(deleteBtn);

  // Klik li: tandai selesai
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

// Event listener
addBtn.addEventListener("click", addTask);
input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") addTask();
});
