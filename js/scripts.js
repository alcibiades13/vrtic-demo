// Sluzbe tabbing
// document.addEventListener("DOMContentLoaded", () => {
//   const tabs = document.querySelectorAll(".tab-link");
//   const contents = document.querySelectorAll(".sluzba-content");

//   tabs.forEach((tab) => {
//     tab.addEventListener("click", (e) => {
//       e.preventDefault();

//       tabs.forEach((t) => t.classList.remove("active"));
//       contents.forEach((content) => content.classList.remove("active"));

//       tab.classList.add("active");

//       const target = document.querySelector(tab.getAttribute("href"));
//       if (target) target.classList.add("active");
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger-menu");
  const nav = document.querySelector(".header-nav");

  // Toggle mobile menu on hamburger click
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    nav.classList.toggle("open");
  });

  // Close the mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    // Check if the click is outside the nav and hamburger
    if (!event.target.closest(".header-nav") && !event.target.closest("#hamburger-menu")) {
      hamburger.classList.remove("open");
      nav.classList.remove("open");
    }
  });

  // Dropdown toggling logic for navigation items
  const dropdownToggles = document.querySelectorAll(".nav-item.has-dropdown > a");

  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default link behavior

      const parentItem = toggle.parentElement;

      // Close other dropdowns
      document.querySelectorAll(".nav-item.has-dropdown").forEach((item) => {
        if (item !== parentItem) {
          item.classList.remove("open");
        }
      });

      // Toggle the clicked dropdown
      parentItem.classList.toggle("open");
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".nav-item.has-dropdown")) {
      document.querySelectorAll(".nav-item.has-dropdown").forEach((item) => {
        item.classList.remove("open");
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const closeLightbox = document.getElementById('closeLightbox');
    const swiperWrapper = document.querySelector('.swiper-wrapper');

    let swiper; // To hold the Swiper instance

    // Event listener for grid images
    document.querySelectorAll('.grid-image').forEach((image, index) => {
        image.addEventListener('click', () => {
            // Get all sibling images in the grid
            const grid = image.closest('.image-grid');
            const images = Array.from(grid.querySelectorAll('.grid-image'));

            // Populate swiper with images
            swiperWrapper.innerHTML = images.map(img => `
                <div class="swiper-slide">
                    <img src="${img.src}" alt="${img.alt}">
                </div>
            `).join('');

            // Open lightbox
            lightbox.classList.add('active');

            // Initialize or update Swiper
            if (!swiper) {
                swiper = new Swiper('.swiper', {
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    loop: true,
                });
            } else {
                swiper.update();
            }

            // Set Swiper to the clicked image index
            swiper.slideTo(index);
        });
    });

    // Close lightbox
    closeLightbox.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });
});
