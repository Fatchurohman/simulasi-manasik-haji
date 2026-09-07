/**
 * Nama File: kemenag_gateway.js
 * Fungsi: Sistem Verifikasi Berkas, Vaksin Wajib Kemenkes, & Istitha'ah
 */

// Data jamaah dibuat dinamis (nama awalnya kosong/kosongan)
let jamaahData = {
    nama: "",
    nom: "REG-2026-0089",
    syarat: {
        ktpValid: true,
        pasporAktif: true,
        lunasBpih: true,
        vaksinMeningitis: true,
        vaksinPolio: false, // Belum disuntik polio di awal
        sehatMedis: true
    }
};

function validasiKeberangkatan(data) {
    if (!data || typeof data !== 'object' || !data.syarat || !data.nama) {
        return {
            status: false,
            pesan: "Error: Nama Calhaj belum diisi atau data tidak valid.",
            kekurangan: []
        };
    }

    const kekurangan = [];
    const syarat = data.syarat;

    if (!syarat.ktpValid) kekurangan.push("KTP tidak valid / belum diverifikasi Dukcapil");
    if (!syarat.pasporAktif) kekurangan.push("Paspor belum aktif atau masa berlaku kurang dari 6 bulan");
    if (!syarat.lunasBpih) kekurangan.push("Pelunasan Biaya Perjalanan Ibadah Haji (BPIH) belum lunas");
    if (!syarat.vaksinMeningitis) kekurangan.push("Sertifikat Vaksin Meningitis (e-ICV) belum tercatat");
    if (!syarat.vaksinPolio) kekurangan.push("Vaksin Polio (IPV) wajib minimal 4 minggu sebelum keberangkatan belum terpenuhi");
    if (!syarat.sehatMedis) kekurangan.push("Medical Check-Up (Kesehatan) belum memenuhi syarat istitha'ah");

    const isLolos = kekurangan.length === 0;

    return {
        status: isLolos,
        pesan: isLolos 
            ? "Alhamdulillah! Dokumen, syarat istitha'ah, dan seluruh vaksin wajib Kemenkes lengkap. Siap berangkat!" 
            : "Maaf, Anda belum bisa lanjut ke Tanah Suci. Penuhi persyaratan kesehatan & vaksin berikut:",
        kekurangan: kekurangan
    };
}

function aksiPenuhiSyaratKesehatan() {
    jamaahData.syarat.vaksinPolio = true;
    jamaahData.syarat.sehatMedis = true;
    return "Alhamdulillah! Vaksin Polio & Meningitis telah disuntikkan, serta e-ICV diterbitkan. Status medis dan administratif kini MEMENUHI SYARAT.";
}
