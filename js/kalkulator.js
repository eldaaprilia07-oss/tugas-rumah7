
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    if (!form) {
        console.error("Form kalkulator tidak ditemukan!");
        return;
    }

    const inputs = form.querySelectorAll("input");

    if (inputs.length < 3) {
        console.error("Input nilai belum lengkap!");
        return;
    }

    // Membuat tempat untuk menampilkan hasil
    const hasil = document.createElement("div");
    hasil.id = "hasil-kalkulator";
    hasil.style.marginTop = "20px";
    form.appendChild(hasil);

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const tugas = Number(inputs[0].value);
        const uts = Number(inputs[1].value);
        const uas = Number(inputs[2].value);

        // Memeriksa input
        if (
            inputs[0].value === "" ||
            inputs[1].value === "" ||
            inputs[2].value === "" ||
            !Number.isFinite(tugas) ||
            !Number.isFinite(uts) ||
            !Number.isFinite(uas) ||
            tugas < 0 || tugas > 100 ||
            uts < 0 || uts > 100 ||
            uas < 0 || uas > 100
        ) {
            hasil.innerHTML = "<p>Masukkan nilai antara 0 sampai 100!</p>";
            return;
        }

        // Menghitung rata-rata
        const rataRata = (tugas + uts + uas) / 3;

        // Menentukan predikat
        let predikat;

        if (rataRata >= 90) {
            predikat = "A";
        } else if (rataRata >= 80) {
            predikat = "B";
        } else if (rataRata >= 70) {
            predikat = "C";
        } else {
            predikat = "D";
        }

        // Menentukan kelulusan
        const keterangan = rataRata >= 75
            ? "Lulus"
            : "Belum Lulus";

        // Menampilkan hasil
        hasil.innerHTML = `
            <h3>Hasil Perhitungan</h3>
            <p>Nilai Tugas: ${tugas}</p>
            <p>Nilai UTS: ${uts}</p>
            <p>Nilai UAS: ${uas}</p>
            <p>Rata-rata: ${rataRata.toFixed(2)}</p>
            <p>Predikat: ${predikat}</p>
            <p>Keterangan: ${keterangan}</p>
        `;
    });
});
