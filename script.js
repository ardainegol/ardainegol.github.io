document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-links");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("nav-active");
      toggle.classList.toggle("open");
    });

    const navLinks = nav.querySelectorAll("a");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
          nav.classList.remove("nav-active");
          toggle.classList.remove("open");
        }
      });
    });
  }
});
