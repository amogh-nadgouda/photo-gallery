const items = document.querySelectorAll(".grid-item");

items.forEach((item) => {
  const min = 200;
  const max = 350;
  const width = Math.floor(Math.random() * (max - min + 1)) + min;
  // const height = Math.floor(Math.random() * (max - min + 1)) + min;

  item.style.width = `350px`;
  // item.style.height = `${height}px`;
});

window.addEventListener("load", function () {
  new Masonry(".grid", {
    itemSelector: ".grid-item",
    columnWidth: ".grid-sizer",
    //gutter: 5,
    //horizontalOrder: true,
    //fitWidth: true,
  });
});

// Lightbox functionality
document.querySelectorAll(".grid-item img").forEach((img) => {
  img.addEventListener("click", () => {
    basicLightbox
      .create(
        `<img src="${img.src}" style="max-width:100%; max-height:90vh;" />`
      )
      .show();
  });
});
