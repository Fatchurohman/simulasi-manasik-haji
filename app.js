/**
 * Nama File: app.js
 * Fungsi: Mengatur Input Identitas, Interaksi Tombol, & Logika Simulasi
 */

document.addEventListener('DOMContentLoaded', () => {
    const inputNama = document.getElementById('inputNama');
    const btnSimpanNama = document.getElementById('btnSimpanNama');
    const btnGateway = document.getElementById('btnGateway');
    const btnBerusahaSehat = document.getElementById('btnBerusahaSehat');
    const btnTanahSuci = document.getElementById('btnTanahSuci');
    const btnPuncakHaji = document.getElementById('btnPuncakHaji');
    const outputConsole = document.getElementById('outputConsole');

    if (!inputNama || !btnSimpanNama || !btnGateway || !outputConsole) {
        console.error("Error: Elemen UI tidak lengkap.");
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

    // Aksi saat user memasukkan nama dan klik Simpan
    btnSimpanNama.addEventListener('click', () => {
        const namaInput = inputNama.value.trim();
        if (namaInput === "") {
            alert("Silakan masukkan nama Calon Jamaah terlebih dahulu!");
            return;
        }

        // Set nama ke data jamaah
        jamaahData.nama = namaInput;

        // Buka kunci (enable) tombol-tombol navigasi game
        btnGateway.disabled = false;
        btnGateway.style.opacity = "1";
        btnGateway.style.cursor = "pointer";

        btnTanahSuci.disabled = false;
        btnTanahSuci.style.opacity = "1";
        btnTanahSuci.style.cursor = "pointer";

        btnPuncakHaji.disabled = false;
        btnPuncakHaji.style.opacity = "1";
        btnPuncakHaji.style.cursor = "pointer";

        cetakKeLayar(`Registrasi Berhasil!\nCalon Jamaah atas nama: ${jamaahData.nama} (No. Reg: ${jamaahData.nom})\n\nSilakan klik tombol "1. Cek Berkas Kemenag" untuk memulai pemeriksaan.`);
    });

    // Tombol 1: Cek Berkas Kemenag
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
                
                btnBerusahaSehat.style.display = "block";
                console.log("\n💡 [INFO]: Klik tombol 'Suntik Vaksin & Berobat' di panel kiri untuk memenuhi syarat!");
            } else {
                btnBerusahaSehat.style.display = "none";
            }
        });
    });

    // Tombol Aksi Memenuhi Syarat Vaksin/Kesehatan
    btnBerusahaSehat.addEventListener('click', () => {
        tangkapLog(() => {
            console.log("=== PROSES PEMENUHAN SYARAT KESEHATAN & VAKSIN ===");
            const pesanAksi = aksiPenuhiSyaratKesehatan();
            console.log(pesanAksi);
            
            btnBerusahaSehat.style.display = "none";
            console.log(`\n-> Calhaj ${jamaahData.nama}, silakan klik tombol '1. Cek Berkas Kemenag' sekali lagi untuk verifikasi akhir.`);
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
