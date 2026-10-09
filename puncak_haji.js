/**
 * Nama File: puncak_haji.js
 * Fungsi: Sistem Simulasi Puncak Haji (Tarwiyah, Arafah, Muzdalifah, Mina, & Wada')
 * Bahasa: JavaScript (ES6+)
 */

// Data kartu aktivitas puncak haji dalam bentuk Array of Objects
const rutePuncakHaji = [
    {
        id: "tarwiyah-ihram",
        hari: "8 Dzulhijjah",
        lokasi: "Mekkah (Hotel/Maktab)",
        judul: "Persiapan & Niat Ihram Haji",
        statusHukum: "Sunnah",
        kegiatanUtama: "Niat Ihram & Persiapan Tarwiyah",
        detail: [
            "Mandi sunnah ihram dan memakai wewangian di badan.",
            "Memakai pakaian ihram dengan rapi.",
            "Shalat sunnah ihram 2 rakaat di maktab/hotel.",
            "Berniat ihram haji dari maktab."
        ],
        bacaan: {
            judulDoa: "Niat Ihram Haji",
            arab: "لَبَّيْكَ اللَّهُمَّ حَجًّا",
            latin: "Labbaikallāhumma ḥajjā.",
            arti: "Aku sambut panggilan-Mu ya Allah untuk berhaji."
        }
    },
    {
        id: "tarwiyah-perjalanan",
        hari: "8 Dzulhijjah",
        lokasi: "Perjalanan ke Mina",
        judul: "Perjalanan ke Mina & Talbiyah",
        statusHukum: "Sunnah",
        kegiatanUtama: "Membaca Talbiyah Sepanjang Perjalanan",
        detail: [
            "Berangkat menuju Mina menggunakan bus/berjalan kaki.",
            "Melantunkan kalimat Talbiyah secara terus-menerus selama perjalanan."
        ],
        bacaan: {
            judulDoa: "Lafadz Talbiyah",
            arab: "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لاَ شَرِيْكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكُ لاَ شَرِيْكَ لَكَ",
            latin: "Labbaikallāhumma labbaīk, labbaīka lā syarīka laka labbaīk, innal-ḥamda wan-ni‘mata laka wal-mulk, lā syarīka lak.",
            arti: "Aku datang memenuhi panggilan-Mu ya Allah. Aku datang memenuhi panggilan-Mu, tiada sekutu bagi-Mu. Sesungguhnya segala puji, nikmat, dan kerajaan adalah milik-Mu."
        }
    },
    {
        id: "tarwiyah-mina",
        hari: "8 Dzulhijjah",
        lokasi: "Tenda Mina",
        judul: "Mabit & Shalat Hari Tarwiyah",
        statusHukum: "Sunnah Tarwiyah",
        kegiatanUtama: "Bermalam & Shalat 5 Waktu di Mina",
        detail: [
            "Melaksanakan shalat Dzuhur, Ashar, Maghrib, Isya, dan Subuh (9 Dzulhijjah) di Mina.",
            "Shalat empat rakaat di-Qashar menjadi 2 rakaat (TIDAK di-jamak).",
            "Memperbanyak dzikir, doa, dan istighfar di tenda."
        ],
        bacaan: null
    },
    {
        id: "arafah-perjalanan",
        hari: "9 Dzulhijjah",
        lokasi: "Mina ke Arafah",
        judul: "Keberangkatan Menuju Arafah",
        statusHukum: "Perjalanan",
        kegiatanUtama: "Bergerak ke Padang Arafah",
        detail: [
            "Berangkat dari Mina menuju Arafah setelah terbit matahari.",
            "Memperbanyak bacaan Talbiyah, Takbir, dan Tahlil."
        ],
        bacaan: null
    },
    {
        id: "arafah-wukuf",
        hari: "9 Dzulhijjah",
        lokasi: "Padang Arafah",
        judul: "Pelaksanaan Wukuf di Arafah",
        statusHukum: "Rukun Haji",
        kegiatanUtama: "Wukuf (Ba'da Dzuhur - Terbenam Matahari)",
        detail: [
            "Mendengarkan Khutbah Wukuf.",
            "Melaksanakan Shalat Jamak Taqdim & Qashar (Dzuhur & Ashar).",
            "Berdoa khusyuk menghadap Kiblat dengan mengangkat kedua tangan."
        ],
        bacaan: {
            judulDoa: "Dzikir Utama Hari Arafah",
            arab: "لاَ إِلَهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرٌ",
            latin: "Lā ilāha illallāhu waḥdahū lā syarīka lah, lahul-mulku wa lahul-ḥamdu wa huwa ‘alā kulli syai'in qadīr.",
            arti: "Tiada Tuhan selain Allah Yang Maha Esa, tiada sekutu bagi-Nya. Bagi-Nya kerajaan dan puji-pujian, dan Dia Maha Kuasa atas segala sesuatu."
        }
    },
    {
        id: "muzdalifah-perjalanan",
        hari: "Malam 10 Dzulhijjah",
        lokasi: "Arafah ke Muzdalifah",
        judul: "Perjalanan Menuju Muzdalifah",
        statusHukum: "Perjalanan",
        kegiatanUtama: "Bergerak Setelah Sunset",
        detail: [
            "Meninggalkan Arafah menuju Muzdalifah setelah matahari terbenam.",
            "Shalat Maghrib ditunda untuk dikerjakan secara Jamak Takhir di Muzdalifah."
        ],
        bacaan: null
    },
    {
        id: "muzdalifah-mabit",
        hari: "Malam 10 Dzulhijjah",
        lokasi: "Muzdalifah",
        judul: "Mabit & Mengumpulkan Kerikil",
        statusHukum: "Wajib Haji",
        kegiatanUtama: "Mabit & Berburu Batu Kerikil",
        detail: [
            "Melaksanakan Shalat Jamak Takhir Qashar (Maghrib 3 rakaat + Isya 2 rakaat).",
            "Mabit (bermalam/berdiam diri) hingga lewat tengah malam.",
            "Mengumpulkan batu kerikil seukuran biji kacang (70 butir untuk seluruh jamarat)."
        ],
        bacaan: null
    },
    {
        id: "mina-aqabah",
        hari: "10 Dzulhijjah",
        lokasi: "Jamarat (Mina)",
        judul: "Melontar Jumrah Aqabah",
        statusHukum: "Wajib Haji",
        kegiatanUtama: "Melontar 7 Kerikil ke Jumrah Aqabah",
        detail: [
            "Menuju tiang Jumrah Aqabah (Jumrah Kubra).",
            "Melempar 7 butir batu kerikil satu per satu.",
            "Hentikan bacaan Talbiyah saat mulai lemparan pertama."
        ],
        bacaan: {
            judulDoa: "Doa Melontar Batu",
            arab: "بِسْمِ اللهِ وَاللهُ أَكْبَرُ",
            latin: "Bismillāhi wallāhu akbar.",
            arti: "Dengan nama Allah, dan Allah Maha Besar."
        }
    },
    {
        id: "mina-tahallul-awal",
        hari: "10 Dzulhijjah",
        lokasi: "Tenda Mina",
        judul: "Tahallul Awal (Cukur Rambut)",
        statusHukum: "Wajib / Rukun Haji",
        kegiatanUtama: "Mencukur Rambut & Ganti Pakaian",
        detail: [
            "Mencukur gundul (pria) atau memotong sebagian rambut (minimal 3 helai).",
            "Lepas kain ihram dan berganti pakaian biasa.",
            "Bebas dari larangan ihram, kecuali hubungan suami istri."
        ],
        bacaan: null
    },
    {
        id: "tasyrik-mabit",
        hari: "11, 12, (13) Dzulhijjah",
        lokasi: "Tenda Mina",
        judul: "Mabit Hari Tasyrik",
        statusHukum: "Wajib Haji",
        kegiatanUtama: "Bermalam di Perkemahan Mina",
        detail: [
            "Bermalam di Mina pada malam ke-11 dan ke-12 (dan malam ke-13 jika Nafar Tsani).",
            "Memperbanyak dzikir, shalat jamaah, dan menjaga stamina."
        ],
        bacaan: null
    },
    {
        id: "tasyrik-jumrah-tiga",
        hari: "11, 12, (13) Dzulhijjah",
        lokasi: "Jamarat (Mina)",
        judul: "Melontar 3 Jumrah",
        statusHukum: "Wajib Haji",
        kegiatanUtama: "Lontar Ula, Wustha, & Aqabah",
        detail: [
            "Dilakukan setiap sore (ba'da Dzuhur).",
            "Melontar 7 kerikil di Jumrah Ula, lalu berdoa menghadap Kiblat.",
            "Melontar 7 kerikil di Jumrah Wustha, lalu berdoa menghadap Kiblat.",
            "Melontar 7 kerikil di Jumrah Aqabah, lalu langsung jalan berlalu."
        ],
        bacaan: {
            judulDoa: "Bacaan Setiap Lemparan",
            arab: "بِسْمِ اللهِ وَاللهُ أَكْبَرُ",
            latin: "Bismillāhi wallāhu akbar.",
            arti: "Dengan nama Allah, dan Allah Maha Besar."
        }
    },
    {
        id: "tasyrik-nafar",
        hari: "12 / 13 Dzulhijjah",
        lokasi: "Mina ke Mekkah",
        judul: "Penyelesaian Nafar (Awal/Tsani)",
        statusHukum: "Pilihan Wajib Haji",
        kegiatanUtama: "Kembali ke Kota Mekkah",
        detail: [
            "Nafar Awal: Meninggalkan Mina tanggal 12 Dzulhijjah sebelum maghrib.",
            "Nafar Tsani: Bermalam satu malam lagi & melontar jumrah tgl 13 Dzulhijjah.",
            "Kembali ke hotel di Mekkah."
        ],
        bacaan: null
    },
    {
        id: "mekkah-ifadhah-sai",
        hari: "Penyempurnaan Haji",
        lokasi: "Masjidil Haram",
        judul: "Tawaf Ifadhah & Sa'i Haji",
        statusHukum: "Rukun Haji",
        kegiatanUtama: "Mengelilingi Ka'bah 7x & Sa'i Shofa-Marwah",
        detail: [
            "Melaksanakan Tawaf Ifadhah 7 putaran mengelilingi Ka'bah.",
            "Shalat 2 rakaat di belakang Maqam Ibrahim.",
            "Melaksanakan Sa'i antara Shofa dan Marwah sebanyak 7 kali."
        ],
        bacaan: null
    },
    {
        id: "mekkah-tahallul-tsani",
        hari: "Penyempurnaan Haji",
        lokasi: "Masjidil Haram",
        judul: "Tahallul Tsani / Thani",
        statusHukum: "Penyempurna Rukun",
        kegiatanUtama: "Penyelesaian Seluruh Larangan Ihram",
        detail: [
            "Selesai Tawaf Ifadhah dan Sa'i, jamaah mencapai Tahallul Tsani.",
            "Seluruh larangan ihram gugur penuh (termasuk hubungan suami istri).",
            "Rangkaian utama ibadah haji selesai."
        ],
        bacaan: null
    }
];

