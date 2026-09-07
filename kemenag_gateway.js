/**
 * Nama File: kemenag_gateway.js
 * Fungsi: Sistem Verifikasi Berkas & Mini-Quest Perbaikan Kesehatan Istitha'ah
 */

// Data awal jamaah (Kesehatan diset false agar pemain harus berusaha dulu)
let jamaahData = {
    nama: "Fatchurohman",
    nom: "REG-2026-0089",
    syarat: {
        ktpValid: true,
        pasporAktif: true,
        lunasBpih: true,
        sehatMedis: false 
    }
};

/**
 * Fungsi untuk memvalidasi kelayakan terbang jamaah
 */
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
            ? "Alhamdulillah! Semua persyaratan lengkap & Istitha'ah terpenuhi. Silakan lanjut ke tahap manasik di Tanah Suci." 
            : "Maaf, Anda belum bisa lanjut ke Tanah Suci. Lengkapi persyaratan berikut terlebih dahulu:",
        kekurangan: kekurangan
    };
}

/**
 * Fungsi aksi bagi user untuk berusaha memperbaiki kesehatan (Mini-Quest)
 */
function prosesPemulihanKesehatan() {
    if (jamaahData.syarat.sehatMedis) {
        return "Kesehatan Anda sudah prima dan memenuhi syarat istitha'ah!";
    }
    
    // Simulasi proses medis: cek kesehatan ulang, minum obat, dan istirahat
    jamaahData.syarat.sehatMedis = true;
    return "Alhamdulillah! Setelah menjalani terapi, konsultasi dokter, dan istirahat cukup, hasil Medical Check-Up ulang dinyatakan MEMENUHI SYARAT (Istitha'ah).";
}
