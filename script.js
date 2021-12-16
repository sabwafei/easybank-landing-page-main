// coded by SabWaFei
//selectors
let navLinkContainer = document.getElementById("nav-links-container");
let navButton = document.querySelector(".toggle");
let exitButton = document.querySelector("fa-times");
navButton.addEventListener("click", () => {
  if (navButton.classList.contains("fa-bars")) {
    //toggle icon
    navButton.classList.replace("fa-bars", "fa-times");
    //display nav menu
    navLinkContainer.style.display = "block";
  } else {
    navButton.classList.replace("fa-times", "fa-bars");
    navLinkContainer.style.display = "none";
  }
});
