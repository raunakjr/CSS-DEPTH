const dropdown_menu = document.querySelector(".dropdown-menu");

dropdown_menu.addEventListener("click", () => {
  console.log("clicked");
  dropdown_menu.classList.toggle("open");
});
