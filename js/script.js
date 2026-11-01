// js/script.js

        // Fungsi untuk menutup alert saat tombol (x) diklik
        function closeAlert() {
        const alertBox = document.getElementById('alert-box');
        alertBox.classList.add('hidden');
        }

            // 1. Logika Login (Hanya berjalan jika formLogin ada)
            document.addEventListener("DOMContentLoaded", function () {
            const formLogin = document.getElementById("formLogin");
            
            if (formLogin) {
                formLogin.addEventListener("submit", function (event) {
                event.preventDefault();
                
                const emailInput = document.getElementById("email").value;
                const passInput = document.getElementById("password").value;

                const penggunaSah = dataPengguna.find(function (user) {
                    return user.email === emailInput && user.password === passInput;
                });

                if (penggunaSah) {
                    // Simpan nama ke sessionStorage lalu pindah halaman
                    sessionStorage.setItem("namaPengguna", penggunaSah.nama);
                    window.location.href = "dashboard.html";
                } else {
                    const alertBox = document.getElementById('alert-box');
                    if (alertBox) alertBox.classList.remove('hidden');
                }
                });
            }
            });

            // 2. Fungsi Menampilkan Nama Pengguna
            function tampilkanNama() {
            // Ambil nama yang tersimpan dari sessionStorage
            const nama = sessionStorage.getItem("namaPengguna") || "Pengguna";
            const elNama = document.getElementById("namaPengguna");
            if (elNama) {
                elNama.textContent = nama;
            }
            }

            // 3. Inisialisasi Saat Halaman Dimuat
            window.onload = function() {
            paparGreeting();
            if (typeof muatStok === "function") muatStok();
            tampilkanNama(); // Sekarang membaca dari sessionStorage
            };

        // 4. Greeting Berdasarkan Waktu (Pagi/Siang/Sore/Malam) dan nama pengguna
        function paparGreeting() {
            const ucapanEl = document.getElementById("greeting");
            if(ucapanEl) {
                const jam = new Date().getHours();
                let ucapan = "Selamat ";
                if (jam >= 5 && jam < 12) ucapan += "pagi";
                else if (jam >= 12 && jam < 15) ucapan += "siang";
                else if (jam >= 15 && jam < 18) ucapan += "sore";
                else ucapan += "malam";
                
                ucapanEl.innerText = ucapan;
            }
        }

        // 5. Inisialisasi Apabila Halaman Dimuat
        window.onload = function() {
            paparGreeting();
            tampilkanNama();
        }

        // 6. DOM Event Listeners untuk Modal Box Lupa Password dan Daftar Akun
        document.addEventListener("click", function(e) {
        // Buka Modal
        if (e.target.closest("#btnLupaPassword")) {
            e.preventDefault();
            document.getElementById("modalLupaPassword")?.style.setProperty("display", "block");
        }
        if (e.target.closest("#btnDaftar")) {
            e.preventDefault();
            document.getElementById("modalDaftar")?.style.setProperty("display", "block");
        }

        // Tutup Modal Lupa Password
        if (e.target.closest("#tutupLupaPassword") || e.target.closest("#btnKirimLupaPassword")) {
            document.getElementById("modalLupaPassword")?.style.setProperty("display", "none");
        }

        // Tutup Modal Daftar
        if (e.target.closest("#tutupDaftar") || e.target.closest("#btnKirimDaftar")) {
            document.getElementById("modalDaftar")?.style.setProperty("display", "none");
        }
        });

