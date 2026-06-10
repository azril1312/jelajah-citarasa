// ==========================================
// CENTRAL DATABASE - JELAJAH CITA RASA KEBUMEN
// ==========================================
const DATABASE_PRODUK = [
    {
        id: 1,
        nama: "Lanting Kebumen Original",
        kategori: "Makanan",
        harga: "Rp 15.000",
        gambar: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500",
        linkShopee: "https://id.shp.ee/JJ6JFDfJ",
        deskripsi: "Camilan khas Kebumen yang renyah dan gurih, terbuat dari singkong pilihan berkualitas tinggi."
    },
    {
        id: 2,
        nama: "Jenang Sabun Premium",
        kategori: "Makanan",
        harga: "Rp 18.000",
        gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500",
        linkShopee: "https://id.shp.ee/7zu3TrTu",
        deskripsi: "Makanan tradisional legendaris Kebumen dengan tekstur kenyal dan rasa manis legit yang khas."
    },
    {
        id: 3,
        nama: "Kue Satu Kebumen",
        kategori: "Makanan",
        harga: "Rp 12.000",
        gambar: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500",
        linkShopee: "https://id.shp.ee/7cZshhoN",
        deskripsi: "Kue tradisional berbahan dasar kacang hijau yang lumer di mulut, cocok untuk oleh-oleh."
    },
    {
        id: 4,
        nama: "Jipang Kacang",
        kategori: "Makanan",
        harga: "Rp 14.000",
        gambar: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=500",
        linkShopee: "https://id.shp.ee/YCDySEB9",
        deskripsi: "Perpaduan karamel gula jawa asli dan kacang tanah renyah yang memberikan rasa manis gurih."
    },
    {
        id: 5,
        nama: "Tas Daun Pandan",
        kategori: "Kerajinan",
        harga: "Rp 45.000",
        gambar: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=500",
        linkShopee: "https://id.shp.ee/RxQtB8Us",
        deskripsi: "Kerajinan tangan anyaman asli Kebumen yang modis, ramah lingkungan, dan tahan lama."
    },
    {
        id: 6,
        nama: "Selendang Motif Kebumen",
        kategori: "Kerajinan",
        harga: "Rp 65.000",
        gambar: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500",
        linkShopee: "https://id.shp.ee/TwvocchY",
        deskripsi: "Kain selendang dengan motif batik khas Kebumen yang elegan dan kaya akan nilai budaya lokal."
    },
    {
        id: 7,
        nama: "Madu Kebumen Asli",
        kategori: "Makanan",
        harga: "Rp 85.000",
        gambar: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500",
        linkShopee: "https://id.shp.ee/eV6uiE6t",
        deskripsi: "Madu murni alami hasil budidaya lokal Kebumen, menjaga kesehatan dan imunitas tubuh."
    }
];

// ==========================================
// SYSTEM ENGINE (FUNGSI PENARIK DATA DATABASE)
// ==========================================
function ambilDataDatabase(kategoriFilter = 'Semua') {
    const container = document.getElementById('katalog-container');
    if(!container) return;
    
    container.innerHTML = ''; // Reset tampilan grid produk

    // Proses Query internal data
    DATABASE_PRODUK.forEach(produk => {
        if (kategoriFilter === 'Semua' || produk.kategori === kategoriFilter) {
            const kartuHTML = `
                <div class="card">
                    <img src="${produk.gambar}" alt="${produk.nama}">
                    <div class="card-info">
                        <span class="badge-kategori" style="font-size: 0.75rem; background: #e0f2fe; color: #0369a1; padding: 3px 8px; border-radius: 12px; font-weight: bold;">${produk.kategori}</span>
                        <h3 style="margin-top: 8px;">${produk.nama}</h3>
                        <p style="font-size: 0.85rem; color: #666; margin: 8px 0 12px; line-height: 1.4;">${produk.deskripsi}</p>
                        <p class="price">${produk.harga}</p>
                        <a href="${produk.linkShopee}" target="_blank" class="btn-shopee">🛒 Beli di Shopee</a>
                    </div>
                </div>
            `;
            container.innerHTML += kartuHTML;
        }
    });
}

// FUNGSI KONTROL TOMBOL FILTER
function filterKategori(kategori) {
    const tombols = document.querySelectorAll('.btn-filter');
    tombols.forEach(btn => btn.classList.remove('active'));
    
    if(window.event && window.event.target) {
        window.event.target.classList.add('active');
    }

    // Eksekusi penarikan data baru dari database sesuai filter
    ambilDataDatabase(kategori);
}

// Trigger sistem otomatis jalan saat halaman web diakses pengunjung
window.onload = function() {
    ambilDataDatabase('Semua');
};