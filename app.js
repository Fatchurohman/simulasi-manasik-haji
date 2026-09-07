/**
 * Nama File: app.js
 * Fungsi: Menghubungkan Interaksi Tombol UI dengan Logika Simulasi Manasik & Mini-Quest
 */

document.addEventListener('DOMContentLoaded', () => {
    const btnGateway = document.getElementById('btnGateway');
    const btnTanahSuci = document.getElementById('btnTanahSuci');
    const btnPuncakHaji = document.getElementById('btnPuncakHaji');
    const outputConsole = document.getElementById('outputConsole');

    if (!btnGateway || !btnTanahSuci || !btnPuncakHaji || !outputConsole) {
        console.error("Error: Beberapa elemen UI tidak ditemukan di DOM.");
        return;
    }

    function cetakKeLayar(teks) {
        outputConsole.textContent = teks;
    }

    function tangkapLog(callbackFungsi) {
        let hasilTampungan = "";
        const logAsli = console.log;
        const errorAsli = console.error;

        console.log = function (pesan) {
            hasilTampungan += pesan + "\n";
            logAsli(pesan);
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
            console.log = logAsli;
            console.error = errorAsli;
            cetakKeLayar(hasilTampungan.trim());
        }
    }

    // Tombol 1: Cek Berkas & Otomatis Memicu Solusi Kesehatan jika Gagal
    btnGateway.addEventListener('click', () => {
        tangkapLog(() => {
            console.log(`=== STATUS PENDAFTARAN KEMENAG: ${jamaahData.nama} (${jamaahData.nom}) ===`);
            let hasilVerifikasi = validasiKeberangkatan(jamaahData);
            
            console.log(`\nStatus: ${hasilVerifikasi.status ? "LOLOS (BERANGKAT)" : "DITUNDA (BELUM LENGKAP)"}`);
            console.log(`Pesan: ${hasilVerifikasi.pesan}`);

            if (!hasilVerifikasi.status && Array.isArray(hasilVerifikasi.kekurangan)) {
                console.log("\nDaftar Kekurangan Dokumen & Kesehatan:");
                hasilVerifikasi.kekurangan.forEach((item, index) => {
                    console.log(`${index + 1}. [X] ${item}`);
                });

                // Simulasi aksi aktif user berusaha memenuhi syarat
                console.log("\n------------------------------------------");
                console.log("[AKSI DISARANKAN]: Kesehatan belum istitha'ah.");
                console.log("Menjalankan proses pengobatan & cek kesehatan ulang...");
                
                const hasilPulih = prosesPemulihanKesehatan();
                console.log(`> ${hasilPulih}`);

                // Cek ulang otomatis setelah berusaha
                console.log("\n[VALIDASI ULANG KEMENAG]:");
                hasilVerifikasi = validasiKeberangkatan(jamaahData);
                console.log(`Status Terbaru: ${hasilVerifikasi.status ? "LOLOS (BERANGKAT)" : "DITUNDA"}`);
                console.log(`Pesan: ${hasilVerifikasi.pesan}`);
            }
        });
    });

    btnTanahSuci.addEventListener('click', () => {
        tangkapLog(() => {
            jalankanSimulasiManasik(databaseManasik);
        });
    });

    btnPuncakHaji.addEventListener('click', () => {
        tangkapLog(() => {
            jalankanPuncakHaji(rutePuncakHaji);
        });
    });
});
