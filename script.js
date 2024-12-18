// Ambil elemen button dan pesan RSVP
const rsvpButton = document.getElementById('rsvpBtn');
const rsvpMessage = document.getElementById('rsvpMessage');

// Tambahkan event listener pada button RSVP
rsvpButton.addEventListener('click', function() {
    // Tampilkan pesan konfirmasi
    rsvpMessage.classList.remove('hidden');
    
    // Menonaktifkan tombol setelah diklik
    rsvpButton.disabled = true;
    rsvpButton.style.backgroundColor = '#bdc3c7'; // Ganti warna tombol setelah diklik
    rsvpButton.innerHTML = 'Terima Kasih!';
});
