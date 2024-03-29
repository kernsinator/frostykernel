
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* Dark Mode toggle */


// Select the button
const btn = document.querySelector(".btn-toggle");
// Select the theme preference from localStorage
const currentTheme = localStorage.getItem("theme");

// If the current theme in localStorage is "dark"...
if (currentTheme == "dark") {
  // ...then use the .dark-theme class
  document.body.classList.add("dark-theme");
}

// Listen for a click on the button 
  function themeToggle() {
    // Toggle the .dark-theme class on e ach click
    document.body.classList.toggle("dark-theme");
    
// Let's say the theme is equal to light
    let theme = "light";
    // If the body contains the .dark-theme class...
    if (document.body.classList.contains("dark-theme")) {
      // ...then let's make the theme dark
      theme = "dark";
    }
  // Then save the choice in localStorage
  localStorage.setItem("theme", theme);
};