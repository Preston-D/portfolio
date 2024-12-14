const nav = document.getElementsByClassName("nav-side-left")[0];
const navButton = document.getElementsByClassName("nav-control")[0];

function moveNav() {
  console.log(navButton.innerHTML);
  if (navButton.innerHTML == "&gt;") {
    // move nav in
    navButton.innerHTML = "&lt;";
    nav.classList.remove("nav-out-js");
    nav.classList.add("nav-in-js");
    console.log("in");
  } else {
    // move nav out
    navButton.innerHTML = "&gt;";
    nav.classList.remove("nav-in-js");
    nav.classList.add("nav-out-js");
    console.log("out");
  }
}
