const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);

// Track mouse movement and update cursor position
document.addEventListener("mousemove", (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
});

// Add hover effect on major headings
document.querySelectorAll("h1, h2").forEach((heading) => {
    heading.addEventListener("mouseenter", () => {
        cursor.style.transform = "scale(1.2) rotate(-10deg)";
    });
    heading.addEventListener("mouseleave", () => {
        cursor.style.transform = "scale(1) rotate(-15deg)";
    });
});

// Ensure smooth transitions
cursor.style.transition = "transform 0.1s ease, left 0.05s linear, top 0.05s linear";

document.addEventListener("DOMContentLoaded", function () {
    const byeText = document.querySelector(".bye");

    if (byeText) {
        byeText.addEventListener("mouseenter", function () {
            byeText.style.transform = "rotate(-5deg) scale(1.1)";
            byeText.style.transition = "0.3s ease";
        });

        byeText.addEventListener("mouseleave", function () {
            byeText.style.transform = "rotate(0deg) scale(1)";
        });
    }

    // Fullscreen Image View (For Branding Section, Landscape Illustrations & Posters)
    const images = document.querySelectorAll(".landscape-item img, .image-item img, #package-design img, #club-posters img, .illustration-showcase-grid img");
    let modal = document.querySelector(".fullscreen-modal");
    let modalImage, closeButton, nextButton, prevButton;

    let currentIndex = 0;

    // Check if modal already exists, otherwise create it
    if (!modal) {
        modal = document.createElement("div");
        modal.classList.add("fullscreen-modal");

        modalImage = document.createElement("img");

        closeButton = document.createElement("button");
        closeButton.classList.add("close-btn");
        closeButton.innerHTML = "✖";

        nextButton = document.createElement("button");
        nextButton.classList.add("next-btn", "nav-btn");
        nextButton.innerHTML = "❯";

        prevButton = document.createElement("button");
        prevButton.classList.add("prev-btn", "nav-btn");
        prevButton.innerHTML = "❮";

        modal.appendChild(modalImage);
        modal.appendChild(closeButton);
        modal.appendChild(nextButton);
        modal.appendChild(prevButton);
        document.body.appendChild(modal);
    } else {
        modalImage = modal.querySelector("img");
        closeButton = modal.querySelector(".close-btn");
        nextButton = modal.querySelector(".next-btn");
        prevButton = modal.querySelector(".prev-btn");
    }

    // Image click functionality
    images.forEach((image, index) => {
        image.addEventListener("click", () => {
            currentIndex = index;
            updateModalImage();
            modal.style.display = "flex";
        });
    });

    // Function to update modal image
    function updateModalImage() {
        modalImage.src = images[currentIndex].src;
    }

    // Close modal functionality
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Next and Previous Button Functionality
    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateModalImage();
    });

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateModalImage();
    });
});
