// =====================================================
// UNIVERSAL FOOTER - AUTO INJECT ON ALL PAGES
// =====================================================

function buildFooter() {
  const year = new Date().getFullYear();

  const footerHTML = `
    <footer class="site-footer">
      <div class="footer-inner">

        <div class="footer-copy">
          © ${year} <strong>ANKUR ENTERPRISES</strong>
        </div>

        <div class="footer-links">
          <a href="./index.html">Home</a>
          <a href="./about.html">About</a>
          <a href="./contactus.html">Contact</a>
          <a href="./payment.html">Payment</a>
        </div>

        <div class="footer-actions">
          <button id="themeToggle">🌙 Dark</button>
        </div>

      </div>
    </footer>
  `;

  document.body.insertAdjacentHTML("beforeend", footerHTML);

  // Theme toggle
  const btn = document.getElementById("themeToggle");
  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    btn.innerText = document.body.classList.contains("dark-mode")
      ? "☀️ Light"
      : "🌙 Dark";
  });
}

document.addEventListener("DOMContentLoaded", buildFooter);