/**
 * Fungsi untuk memproses dan menampilkan data kartu puncak haji secara aman
 * @param {Array} dataRute - Array objek rute puncak haji
 */
function jalankanPuncakHaji(dataRute) {
    try {
        // Validasi Array dan Null/Undefined
        if (!dataRute || !Array.isArray(dataRute) || dataRute.length === 0) {
            console.error("Error: Data rute puncak haji kosong atau format tidak valid.");
            return;
        }

        console.log("==========================================");
        console.log("    SIMULASI PUNCAK HAJI & TARWIYAH       ");
        console.log("==========================================\n");

        dataRute.forEach((fase, index) => {
            // Pengecekan keamanan objek
            if (typeof fase !== 'object' || fase === null) return;

            console.log(`[KARTU #${index + 1}: ${fase.judul || 'Aktivitas'}]`);
            console.log(`Hari / Waktu : ${fase.hari || '-'}`);
            console.log(`Lokasi       : ${fase.lokasi || '-'}`);
            console.log(`Hukum        : ${fase.statusHukum || '-'}`);
            console.log(`Kegiatan     : ${fase.kegiatanUtama || '-'}`);

            if (Array.isArray(fase.detail) && fase.detail.length > 0) {
                console.log("Instruksi:");
                fase.detail.forEach((instruksi, i) => {
                    console.log(`  ${i + 1}. ${instruksi}`);
                });
            }

            // Validasi keberadaan objek bacaan doa
            if (fase.bacaan && typeof fase.bacaan === 'object') {
                console.log(" Bacaan / Doa:");
                console.log(`  Judul : ${fase.bacaan.judulDoa || '-'}`);
                console.log(`  Arab  : ${fase.bacaan.arab || '-'}`);
                console.log(`  Latin : ${fase.bacaan.latin || '-'}`);
                console.log(`  Arti  : ${fase.bacaan.arti || '-'}`);
            }

            console.log("------------------------------------------");
        });

        console.log("\nAlhamdulillah, seluruh data kartu aktivitas puncak haji berhasil dimuat.");
    } catch (err) {
        console.error("Terjadi kesalahan saat memproses rute puncak haji:", err.message);
    }
}

// Eksekusi Program
try {
    jalankanPuncakHaji(rutePuncakHaji);
} catch (error) {
    console.error("Terjadi kesalahan fatal pada sistem puncak haji:", error.message);
}
