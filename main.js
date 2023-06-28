var header = document.getElementById("header-nav");
var navigationHeader = document.getElementById("nav");
var content = document.getElementById("main");
var showSidebar = false;

function toggleSidebar() {
  showSidebar = !showSidebar;
  if (showSidebar) {
    navigationHeader.style.margin = "260px";
    navigationHeader.style.marginLeft = "-1vw";
    navigationHeader.style.animationName = "showSidebar";
    content.style.filter = "blur(2px)";
  } else {
    navigationHeader.style.marginLeft = "-100vw";
    navigationHeader.style.animationName = "";
    content.style.filter = "";
  }
}

function closeSidebar() {
  if (showSidebar) {
    showSidebar = true;
    toggleSidebar();
  }
}

window.addEventListener("resize", function (event) {
  if (window.innerWidth > 768 && showSidebar) {
    showSidebar = true;
    toggleSidebar();
  }
});
