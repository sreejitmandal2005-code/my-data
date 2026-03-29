function toggleMenu() {
  let menu = document.getElementById("menu");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

// Fullscreen Certificate
function openImage(img) {
  document.getElementById("popup").style.display = "flex";
  document.getElementById("popup-img").src = img.src;
}

function closeImage() {
  document.getElementById("popup").style.display = "none";
}