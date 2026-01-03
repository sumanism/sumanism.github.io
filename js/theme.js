(function () {
  const root = document.documentElement;

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    updateIcon(theme);
  }

  function updateIcon(theme) {
    const icon = document.querySelector("#themeToggle i");
    if (!icon) return;
    icon.className = theme === "light" ? "fas fa-sun" : "fas fa-moon";
  }

  function toggleTheme() {
    const current = root.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    applyTheme(savedTheme);

    const btn = document.getElementById("themeToggle");
    if (btn) {
      btn.addEventListener("click", toggleTheme);
    }
  });
})();
