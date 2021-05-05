
/* This is a 
   Multi-line
   Comment
*/

// Comment
document.querySelector('h1').onclick = function () {
  alert('Whoa, watch where you poke me!');
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}