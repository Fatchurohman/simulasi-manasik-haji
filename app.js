/**
 * Nama File: app.js
 * Fungsi: Menghubungkan Interaksi Tombol UI dengan Logika Simulasi Manasik
 * Bahasa: JavaScript (ES6+)
 */

document.addEventListener('DOMContentLoaded', () => {
    // Ambil elemen DOM secara aman dengan validasi null
    const btnGateway = document.getElementById('btnGateway');
    const btnTanahSuci = document.getElementById('btnTanahSuci');
    const btnPuncakHaji = document.getElementById('btnPuncakHaji');
    const outputConsole = document.getElementById('outputConsole');

    if (!btnGateway || !btnTanahSuci || !btnPuncakHaji || !outputConsole) {
        console.error("Error: Beberapa elemen UI tidak ditemukan di DOM.");
        return;
    }

    /**
     * Fungsi pembantu untuk mencetak teks ke console box di halaman web
     * @param {string} teks - Pesan yang akan ditampilkan
     */
    function cetakKeLayar(teks) {
        outputConsole.textContent = teks;
    }

    /**
     * Helper untuk menangkap output console.log agar tampil di web
     * @param {Function} callbackFungsi - Fungsi logika game yang akan dijalankan
     */
    function tangkapLog(callbackFungsi) {
        let hasilTampungan = "";
        
        // Simpan fungsi console.log asli
        const logAsli = console.log;
        const errorAsli = console.error;

        // Timpa sementara console.log untuk merekam string
        console.log = function (pesan) {
            hasilTampungan += pesan + "\n";
            logAsli(pesan); // Tetap cetak di console browser asli untuk debugging
        };

        console.error = function (pesan) {
            hasilTampungan += "ERROR: " + pesan + "\n";
            errorAsli(pesan);
        };

        try {
            callbackFungsi();
        } catch (err) {
            hasilTampungan += "Exception: " + err.message;
        } finally {
            // Kembalikan fungsi console ke semula
            console.log = logAsli;
            console.error = errorAsli;
            
            // Tampilkan hasil gabungan ke kotak web
            cetakKeLayar(hasilTampungan.trim());
        }
    }

    // Event Listener untuk Tombol 1: Cek Berkas Kemenag
    btnGateway.addEventListener('click', () => {
        tangkapLog(() => {
            console.log(`=== STATUS PENDAFTARAN KEMENAG: ${jamaahData.nama} (${jamaahData.nom}) ===`);
            const hasilVerifikasi = validasiKeberangkatan(jamaahData);
            
            console.log(`\nStatus: ${hasilVerifikasi.status ? "LOLOS (BERANGKAT)" : "DITUNDA (BELUM LENGKAP)"}`);
            console.log(`Pesan: ${hasilVerifikasi.pesan}`);

            if (!hasilVerifikasi.status && Array.isArray(hasilVerifikasi.kekurangan)) {
                console.log("\nDaftar Kekurangan Dokumen & Kesehatan:");
                hasilVerifikasi.kekurangan.forEach((item, index) => {
                    console.log(`${index + 1}. [X] ${item}`);
                });
            }
        });
    });

    // Event Listener untuk Tombol 2: Perjalanan & Madinah
    btnTanahSuci.addEventListener('click', () => {
        tangkapLog(() => {
            jalankanSimulasiManasik(databaseManasik);
        });
    });

    // Event Listener untuk Tombol 3: Puncak Haji (Arafah - Mina)
    btnPuncakHaji.addEventListener('click', () => {
        tangkapLog(() => {
            jalankanPuncakHaji(rutePuncakHaji);
        });
    });
});
