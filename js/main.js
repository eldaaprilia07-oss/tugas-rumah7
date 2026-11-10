const tombolTema = document.getElementById("tombolTema");

tombolTema.addEventListener("click", function () {
    document.body.classList.toggle("mode-gelap");

    if (document.body.classList.contains("mode-gelap")) {
        tombolTema.innerHTML = "Mode Terang";
    } else {
        tombolTema.innerHTML = "Mode Gelap";
    }
});
// 1. DAFTAR KEAHLIAN
const skills = [
    { nama: "HTML", level: "Menengah" },
    { nama: "CSS", level: "Menengah" },
    { nama: "Git dan GitHub", level: "Dasar" },
    { nama: "Desain poster dengan Canva", level: "Mahir" }
];

skills.push({ nama: "JavaScript", level: "Dasar" });

const daftarSkill = document.querySelector("#daftar-skill");
const jumlahSkill = document.querySelector("#jumlah-skill");

if (daftarSkill && jumlahSkill) {
    skills.forEach((skill) => {
        const item = document.createElement("li");
        item.textContent = `${skill.nama} (${skill.level})`;
        daftarSkill.appendChild(item);
    });

    jumlahSkill.textContent =
        `Ada ${skills.length} keahlian yang sedang saya kembangkan.`;
}// 3. PENGHITUNG KARAKTER
const kotakPesan = document.querySelector("#pesan");
const hitungKarakter = document.querySelector("#hitung-karakter");

if (kotakPesan && hitungKarakter) {
    kotakPesan.addEventListener("input", () => {
        hitungKarakter.textContent =
            `${kotakPesan.value.length}/300 karakter`;
    });
}


// 4. DATA ENAM PROYEK
const proyek = [
    {
        judul: "Halaman Profil Pertama",
        kategori: "HTML",
        gambar: "img/Screenshot 2026-10-25 184033.png",
        alt: "Tangkapan layar halaman profil",
        deskripsi: "Halaman web pertama saya yang dibuat dengan HTML dasar."
    },
    {
        judul: "Form Kontak",
        kategori: "HTML",
        gambar: "img/Screenshot kontak.png",
        alt: "Tangkapan layar form kontak",
        deskripsi: "Form kontak dengan label dan validasi bawaan browser."
    },
    {
        judul: "Tabel Jadwal Belajar",
        kategori: "HTML",
        gambar: "img/Screenshot tabel.png",
        alt: "Tangkapan layar tabel jadwal belajar",
        deskripsi: "Jadwal belajar mingguan menggunakan tabel HTML."
    },
    {
        judul: "Portofolio Responsif",
        kategori: "CSS",
        gambar: "img/portofolio responsif.png",
        alt: "Tangkapan layar portofolio responsif",
        deskripsi: "Website yang menyesuaikan tampilan ponsel dan laptop."
    },
    {
        judul: "Kalkulator Nilai Rapor",
        kategori: "JavaScript",
        gambar: "img/proyek kalkulator.png",
        alt: "Tangkapan layar kalkulator nilai",
        deskripsi: "Program untuk menghitung rata-rata dan predikat nilai."
    },
    {
        judul: "Lima Soal Logika",
        kategori: "JavaScript",
        gambar: "img/proyek logika.png",
        alt: "Tangkapan layar latihan logika",
        deskripsi: "Lima fungsi logika yang dibuat menggunakan JavaScript."
    }
];


// 5. MENAMPILKAN KARTU PROYEK
const daftarProyek = document.querySelector("#daftar-proyek");
const jumlahProyek = document.querySelector("#jumlah-proyek");

function buatKartu(item) {
    return `
        <article class="kartu">
            <span class="label">${item.kategori}</span>
            <h3>${item.judul}</h3>
            <img src="${item.gambar}" alt="${item.alt}" width="280">
            <p>${item.deskripsi}</p>
        </article>
    `;
}

function tampilkanProyek(daftar) {
    if (!daftarProyek || !jumlahProyek) return;

    const semuaKartu = daftar.map((item) => buatKartu(item));

    daftarProyek.innerHTML = semuaKartu.join("");

    jumlahProyek.textContent =
        `Menampilkan ${daftar.length} dari ${proyek.length} proyek`;
}


// 6. FILTER PROYEK DAN TOMBOL AKTIF
function pasangFilter(idTombol, kategori) {
    const tombol = document.querySelector(idTombol);

    if (!tombol) return;

    tombol.addEventListener("click", () => {
        const tombolAktif = document.querySelector(".tombol-filter.aktif");

        if (tombolAktif) {
            tombolAktif.classList.remove("aktif");
        }

        tombol.classList.add("aktif");

        if (kategori === "Semua") {
            tampilkanProyek(proyek);
        } else {
            const hasilFilter = proyek.filter((item) => {
                return item.kategori === kategori;
            });

            tampilkanProyek(hasilFilter);
        }
    });
}


// Jalankan filter hanya pada halaman Proyek
if (daftarProyek && jumlahProyek) {
    tampilkanProyek(proyek);

    pasangFilter("#filter-semua", "Semua");
    pasangFilter("#filter-html", "HTML");
    pasangFilter("#filter-css", "CSS");
    pasangFilter("#filter-javascript", "JavaScript");
}