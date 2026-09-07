/**
 * Nama File: manasik_tanah_suci.js
 * Fungsi: Simulasi Detail Alur Kedatangan Gelombang 1 & Lafaz Talbiyah
 */

const databaseManasik = {
    penerbangan: {
        lokasi: "Bandara AMAA Madinah (Gelombang 1)",
        tindakan: "Pendaratan pesawat calhaj asal Indonesia di Madinah.",
        rincianAlur: [
            "1. Pemeriksaan Dokumen & Imigrasi: Jemaah turun dari pesawat, lalu melewati proses pemeriksaan paspor dan keimigrasian oleh otoritas Arab Saudi.",
            "2. Pemeriksaan Barang: Pengambilan atau pengecekan tas kabin/barang bawaan melalui mesin pemindai (x-ray) jika diperlukan.",
            "3. Pengumpulan Paspor: Paspor jemaah kemudian dikoordinasikan dan diserahkan kepada Petugas Penyelenggara Ibadah Haji (PPIH) / Petugas Kloter untuk pengurusan akomodasi.",
            "4. Penunggu Bus: Jemaah diarahkan menuju ruang tunggu atau langsung ke bus yang disiapkan perusahaan bus maktab/Arab Saudi.",
            "5. Pemberangkatan ke Hotel: Jemaah diangkut menggunakan bus menuju pemondokan atau hotel di wilayah Markaziyah (sekitar Masjid Nabawi) di Madinah.",
            "6. Pembagian Kamar: Setibanya di hotel, ketua kloter membagikan kunci kamar dan penempatan tempat tidur bagi Jemaah.",
            "7. Istirahat & Orientasi: Jemaah beristirahat sejenak memulihkan tenaga setelah perjalanan panjang."
        ]
    },
    madinah: {
        lokasi: "Masjid Nabawi, Madinah (Arbain)",
        tindakan: "Pelaksanaan Arbain",
        rincianArbain: [
            "Jamaah haji gelombang pertama menetap di Madinah selama kurang lebih 8 hingga 9 hari.",
            "Melaksanakan shalat Arbain (shalat wajib berjamaah 40 waktu berturut-turut) di Masjid Nabawi.",
            "Melakukan ziarah makam Rasulullah SAW serta Raudhah."
        ]
    },
    pergeseranMiqat: {
        lokasi: "Perjalanan Menuju Makkah (via Bir Ali)",
        tindakan: "Berangkat ke Makkah & Miqat Umrah Tamattu'",
        rincianBerangkat: [
            "Setelah masa Arbain selesai, jemaah mengenakan pakaian ihram dari hotel (atau mandi sunnah ihram).",
            "Naik bus menuju Makkah dan singgah di Bir Ali (miqat makani) untuk mengambil miqat umrah qudum.",
            "Memulai niat umrah dan memperbanyak bacaan Talbiyah sepanjang perjalanan bus menuju Makkah."
        ],
        bacaanTalbiyah: {
            arab: "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ",
            latin: "Labbaikallãhumma labbaik, labbaika lã syarīka laka labbaik, innal-hamda wan-ni'mata laka wal-mulk, lã syarīka lak.",
            arti: "Ya Allah, aku datang memenuhi panggilan-Mu. Ya Allah, aku datang memenuhi panggilan-Mu. Tiada sekutu bagi-Mu, aku datang memenuhi panggilan-Mu. Sesungguhnya segala pujian, nikmat, dan kekuasaan adalah milik-Mu, tiada sekutu bagi-Mu."
        }
    }
};

function jalankanSimulasiManasik(dataManasik) {
    if (!dataManasik || typeof dataManasik !== 'object') {
        throw new Error("Database manasik tidak valid atau kosong.");
    }

    console.log("==========================================");
    console.log("   SIMULASI ALUR KEDATANGAN GELOMBANG 1    ");
    console.log("==========================================");

    const penerbangan = dataManasik.penerbangan;
    if (penerbangan && Array.isArray(penerbangan.rincianAlur)) {
        console.log(`\n[FASE 1] ${penerbangan.lokasi}`);
        penerbangan.rincianAlur.forEach((langkah) => {
            console.log(`  ${langkah}`);
        });
    }

    const madinah = dataManasik.madinah;
    if (madinah && Array.isArray(madinah.rincianArbain)) {
        console.log(`\n[FASE 2] ${madinah.lokasi}`);
        madinah.rincianArbain.forEach((poin) => {
            console.log(`  - ${poin}`);
        });
    }

    const pergeseran = dataManasik.pergeseranMiqat;
    if (pergeseran) {
        console.log(`\n[FASE 3] ${pergeseran.lokasi}`);
        if (Array.isArray(pergeseran.rincianBerangkat)) {
            pergeseran.rincianBerangkat.forEach((poin) => {
                console.log(`  - ${poin}`);
            });
        }
        
        if (pergeseran.bacaanTalbiyah) {
            console.log("\n   🔊 BACAAN TALBIYAH DI SEPANJANG JALAN:");
            console.log(`   Arab : ${pergeseran.bacaanTalbiyah.arab}`);
            console.log(`   Latin: ${pergeseran.bacaanTalbiyah.latin}`);
            console.log(`   Arti : "${pergeseran.bacaanTalbiyah.arti}"`);
        }
    }
}
