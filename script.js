
// 
const cards = document.querySelectorAll('.service-card');
const section = document.getElementById('services');
const header = document.getElementById('header')
let activeIndex = 0;  // Default highlight on first card

// Function to activate a specific card
function activateCard(index) {
    cards.forEach((card, i) => {
        if (i === index) {
            card.style.backgroundColor = "#FF014F";

            // Make all text & icons white
            card.querySelectorAll("p, h1, i").forEach(el => {
                el.style.color = "white";
            });

        } else {
            card.style.backgroundColor = "transparent";

            // Other cards return to default color
            card.querySelectorAll("p, h1, i").forEach(el => {
                el.style.color = "#777777";
            });
        }
    });
}

// Default: first card active
activateCard(0);

// Handle card hover
cards.forEach((card, i) => {
    card.addEventListener("mouseenter", () => {
        activeIndex = i;
        activateCard(i);
    });
});

// When leaving whole section, return highlight to first card
section.addEventListener("mouseleave", () => {
    activeIndex = 0;
    activateCard(0);
});

function scrolly() {
    if (window.scrollY > 10) {
        header.classList.remove(absolute);
    } else {

    }
}

// WORD ADD AND REMOVE EFFECT
const words = [
    "WEB DEVELOPER!",
    "WEB DESIGNER!"
];

let i = 0;
const el = document.getElementById("heroText");

function rotateText() {

    // 1 — fade out + slide left (same as template)
    // el.classList.add("opacity-0", "-translate-x-10");

    setTimeout(() => {

        // 2 — update text while hidden
        i = (i + 1) % words.length;
        el.textContent = words[i];

        // instantly jump to right for entrance
        el.classList.add("translate-x-10");

        // 3 — then fade-in + slide to center
        setTimeout(() => {
            el.classList.remove("opacity-0", "-translate-x-10", "translate-x-10");
        }, 40);

    }, 700); // same duration as Tailwind transition
}

setInterval(rotateText, 2000); // every 2 seconds (you can change)

// card hover effect
const card = document.querySelectorAll(".card");

card.forEach(card => {
    card.addEventListener("mousemove", function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        let angle = Math.atan2(y, x) * (180 / Math.PI);
        angle = (angle + 360) % 360;

        this.style.setProperty("--start", angle);
    });
});




// Select all nav links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-[#FF014F]');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('text-[#FF014F]');
        }
    });
});

// Back to top
const backToTop = document.getElementById("backToTop");
const homeSection = document.getElementById("Home");

// Show/hide button based on scroll position
window.addEventListener("scroll", () => {
    const rect = homeSection.getBoundingClientRect();

    // When bottom of Home section goes above the viewport → show button
    if (rect.bottom < 0) {
        backToTop.classList.remove("hidden");
    } else {
        backToTop.classList.add("hidden");
    }
});

// Smooth scroll back to Home
backToTop.addEventListener("click", () => {
    document.querySelector("#Home").scrollIntoView({
        behavior: "smooth"
    });
});


