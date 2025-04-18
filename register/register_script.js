document.querySelector("form").addEventListener("submit", function(e) {
    const form = e.target;
    let isValid = true;
  
    // Oculta todos los mensajes de error antes de validar
    const errorMessages = form.querySelectorAll(".error-message");
    errorMessages.forEach(msg => msg.style.display = "none");
  
    // Verifica cada input requerido
    form.querySelectorAll("input, select").forEach(field => {
      const errorSpan = field.parentElement.querySelector(".error-message");
  
      if (!field.checkValidity()) {
        isValid = false;
        if (errorSpan) errorSpan.style.display = "block";
        field.classList.add("invalid");
      } else {
        if (errorSpan) errorSpan.style.display = "none";
        field.classList.remove("invalid");
      }
    });
  
    if (!isValid) {
      e.preventDefault(); // evita el envío si hay errores
    }
  });
  


  // Alterna la visibilidad de la contraseña
  const togglePassword = document.getElementById('togglePassword');
  const passwordInput = document.getElementById('contrasena');
  
  togglePassword.addEventListener('click', () => {
    // Alternar el tipo de input entre "password" y "text"
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
  
    // Cambiar el ícono del ojo
    togglePassword.classList.toggle('fa-eye-eye-slash');
  });