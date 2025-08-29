const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");
const addBtn = document.getElementById("addBtn");

function addTask() {
  const taskText = input.value.trim();
  if (taskText === "") return;

  // Pisahkan nama & harga pakai tanda "-"
  let [name, price] = taskText.split("-");
  name = name ? name.trim() : "";
  price = price ? price.trim() : "";

  const li = document.createElement("li");

  // Tambahkan teks tugas
  const taskSpan = document.createElement("span");
  taskSpan.textContent = name;

  // Tambahkan harga (jika ada)
  if (price) {
    const priceSpan = document.createElement("span");
    priceSpan.textContent = "Rp" + Number(price).toLocaleString("id-ID");
    priceSpan.classList.add("price");
    li.appendChild(taskSpan);
    li.appendChild(priceSpan);
  } else {
    li.appendChild(taskSpan);
  }

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
    addTask();
  } else if (
    (event.key === "Backspace" || event.key === "Delete") &&
    input.value === ""
  ) {
    const lastTask = list.lastElementChild;
    if (lastTask) {
      lastTask.remove();
    }
  }
});
