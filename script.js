const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

function addTask() {
  const taskText = input.value.trim();
  if (taskText === "") {
    alert("Tugasnya harus diisi dulu!");
    return;
  }

  const li = document.createElement("li");
  li.setAttribute("tabindex", "0");

  const span = document.createElement("span");
  span.textContent = taskText;
  span.style.cursor = "pointer";

  // Klik teks untuk pilih
  span.addEventListener("click", (e) => {
    e.stopPropagation();
    list.querySelectorAll(".selected").forEach(el => el.classList.remove("selected"));
    li.classList.add("selected");
    li.focus();
  });

  // Tombol delete di samping teks
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
  });

  // Tekan Delete/Backspace saat fokus di li -> hapus
  li.addEventListener("keydown", (e) => {
    if (e.key === "Delete" || e.key === "Backspace") {
      e.preventDefault();
      li.remove();
    }
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.value = "";
  input.focus();
}

// Tekan Enter di input -> tambah task
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

// Klik di luar list -> hilangkan tanda selected
document.addEventListener("click", (e) => {
  if (!list.contains(e.target)) {
    list.querySelectorAll(".selected").forEach(el => el.classList.remove("selected"));
  }
});

// Tekan Delete/Backspace -> hapus item yang selected atau fokus
document.addEventListener("keydown", (event) => {
  if (event.key !== "Delete" && event.key !== "Backspace") return;

  const active = document.activeElement;

  if (active && (active.tagName === "INPUT" || active.tagName === "TEXTAREA" || active.isContentEditable)) {
    return; // Jangan hapus kalau sedang ngetik
  }

  if (active && active.tagName === "LI" && active.parentElement === list) {
    active.remove();
    return;
  }

  const selected = list.querySelector(".selected");
  if (selected) selected.remove();
});
