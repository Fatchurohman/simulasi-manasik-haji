/**
 * Nama File: manasik_tanah_suci.js
 * Fungsi: Sistem Simulasi Perjalanan, Doa, & Rincian Manasik (Madinah & Makkah)
 */

const databaseManasik = {
    penerbangan: {
        lokasi: "Kabin Pesawat (Menuju Jeddah)",
        tindakan: "Melaksanakan Shalat Jamak Qashar & Niat Ihram dari Miqat di Udara",
        tips: "Memperbanyak talbiyah dan menjaga kesucian selama penerbangan."
    },
    madinah: {
        lokasi: "Masjid Nabawi, Madinah",
        tindakan: "Shalat Arbain, Ziarah Raudhah, & Makam Rasulullah SAW",
        doaHarian: "Allahummaftah lii abwaaba rahmatika."
    },
    makkah: {
        lokasi: "Masjidil Haram, Makkah",
        tindakan: "Pelaksanaan Thawaf 7 Putaran & Sa'i (Safa - Marwah)",
        rincianThawaf: [
            "Putaran 1: Dimulai dari Hajar Aswad dengan takbir/bismillah.",
            "Putaran 2-6: Membaca doa di antara Rukun Yamani dan Hajar Aswad (Rabbana atina fid dunya...).",
            "Putaran 7: Menyelesaikan thawaf dan shalat sunnah di belakang Maqam Ibrahim."
        ]
    }
};

function jalankanSimulasiManasik(dataManasik) {
    if (!dataManasik || typeof dataManasik !== 'object') {
        throw new Error("Database manasik tidak valid atau kosong.");
    }

    console.log("==========================================");
    console.log("       SIMULASI PERJALANAN & MANASIK      ");
    console.log("==========================================");

    const penerbangan = dataManasik.penerbangan;
    if (penerbangan) {
        console.log(`\n[FASE 1] ${penerbangan.lokasi}`);
        console.log(`- Aktivitas: ${penerbangan.tindakan}`);
    }

    const madinah = dataManasik.madinah;
    if (madinah) {
        console.log(`\n[FASE 2] ${madinah.lokasi}`);
        console.log(`- Kegiatan Utama: ${madinah.tindakan}`);
        console.log(`- Referensi Doa: "${madinah.doaHarian}"`);
    }

    const makkah = dataManasik.makkah;
    if (makkah && Array.isArray(makkah.rincianThawaf)) {
        console.log(`\n[FASE 3] ${makkah.lokasi}`);
        console.log(`- Kegiatan: ${makkah.tindakan}`);
        makkah.rincianThawaf.forEach((langkah, index) => {
            console.log(`  (${index + 1}) ${langkah}`);
        });
    }
}

// Eksekusi
try {
    jalankanSimulasiManasik(databaseManasik);
} catch (error) {
    console.error("Terjadi kesalahan sistem:", error.message);
}
