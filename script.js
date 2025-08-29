// script.js

// 1. Ambil elemen dari halaman
const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('taskList');

// 2. Fungsi untuk menambah tugas
function addTask() {
  // baca teks dari input dan bersihkan spasi di pinggir
  const taskText = input.value.trim();

  // kalau kosong, hentikan dan beri pesan
  if (taskText === '') {
    alert('Tugasnya harus diisi dulu!');
    return; // keluar dari fungsi
  }

  // 3. Buat elemen list <li>
  const li = document.createElement('li');

  // isi teks tugas
  li.textContent = taskText;

  // 4. (opsional tapi aman) tambahkan tombol Hapus di tiap li
  const delBtn = document.createElement('button');
  delBtn.textContent = 'Hapus';
  delBtn.addEventListener('click', function () {
    li.remove(); // hapus elemen li saat tombol Hapus diklik
  });

  li.appendChild(delBtn);

  // 5. masukkan li ke dalam ul
  list.appendChild(li);

  // 6. kosongkan kotak input dan fokus kembali ke sana
  input.value = '';
  input.focus();
}

// 7. Hubungkan tombol 'Tambah' dengan fungsi addTask
addBtn.addEventListener('click', addTask);

// 8. Supaya bisa tekan Enter juga untuk menambah
input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') addTask();
});
