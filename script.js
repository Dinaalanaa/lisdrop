// URL Web App Google Script kamu (harus sudah di-deploy dengan akses 'Anyone')
const scriptURL = 'https://script.google.com/macros/s/AKfycbyFrAJfGbgdw48MegIygfNqwcGnKCU5yRHhp4jH_qzcjcPnyggLLYkyEEPYICGs0iXH2A/exec';

// Ambil elemen form dan tombol
const form = document.forms['submit-to-google-sheet'];
const addTaskButton = document.getElementById('addTask');

// Saat tombol "Tambah" diklik
addTaskButton.addEventListener('click', function (e) {
  e.preventDefault(); // Hindari reload halaman

  // Validasi sederhana (opsional)
  const name = document.getElementById('name').value.trim();
  if (name === "") {
    alert('Nama project tidak boleh kosong!');
    return;
  }

  // Kirim data form ke Google Sheet melalui Apps Script
  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form)
  })
    .then(response => {
      console.log('Success!', response);
      alert('✅ Data berhasil dikirim ke Google Sheets!');
      form.reset(); // Kosongkan form
    })
    .catch(error => {
      console.error('Error!', error.message);
      alert('❌ Gagal mengirim data!');
    });
});
