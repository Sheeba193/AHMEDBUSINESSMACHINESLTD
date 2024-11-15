document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const closeToggle = document.querySelector(".close-toggle");
    const sidebar = document.getElementById("sidebar");

    // Toggle sidebar visibility
    function openSidebar() {
        sidebar.classList.add("sidebar-open");
        closeToggle.style.display = "block"; // Show close button
        menuToggle.style.display = "none";   // Hide menu button
    }

    function closeSidebar() {
        sidebar.classList.remove("sidebar-open");
        closeToggle.style.display = "none";  // Hide close button
        menuToggle.style.display = "block";  // Show menu button
    }

    // Event listeners for opening and closing sidebar
    menuToggle.addEventListener("click", openSidebar);
    closeToggle.addEventListener("click", closeSidebar);

    // Close sidebar when clicking outside of it
    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !menuToggle.contains(event.target) && !closeToggle.contains(event.target)) {
            closeSidebar();
        }
    });
});

// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

