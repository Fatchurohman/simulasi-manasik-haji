/**
 * Nama File: manasik_tanah_suci.js
 * Fungsi: Simulasi Perjalanan Gelombang 1 (Madinah -> Miqat Bir Ali -> Umrah Tamattu' -> Makkah)
 */

const databaseManasik = {
    penerbangan: {
        lokasi: "Penerbangan Menuju Madinah (Gelombang 1)",
        tindakan: "Pendaratan di Bandara AMAA Madinah. Belum berihram dari tanah air karena fokus ke Madinah dulu.",
        tips: "Istirahat sejenak di hotel sektor Madinah sebelum memulai Arbain."
    },
    madinah: {
        lokasi: "Masjid Nabawi, Madinah (Arbain)",
        tindakan: "Melaksanakan Shalat Arbain (40 waktu berjamaah) & Ziarah Raudhah",
        doaHarian: "Allahummaftah lii abwaaba rahmatika."
    },
    pergeseranMiqat: {
        lokasi: "Bir Ali (Dzul Hulaifah)",
        tindakan: "Miqat Umrah Tamattu' (Mandi sunnah ihram, memakai pakaian ihram, shalat sunnah, & niat Umrah di Bir Ali)",
        tips: "Mulai memperbanyak bacaan Talbiyah sepanjang perjalanan bus menuju Makkah."
    },
    makkahUmrah: {
        lokasi: "Masjidil Haram, Makkah",
        tindakan: "Pelaksanaan Umrah Pertama (Rangkaian Tamattu')",
        rincianThawaf: [
            "1. Thawaf Umrah: 7 putaran mengelilingi Ka'bah (disunnahkan Idhtiba' dan Raml untuk pria).",
            "2. Shalat Sunnah & Doa: Shalat dua rakaat di belakang Maqam Ibrahim dan minum air Zamzam.",
            "3. Sa'i Umrah: Berjalan/lari kecil 7 kali perjalanan antara bukit Safa dan Marwah.",
            "4. Tahallul Umrah: Bergunting rambut (tahallul awal), sehingga jamaah tahul bebas dari larangan ihram sampai 8 Dzulhijjah."
        ]
    }
};

function jalankanSimulasiManasik(dataManasik) {
    if (!dataManasik || typeof dataManasik !== 'object') {
        throw new Error("Database manasik tidak valid atau kosong.");
    }

    console.log("==========================================");
    console.log("   SIMULASI PERJALANAN GELOMBANG 1 (TAMATTU') ");
    console.log("==========================================");

    const penerbangan = dataManasik.penerbangan;
    if (penerbangan) {
        console.log(`\n[FASE 1] ${penerbangan.lokasi}`);
        console.log(`- Aktivitas: ${penerbangan.tindakan}`);
        console.log(`- Tips: ${penerbangan.tips}`);
    }

    const madinah = dataManasik.madinah;
    if (madinah) {
        console.log(`\n[FASE 2] ${madinah.lokasi}`);
        console.log(`- Kegiatan: ${madinah.tindakan}`);
        console.log(`- Doa: "${madinah.doaHarian}"`);
    }

    const miqat = dataManasik.pergeseranMiqat;
    if (miqat) {
        console.log(`\n[FASE 3] ${miqat.lokasi}`);
        console.log(`- Kegiatan: ${miqat.tindakan}`);
        console.log(`- Catatan: ${miqat.tips}`);
    }

    const makkahUmrah = dataManasik.makkahUmrah;
    if (makkahUmrah && Array.isArray(makkahUmrah.rincianThawaf)) {
        console.log(`\n[FASE 4] ${makkahUmrah.lokasi}`);
        console.log(`- Kegiatan: ${makkahUmrah.tindakan}`);
        makkahUmrah.rincianThawaf.forEach((langkah) => {
            console.log(`  ${langkah}`);
        });
    }
}
