// actualizaciondatos_script.js

document.addEventListener('DOMContentLoaded', function () {
    // Validación de contraseñas en tiempo real
    document.getElementById('confirmPassword').addEventListener('input', function () {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const errorMessage = document.getElementById('error-message');

        if (password !== confirmPassword) {
            errorMessage.style.display = 'block';
            errorMessage.textContent = 'Las contraseñas no coinciden.';
        } else {
            errorMessage.style.display = 'none';
        }
    });

    // Validación y redirección al enviar el formulario
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita el envío por defecto

        // Obtén todos los campos requeridos
        const documentType = document.getElementById('documentType');
        const documentNumber = document.getElementById('documentNumber');
        const email = document.getElementById('email');
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const address = document.getElementById('address');
        const terms = document.getElementById('terms');
        const errorMessage = document.getElementById('error-message');

        // Validación de campos vacíos
        if (!documentType.value) {
            errorMessage.style.display = 'block';
            errorMessage.textContent = 'Seleccione el tipo de documento.';
            documentType.focus();
            return;
        }
        if (!documentNumber.value) {
            errorMessage.style.display = 'block';
            errorMessage.textContent = 'Ingrese el número de documento.';
            documentNumber.focus();
            return;
        }
        if (!email.value) {
            errorMessage.style.display = 'block';
            errorMessage.textContent = 'Ingrese su correo electrónico.';
            email.focus();
            return;
        }
        if (!password) {
            errorMessage.style.display = 'block';
            errorMessage.textContent = 'Ingrese una contraseña.';
            document.getElementById('password').focus();
            return;
        }
        if (!confirmPassword) {
            errorMessage.style.display = 'block';
            errorMessage.textContent = 'Confirme su contraseña.';
            document.getElementById('confirmPassword').focus();
            return;
        }
        if (password !== confirmPassword) {
            errorMessage.style.display = 'block';
            errorMessage.textContent = 'Las contraseñas no coinciden.';
            document.getElementById('confirmPassword').focus();
            return;
        }
        if (!address.value) {
            errorMessage.style.display = 'block';
            errorMessage.textContent = 'Ingrese su dirección.';
            address.focus();
            return;
        }
        if (!terms.checked) {
            errorMessage.style.display = 'block';
            errorMessage.textContent = 'Debe aceptar los Términos y Condiciones.';
            terms.focus();
            return;
        }

        errorMessage.style.display = 'none';
        // Redirige a la página de confirmación de actualización de datos
        window.location.href = '../confirmacion de actualizacion datos/actualizardatos_index.html';
    });

    // Redirección de botones de header
    const inicioButton = document.querySelector('.volver-button');
    if (inicioButton) {
        inicioButton.onclick = function () {
            window.location.href = '../dashboard/dashboard_index.html';
        };
    }

    const closeButton = document.querySelector('.close-button');
    if (closeButton) {
        closeButton.onclick = function () {
            window.location.href = '../login/login.html';
        };
    }
});