// Initialize Masonry after images load
window.addEventListener("load", function () {
  new Masonry(".grid", {
    itemSelector: ".grid-item",
    columnWidth: ".grid-item",
    gutter: 10,
    percentPosition: true,
  });
});

// Elements
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

// Lightbox image click handler
document.querySelectorAll(".grid-item img").forEach((img) => {
  img.addEventListener("click", (e) => {
    e.stopPropagation();

    lightboxImg.src = img.src;
    lightboxImg.classList.remove("active");
    lightboxImg.style.display = "none";
    lightbox.style.display = "block";

    lightboxImg.onload = () => {
      const imgWidth = lightboxImg.naturalWidth;
      const imgHeight = lightboxImg.naturalHeight;

      const scale = Math.min(
        (window.innerWidth * 0.9) / imgWidth,
        (window.innerHeight * 0.9) / imgHeight,
        1
      );

      const scaledWidth = imgWidth * scale;
      const scaledHeight = imgHeight * scale;

      lightboxImg.style.width = `${scaledWidth}px`;
      lightboxImg.style.height = `${scaledHeight}px`;
      lightboxImg.style.left = `${e.clientX - scaledWidth / 2}px`;
      lightboxImg.style.top = `${e.clientY - scaledHeight / 2}px`;

      lightboxImg.style.display = "block";

      // Animate
      void lightboxImg.offsetWidth;
      lightboxImg.classList.add("active");
    };
  });
});

// Close on click outside image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

// Close on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightbox.style.display = "none";
  }
});
