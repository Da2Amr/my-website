// Ambil elemen yang diperlukan dari DOM
const nameInput = document.getElementById('nameInput');
const messageInput = document.getElementById('messageInput');
const submitBtn = document.getElementById('submitBtn');
const messagesList = document.getElementById('messagesList');

// Event listener untuk tombol kirim
submitBtn.addEventListener('click', function() {
    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    // Validasi input
    if (name && message) {
        // Membuat elemen baru untuk ucapan
        const messageItem = document.createElement('li');

        // Membuat elemen untuk nama dan ucapan
        const nameElem = document.createElement('span');
        nameElem.classList.add('name');
        nameElem.textContent = name;

        const messageElem = document.createElement('p');
        messageElem.classList.add('message');
        messageElem.textContent = message;

        // Menambahkan nama dan ucapan ke dalam item
        messageItem.appendChild(nameElem);
        messageItem.appendChild(messageElem);

        // Menambahkan item ucapan ke dalam daftar
        messagesList.appendChild(messageItem);

        // Reset form setelah mengirim ucapan
        nameInput.value = '';
        messageInput.value = '';
    } else {
        alert('Harap masukkan nama dan ucapan Anda.');
    }
});
