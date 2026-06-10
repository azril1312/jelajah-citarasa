// DATABASE PRODUK UMKM (Mewakili Database Sistem)
const dataProdukUMKM = [
    {
        id: 1,
        nama: "Lanting Kebumen Original",
        kategori: "Makanan",
        harga: "Rp 15.000",
        gambar: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400",
        linkShopee: "https://id.shp.ee/JJ6JFDfJ"
    },
    {
        id: 2,
        nama: "Jenang Sabun Premium",
        kategori: "Makanan",
        harga: "Rp 18.000",
        gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
        linkShopee: "https://id.shp.ee/7zu3TrTu"
    },
    {
        id: 3,
        nama: "Kue Satu Kebumen",
        kategori: "Makanan",
        harga: "Rp 12.000",
        gambar: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400",
        linkShopee: "https://id.shp.ee/7cZshhoN"
    },
    {
        id: 4,
        nama: "Jipang Kacang",
        kategori: "Makanan",
        harga: "Rp 14.000",
        gambar: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=400",
        linkShopee: "https://id.shp.ee/YCDySEB9"
    },
    {
        id: 5,
        nama: "Tas Daun Pandan",
        kategori: "Kerajinan",
        harga: "Rp 45.000",
        gambar: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400",
        linkShopee: "https://id.shp.ee/RxQtB8Us"
    },
    {
        id: 6,
        nama: "Selendang Motif Kebumen",
        kategori: "Kerajinan",
        harga: "Rp 65.000",
        gambar: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400",
        linkShopee: "https://id.shp.ee/TwvocchY"
    },
    {
        id: 7,
        nama: "Madu Kebumen Asli",
        kategori: "Makanan",
        harga: "Rp 85.000",
        gambar: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400",
        linkShopee: "https://id.shp.ee/eV6uiE6t"
    }
];

// FUNGSI UNTUK MERENDER DATA KE HALAMAN WEB
function tampilkanKatalog(kategoriPilihan) {
    const container = document.getElementById('katalog-container');
    container.innerHTML = ''; // Reset container sebelum diisi

    dataProdukUMKM.forEach(produk => {
        // Filter Berdasarkan Kategori
        if (kategoriPilihan === 'Semua' || produk.kategori === kategoriPilihan) {
            const elemenKartu = `
                <div class="card">
                    <img src="${produk.gambar}" alt="${produk.nama}">
                    <div class="card-info">
                        <h3>${produk.nama}</h3>
                        <p class="price">${produk.harga}</p>
                        <a href="${produk.linkShopee}" target="_blank" class="btn-shopee">Beli di Shopee</a>
                    </div>
                </div>
            `;
            container.innerHTML += elemenKartu;
        }
    });
}

// LOGIKA INTERAKSI TOMBOL FILTER
function filterKategori(kategori) {
    // Mengatur kelas aktif tombol filter
    const tombols = document.querySelectorAll('.btn-filter');
    tombols.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Tampilkan data yang sudah difilter
    tampilkanKatalog(kategori);
}

// Jalankan fungsi otomatis saat halaman pertama kali dimuat browser
window.onload = function() {
    tampilkanKatalog('Semua');
};