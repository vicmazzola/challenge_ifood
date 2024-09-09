const loginForm = document.querySelector(".sign-in-form");
const signupForm = document.querySelector(".sign-up-form");

// Evento de submissão do formulário de login
loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita o comportamento padrão do formulário
  window.location.href = "home.html"; // Redireciona para a página home.html
});

// Evento de submissão do formulário de cadastro
signupForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita o comportamento padrão do formulário
  window.location.href = "home.html"; // Redireciona para a página home.html
});
