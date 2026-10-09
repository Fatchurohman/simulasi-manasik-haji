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

    // Fungsi khusus untuk merender Kartu Aktivitas Puncak Haji ke UI HTML
    function renderKartuPuncakHaji(dataRute) {
        if (!dataRute || !Array.isArray(dataRute) || dataRute.length === 0) {
            outputConsole.innerHTML = "<p style='color:red;'>Data puncak haji tidak ditemukan.</p>";
            return;
        }

        let htmlContent = `
            <div style="font-family: sans-serif; text-align: left; padding: 10px;">
                <h3 style="margin-top:0; border-bottom: 2px solid #ccc; padding-bottom: 5px;">
                    🕋 Simulasi Puncak Haji & Tarwiyah (${jamaahData?.nama || 'Jamaah'})
                </h3>
        `;

        dataRute.forEach((fase, idx) => {
            if (!fase || typeof fase !== 'object') return;

            const hasBacaan = fase.bacaan && typeof fase.bacaan === 'object';

            htmlContent += `
                <div style="border: 1px solid #ddd; border-radius: 8px; margin-bottom: 12px; padding: 12px; background-color: #fff; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <label style="font-weight: bold; font-size: 1.05em; cursor: pointer;">
                            <input type="checkbox" id="chk-${idx}" style="margin-right: 8px; transform: scale(1.2);">
                            Kartu #${idx + 1}: ${fase.judul || 'Aktivitas'}
                        </label>
                        <span style="background-color: #e0f2fe; color: #0369a1; padding: 3px 8px; border-radius: 4px; font-size: 0.8em; font-weight: bold;">
                            ${fase.statusHukum || 'Panduan'}
                        </span>
                    </div>

                    <div style="margin-top: 8px; font-size: 0.88em; color: #555;">
                        <span>📅 <b>Waktu:</b> ${fase.hari || '-'}</span> | 
                        <span>📍 <b>Lokasi:</b> ${fase.lokasi || '-'}</span>
                    </div>

                    <p style="margin: 8px 0 4px 0; font-weight: 600; font-size: 0.9em;">Kegiatan Utama: ${fase.kegiatanUtama || '-'}</p>
            `;

            if (Array.isArray(fase.detail) && fase.detail.length > 0) {
                htmlContent += `<ul style="margin: 4px 0 8px 20px; padding: 0; font-size: 0.88em; color: #333;">`;
                fase.detail.forEach(instruksi => {
                    htmlContent += `<li style="margin-bottom: 2px;">${instruksi}</li>`;
                });
                htmlContent += `</ul>`;
            }

            if (hasBacaan) {
                htmlContent += `
                    <details style="margin-top: 8px; background-color: #f9fafb; padding: 8px; border-radius: 6px; border: 1px dashed #ccc;">
                        <summary style="cursor: pointer; font-weight: bold; color: #2563eb; font-size: 0.88em;">
                            📖 Lihat Bacaan / Doa (${fase.bacaan.judulDoa || 'Doa'})
                        </summary>
                        <div style="margin-top: 8px; text-align: center;">
                            <p style="font-size: 1.3em; margin: 4px 0; font-family: 'Amiri', 'Traditional Arabic', serif; direction: rtl; color: #0f172a;">
                                ${fase.bacaan.arab || ''}
                            </p>
                            <p style="font-size: 0.85em; font-style: italic; color: #475569; margin: 4px 0;">
                                "${fase.bacaan.latin || ''}"
                            </p>
                            <p style="font-size: 0.82em; color: #334155; margin: 4px 0;">
                                <b>Artinya:</b> ${fase.bacaan.arti || ''}
                            </p>
                        </div>
                    </details>
                `;
            }

            htmlContent += `</div>`;
        });

        htmlContent += `</div>`;
        outputConsole.innerHTML = htmlContent;
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

    // Tombol Puncak Haji: Menampilkan Kartu Aktivitas Interaktif
    btnPuncakHaji.addEventListener('click', () => {
        try {
            renderKartuPuncakHaji(rutePuncakHaji);
        } catch (err) {
            outputConsole.textContent = "Terjadi kesalahan saat memuat Kartu Puncak Haji: " + err.message;
        }
    });
});
