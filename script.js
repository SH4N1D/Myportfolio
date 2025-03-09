document.addEventListener("DOMContentLoaded", function () {
    // Dark Mode Toggle
    const themeToggle = document.querySelector(".theme-toggle");
    const body = document.body;

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
    });

    // Set Initial Theme
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
    }

    // Spinner Fix: Hide Spinner After Page Loads
    window.onload = function () {
        const spinner = document.getElementById("spinner");
        if (spinner) {
            spinner.style.display = "none"; // Completely hide the spinner
        }
    };

    // Back to Top Button
    const backToTop = document.querySelector(".back-to-top");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
