// Wait until the DOM is ready
document.addEventListener("DOMContentLoaded", function () {
    // Load the navbar from navbar.html
    $("#navbar-placeholder").load("navbar.html", function () {
      // Once it's loaded, hook up the interactivity
      const toggle = document.getElementById("menu-toggle");
      const nav = document.getElementById("nav-links");
  
      if (toggle && nav) {
        // Toggle menu open/close
        toggle.addEventListener("click", function () {
          nav.classList.toggle("nav-active");
        });
  
        // Auto-close on link click (mobile only)
        const navLinks = nav.querySelectorAll("a");
        navLinks.forEach(link => {
          link.addEventListener("click", () => {
            if (window.innerWidth <= 768) {
              nav.classList.remove("nav-active");
            }
          });
        });
      }
    });
  });  