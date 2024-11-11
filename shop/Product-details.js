// JavaScript for handling the size chart modal
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("size-chart");
  const sizeChartLink = document.querySelector(".size-chart-link");
  const closeBtn = document.querySelector(".close");

  sizeChartLink.addEventListener("click", function (event) {
    event.preventDefault();
    modal.style.display = "flex";
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});
// JavaScript for handling thumbnail click to display a larger version in the main image
function changeMainImage(thumbnail) {
  const mainImage = document.getElementById("main-image");
  mainImage.src = thumbnail.src;
}

