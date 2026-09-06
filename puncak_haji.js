/**
 * Nama File: puncak_haji.js
 * Fungsi: Sistem Simulasi Puncak Haji (Arafah, Muzdalifah, Mina) & Thawaf Wada'
 * Bahasa: JavaScript (ES6+)
 */

// Data urutan puncak haji dalam bentuk Array of Objects
const rutePuncakHaji = [
    {
        id: "arafah",
        lokasi: "Padang Arafah",
        waktu: "9 Dzulhijjah (Ba'da Dzuhur hingga Maghrib)",
        kegiatan Utama: "Wukuf",
        detail: [
            "Mendengarkan Khutbah Wukuf.",
            "Melaksanakan Shalat Jamak Taqdim Qashar (Dzuhur & Ashar).",
            "Memperbanyak dzikir, doa, dan membaca Al-Qur'an hingga matahari terbenam."
        ]
    },
    {
        id: "muzdalifah",
        lokasi: "Muzdalifah",
        waktu: "Malam 10 Dzulhijjah",
        kegiatanUtama: "Mabit (Bermalam) & Mencari Kerikil",
        detail: [
            "Melaksanakan Shalat Jamak Takhir Qashar (Maghrib & Isya).",
            "Beristirahat (Mabit) hingga lewat tengah malam.",
            "Mengumpulkan batu kerikil untuk melempar jumrah (minimal 7, maksimal 70 batu)."
        ]
    },
    {
        id: "mina",
        lokasi: "Tenda Mina & Jamarat",
        waktu: "10 - 13 Dzulhijjah",
        kegiatanUtama: "Melempar Jumrah & Mabit",
        detail: [
            "10 Dzulhijjah: Melempar Jumrah Aqobah (7 batu), lalu Tahallul Awal (Cukur rambut).",
            "11 Dzulhijjah: Melempar Jumrah Ula, Wustha, dan Aqobah (masing-masing 7 batu).",
            "12/13 Dzulhijjah: Melanjutkan lempar ketiga jumrah (Nafar Awal/Tsani), lalu Tahallul Tsani."
        ]
    },
    {
        id: "wada",
        lokasi: "Masjidil Haram",
        waktu: "Sebelum meninggalkan Makkah",
        kegiatanUtama: "Thawaf Wada' (Thawaf Perpisahan)",
        detail: [
            "Melaksanakan thawaf 7 putaran sebagai penghormatan terakhir kepada Baitullah.",
            "Tidak ada Sa'i setelah Thawaf Wada'.",
            "Segera meninggalkan Makkah setelah selesai."
        ]
    }
];

/**
 * Fungsi untuk memproses tahapan puncak haji berurutan
 * @param {Array} dataRute - Array objek rute puncak haji
 */
function jalankanPuncakHaji(dataRute) {
    // Validasi Array dan Null/Undefined
    if (!dataRute || !Array.isArray(dataRute) || dataRute.length === 0) {
        console.error("Error: Data rute puncak haji kosong atau format tidak valid.");
        return;
    }

    console.log("==========================================");
    console.log("       MEMASUKI FASE PUNCAK HAJI          ");
    console.log("==========================================\n");

    dataRute.forEach((fase, index) => {
        // Pengecekan aman untuk setiap objek fase
        if (typeof fase !== 'object' || !fase.lokasi) return;

        console.log(`[HARI KE-${index + 1}: ${fase.lokasi}]`);
        console.log(`Waktu   : ${fase.waktu || 'Tidak ditentukan'}`);
        console.log(`Kegiatan: ${fase.kegiatanUtama || 'Tidak ditentukan'}`);
        
        if (Array.isArray(fase.detail) && fase.detail.length > 0) {
            console.log("Instruksi Ibadah:");
            fase.detail.forEach((instruksi, i) => {
                console.log(`  ${i + 1}. ${instruksi}`);
            });
        }
        console.log("------------------------------------------");
    });

    console.log("\nAlhamdulillah, rangkaian ibadah haji telah selesai secara sempurna.");
}

// Eksekusi Program dengan try-catch
try {
    jalankanPuncakHaji(rutePuncakHaji);
} catch (error) {
    console.error("Terjadi kesalahan fatal pada sistem puncak haji:", error.message);
}
