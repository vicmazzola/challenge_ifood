// const loginForm = document.querySelector("#loginForm");
// const signupForm = document.querySelector("#signupForm");

// // Evento de submissão do formulário de login
// loginForm.addEventListener("submit", (event) => {
//   event.preventDefault(); // Evita o comportamento padrão do formulário
//   window.location.href = "home.html"; // Redireciona para a página home.html
// });

// // Evento de submissão do formulário de cadastro
// signupForm.addEventListener("submit", (event) => {
//   event.preventDefault(); // Evita o comportamento padrão do formulário
//   window.location.href = "home.html"; // Redireciona para a página home.html
// });


const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const loginForm = document.querySelector(".sign-in-form");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita o comportamento padrão de envio do formulário
  window.location.href = "home.html"; // Redireciona para home.html
});

//_________________________
// Get the sidebar element
var sidebar = document.getElementById("sidebar");

// Add an event listener to the window resize event
window.addEventListener("resize", function() {
  // Check if the window width is less than or equal to 768px
  if (window.innerWidth <= 768) {
    // Hide the sidebar
    sidebar.style.display = "none";
  } else {
    // Show the sidebar
    sidebar.style.display = "block";
  }
});
