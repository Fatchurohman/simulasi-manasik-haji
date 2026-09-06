/**
 * Nama File: kemenag_gateway.js
 * Fungsi: Sistem Verifikasi Berkas & Kesehatan Calon Jamaah Haji
 */

const jamaahData = {
    nama: "Fatchurohman",
    nom: "REG-2026-0089",
    syarat: {
        ktpValid: true,
        pasporAktif: true,
        lunasBpih: true,
        sehatMedis: false // Simulasi belum lolos cek kesehatan
    }
};

function validasiKeberangkatan(data) {
    if (!data || typeof data !== 'object' || !data.syarat) {
        return {
            status: false,
            pesan: "Error: Data jamaah tidak valid atau korup.",
            kekurangan: []
        };
    }

    const kekurangan = [];
    const syarat = data.syarat;

    if (!syarat.ktpValid) kekurangan.push("KTP tidak valid / belum diverifikasi Dukcapil");
    if (!syarat.pasporAktif) kekurangan.push("Paspor belum aktif atau masa berlaku kurang dari 6 bulan");
    if (!syarat.lunasBpih) kekurangan.push("Pelunasan Biaya Perjalanan Ibadah Haji (BPIH) belum lunas");
    if (!syarat.sehatMedis) kekurangan.push("Medical Check-Up (Kesehatan) belum memenuhi syarat istitha'ah");

    const isLolos = kekurangan.length === 0;

    return {
        status: isLolos,
        pesan: isLolos 
            ? "Alhamdulillah! Semua persyaratan lengkap. Silakan lanjut ke tahap manasik di Tanah Suci." 
            : "Maaf, Anda belum bisa lanjut ke Tanah Suci. Lengkapi persyaratan berikut terlebih dahulu:",
        kekurangan: kekurangan
    };
}

// Eksekusi
try {
    console.log(`=== STATUS PENDAFTARAN KEMENAG: ${jamaahData.nama} (${jamaahData.nom}) ===`);
    const hasilVerifikasi = validasiKeberangkatan(jamaahData);
    
    console.log(`\nStatus: ${hasilVerifikasi.status ? "LOLOS (BERANGKAT)" : "DITUNDA (BELUM LENGKAP)"}`);
    console.log(`Pesan: ${hasilVerifikasi.pesan}`);

    if (!hasilVerifikasi.status) {
        hasilVerifikasi.kekurangan.forEach((item, index) => {
            console.log(`${index + 1}. [X] ${item}`);
        });
    }
} catch (error) {
    console.error("Terjadi kesalahan sistem:", error.message);
}
