// actualizaciondatos_script.js

document.getElementById('confirmPassword').addEventListener('input', function () {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('error-message');

    if (password !== confirmPassword) {
        errorMessage.style.display = 'block'; // Muestra el mensaje de error
        errorMessage.textContent = 'Las contraseñas no coinciden.'; // Mensaje de error
    } else {
        errorMessage.style.display = 'none'; // Oculta el mensaje de error
    }
});

document.getElementById('submit-button').addEventListener('click', function () {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('error-message');

    if (password !== confirmPassword) {
        errorMessage.style.display = 'block'; // Muestra el mensaje de error
        errorMessage.textContent = 'Las contraseñas no coinciden.'; // Mensaje de error
    } else {
        errorMessage.style.display = 'none'; // Oculta el mensaje de error
        alert('Formulario enviado correctamente');
        // Aquí puedes enviar el formulario o realizar otras acciones
    }
});