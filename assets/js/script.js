
        window.addEventListener('scroll', function () {
            var navbar = document.querySelector('.navbar');
            if (window.scrollY > 20) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        window.addEventListener('scroll', function () {
            var navLinks = document.querySelectorAll('.navText');
            if (window.scrollY > 20) {
                navLinks.forEach(function (navlink) {
                    navlink.classList.remove('text-white');
                    navlink.classList.add('text-black');
                });
            } else {
                navLinks.forEach(function (navlink) {
                    navlink.classList.remove('text-black');
                    navlink.classList.add('text-white');
                });
            }
        });
        

        // Smooth scroll saat navbar item diklik
        document.querySelectorAll('.nav-link').forEach(item => {
            item.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                window.scrollTo({
                    top: targetSection.offsetTop - 60, // Agar tidak tertutup navbar
                    behavior: 'smooth'
                });

                // Tutup menu setelah klik (jika dalam mode mobile)
                let navbarToggler = document.querySelector('.navbar-toggler');
                let navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            });
        });

        // Animasi hamburger menu
        const navbarToggler = document.querySelector('.navbar-toggler');
        navbarToggler.addEventListener('click', function () {
            this.classList.toggle('open');
        });

        // Tutup hamburger menu jika klik di luar
        document.addEventListener('click', function (event) {
            let navbarCollapse = document.querySelector('.navbar-collapse');
            if (!navbarToggler.contains(event.target) && !navbarCollapse.contains(event.target)) {
                navbarToggler.classList.remove('open');
                navbarCollapse.classList.remove('show');
            }
        });

document.addEventListener("DOMContentLoaded", function () {
    // Ambil semua tombol dengan ID "btnScroll" (jika ID unik, pakai querySelector saja)
    const buyButtons = document.querySelectorAll("#btnScroll");
    const homeSection = document.querySelector("#home");

    buyButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            homeSection.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });
});