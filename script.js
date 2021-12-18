// coded by SabWaFei
//selectors
let mobileNavLinks = document.querySelector(".nav-links");
let navButton = document.querySelector(".toggle");

// toggles mobile nav menu on/off
navButton.addEventListener("click", () => {
  if (navButton.classList.contains("fa-bars")) {
    //toggle icon
    navButton.classList.replace("fa-bars", "fa-times");
    //display nav menu
    mobileNavLinks.style.display = "block";
  } else {
    navButton.classList.replace("fa-times", "fa-bars");
    mobileNavLinks.style.display = "none";
  }
});
