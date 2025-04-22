document.getElementById('login-button').onclick = function () {
    // Obtener los valores ingresados por el usuario
    const username = document.querySelector('.input-group input[type="text"]').value;
    const password = document.querySelector('.input-group input[type="password"]').value;

    // Validar las credenciales
    if (username === 'David' && password === '12345') {
        alert('Inicio de sesión exitoso');
        window.location.href = '../dashboard/dashboard_index.html'; // Cambia a la página de destino después del login
    } else {
        alert('Usuario o contraseña incorrectos');
    }
};

document.getElementById('register-button').onclick = function () {
    window.location.href = '../register/register_index.html'; // Cambia a la página de registro
};

// Mostrar u ocultar la contraseña
document.querySelector('.icon-right').addEventListener('click', function () {
    // Selecciona el campo de contraseña dentro del mismo contenedor
    const passwordInput = this.closest('.input-group').querySelector('input[type="password"], input[type="text"]');
    const eyeIcon = this.querySelector('.eye-icon'); // Selecciona la imagen del ícono

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'; // Cambia a texto para mostrar la contraseña
        eyeIcon.src = 'hide.png'; // Cambia al ícono de "ocultar"
        eyeIcon.alt = 'Ocultar contraseña';
    } else {
        passwordInput.type = 'password'; // Cambia a contraseña para ocultarla
        eyeIcon.src = 'view.png'; // Cambia al ícono de "mostrar"
        eyeIcon.alt = 'Mostrar contraseña';
    }
});