document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.getElementById("dropdown");
  const dropdownMenu = document.getElementById("dropdown-menu");

  let closeTimeout;

  dropdown.addEventListener("mouseenter", () => {
    clearTimeout(closeTimeout);
    dropdownMenu.style.display = "block";
  });

  dropdown.addEventListener("mouseleave", () => {
    closeTimeout = setTimeout(() => {
      dropdownMenu.style.display = "none";
    }, 4000);
  });
});
