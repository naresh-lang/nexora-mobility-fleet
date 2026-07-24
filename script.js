/* ==========================================
   NEXORA MOBILITY FLEET
   script.js
========================================== */

// ================= PRELOADER =================

window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");

    if (preloader) {

        preloader.style.opacity = "0";

        setTimeout(() => {

            preloader.style.display = "none";

        }, 600);

    }

});

// ================= STICKY HEADER =================

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 80) {

        header.style.background = "rgba(0,0,0,0.97)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";

    } else {

        header.style.background = "rgba(0,0,0,.92)";
        header.style.boxShadow = "none";

    }

});

// ================= SCROLL TO TOP =================

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollBtn.style.display = "flex";

    } else {

        scrollBtn.style.display = "none";

    }

});

// ================= SMOOTH SCROLL =================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ================= COUNTER =================

const counters = document.querySelectorAll(".counter");

const speed = 200;

function startCounter() {

    counters.forEach(counter => {

        const update = () => {

            const target = +counter.getAttribute("data-target");

            const count = +counter.innerText;

            const increment = Math.ceil(target / speed);

            if (count < target) {

                counter.innerText = count + increment;

                setTimeout(update, 15);

            } else {

                counter.innerText = target.toLocaleString();

            }

        };

        update();

    });

}

const statSection = document.querySelector(".statistics");

let counterStarted = false;

window.addEventListener("scroll", () => {

    if (statSection && !counterStarted) {

        const top = statSection.offsetTop;

        if (window.scrollY + window.innerHeight > top + 100) {

            counterStarted = true;

            startCounter();

        }

    }

});

// ================= BOOKING FORM =================

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert(
            "Thank you for choosing Nexora Mobility Fleet!\n\nOur team will contact you shortly."
        );

        bookingForm.reset();

    });

}

// ================= ACTIVE MENU =================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ================= FADE ANIMATION =================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(
".service-card, .fleet-card, .mission-box, .why-card, .testimonial-card, .gallery-grid img"
).forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

// ================= CURRENT YEAR =================

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}