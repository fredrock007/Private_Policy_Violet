(function () {
  "use strict";

  var menuButton = document.querySelector(".menu-toggle");
  var sectionNav = document.querySelector("#section-nav");
  var year = document.querySelector("#current-year");

  if (year) year.textContent = String(new Date().getFullYear());

  if (menuButton && sectionNav) {
    menuButton.addEventListener("click", function () {
      var open = sectionNav.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.querySelector(".visually-hidden").textContent = open
        ? "Close policy navigation"
        : "Open policy navigation";
    });

    sectionNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        sectionNav.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.querySelector(".visually-hidden").textContent = "Open policy navigation";
      });
    });
  }
})();
