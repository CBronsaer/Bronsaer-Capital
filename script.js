document.addEventListener("DOMContentLoaded", () => {
  // Jaar in footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Active nav automatisch op basis van bestandsnaam
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();

  const map = {
    "index.html": "nav-home",
    "strategie.html": "nav-strategie",
    "intake.html": "nav-intake",
    "over.html": "nav-over",
    "disclaimer.html": "nav-disclaimer"
  };

  const id = map[path];
  if (id) {
    const el = document.getElementById(id);
    if (el) el.setAttribute("aria-current", "page");
  }
});
