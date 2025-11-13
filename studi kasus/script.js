const pilihan = ['batu', 'kertas', 'gunting'];

function mainGame(pilihanPemain) {
    const pilihanKomputer = pilihan[Math.floor(Math.random() * pilihan.length)];

    let hasil = '';
    if (pilihanPemain === pilihanKomputer) {
        hasil = 'Seri!';
    } else if (
        (pilihanPemain === 'batu' && pilihanKomputer === 'gunting') ||
        (pilihanPemain === 'kertas' && pilihanKomputer === 'batu') ||
        (pilihanPemain === 'gunting' && pilihanKomputer === 'kertas')
    ) {
        hasil = 'Kamu Menang!';
    } else {
        hasil = 'Kamu Kalah!';
    }


    document.getElementById('info').innerText = `Kamu memilih: ${pilihanPemain}\nKomputer memilih: ${pilihanKomputer}\n${hasil}`;
}

// Tambahkan event listener untuk setiap tombol setelah fungsi mainGame
const tombol = document.querySelectorAll('.tombol-game');
tombol.forEach(btn => {
    btn.addEventListener('click', function() {
        mainGame(this.id);
    });
});

