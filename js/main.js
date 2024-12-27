const nav = document.getElementsByClassName("nav-side-left")[0];
const navButton = document.getElementsByClassName("nav-control")[0];
const svg_out = `
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 18L20 18"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M4 12L20 12"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M4 6L20 6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
`;

const svg_in = `
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12H19M5 12L11 6M5 12L11 18"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
`;

let is_nav_out = true; // strange but must be true at start

function moveNav() {
  if (is_nav_out) {
    // move nav in
    navButton.innerHTML = svg_in;
    nav.classList.remove("nav-out-js");
    nav.classList.add("nav-in-js");
    is_nav_out = false;
  } else {
    // move nav out
    navButton.innerHTML = svg_out;
    nav.classList.remove("nav-in-js");
    nav.classList.add("nav-out-js");
    is_nav_out = true;
  }
}
