/* =====================================================
   GLOBAL JAVASCRIPT – ANVI COMPUTER
===================================================== */

"use strict";

/* ================= WHATSAPP ================= */
const WHATSAPP = "917007159332";

function openWhatsApp(msg = "Hello, I need help.") {
    const url =
        "https://wa.me/" +
        WHATSAPP +
        "?text=" +
        encodeURIComponent(msg);
    window.open(url, "_blank");
}

/* ================= SEARCH ================= */
function searchItems() {
    const input = document.getElementById("search");
    const cards = document.querySelectorAll("#autoCards .card");

    if (!input || !cards.length) return;

    const q = input.value.toLowerCase();

    cards.forEach(c => {
        const txt = c.innerText.toLowerCase();
        c.style.display = txt.includes(q) ? "flex" : "none";
    });
}

/* ================= LOAD HOME CARDS ================= */
document.addEventListener("DOMContentLoaded", () => {
    loadHomeCards();
});

function createHomeCard(title, icon, link) {
    return `
        <div class="card">
            <div class="card-icon">${icon}</div>
            <h3>${title}</h3>
            <a href="${link}" class="card-btn">More</a>
        </div>
    `;
}

function loadHomeCards() {
    const box = document.getElementById("autoCards");
    if (!box) return;

    let html = "";

    if (typeof formsList !== "undefined") {
        formsList.forEach(f => {
            html += createHomeCard(f.title, f.icon || "📄", f.link);
        });
    }

    if (typeof servicesList !== "undefined") {
        servicesList.forEach(s => {
            html += createHomeCard(s.title, s.icon || "🛠️", s.link);
        });
    }

    box.innerHTML = html;
}

/* ================= PAGE FADE ================= */
window.addEventListener("load", () => {
    const main = document.querySelector("main.content");
    if (!main) return;
    main.style.opacity = "0";
    main.style.transform = "translateY(15px)";
    setTimeout(() => {
        main.style.transition = "0.6s";
        main.style.opacity = "1";
        main.style.transform = "translateY(0)";
    }, 50);
});

/* ================= MOBILE FLIP ================= */
document.addEventListener("click", e => {
    const card = e.target.closest(".card-flip");
    if (!card) return;
    card.classList.toggle("active");
});
