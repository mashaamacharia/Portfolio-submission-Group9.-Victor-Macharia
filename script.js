document.addEventListener("DOMContentLoaded", () => {
    // Menu function
    function myMenuFunction() {
        var menuBtn = document.getElementById("myNavmenu");
        if (menuBtn.className === "nav-menu") {
            menuBtn.className += " responsive";
        } else {
            menuBtn.className = "nav-menu";
        }
    }

    // Dark mode toggle
    const body = document.querySelector("body");
    const toggleSwitch = document.getElementById("toggle-switch");
    toggleSwitch.addEventListener("click", () => {
        body.classList.toggle("dark");
    });

    // Typing effect
    const typingEffect = new Typed(".typedText", {
        strings: ["Developer", "AI Enthusiast", "Cloud Nerd"],
        loop: true,
        typeSpeed: 110,
        backSpeed: 80,
        backDelay: 2000
    });

    // Scroll reveal
    const sr = ScrollReveal({
        origin: "top",
        distance: "80px",
        duration: 200,
        reset: true,
    });

    sr.reveal(".featured-name", { delay: 200 });
    sr.reveal(".text-info", { delay: 200 });
    sr.reveal(".text-btn", { delay: 200 });
    sr.reveal(".social_icons", { delay: 100 });
    sr.reveal(".featured-image", { delay: 200 });
    sr.reveal(".project-box", { interval: 300 });
    sr.reveal(".top-header", {interval:400});

    const srLeft = ScrollReveal({
        origin: "left",
        distance: "80px",
        duration: 2000,
        reset: true,
    });
    srLeft.reveal(".about-info", { delay: 100 });
    srLeft.reveal(".contact-info", { delay: 100 });

    const srRight = ScrollReveal({
        origin: "right",
        distance: "80px",
        duration: 2000,
        reset: true,
    });
    srRight.reveal(".skill", { delay: 100 });
    srRight.reveal(".skill-box", { delay: 100 });
    srRight.reveal(".form-contro", { delay: 100 });

    // Scroll-active link highlighting
    const sections = document.querySelectorAll(".section[id]");

    function ScrollActive() {
        const scrollY = window.scrollY;

        sections.forEach((current) => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute("id");

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document
                    .querySelector(".nav-menu a[href*=" + sectionId + "]")
                    .classList.add("active-link");
            } else {
                document
                    .querySelector(".nav-menu a[href*=" + sectionId + "]")
                    .classList.remove("active-link");
            }
        });
    }

    // Trigger ScrollActive on scroll
    window.addEventListener("scroll", ScrollActive);

    // Optionally call ScrollActive on page load
    ScrollActive();
});
