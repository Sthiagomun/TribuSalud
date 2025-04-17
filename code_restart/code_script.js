// Mostrar u ocultar contraseñas
document.getElementById('toggle-passwords').addEventListener('change', function () {
    const newPassword = document.getElementById('new-password');
    const againNewPassword = document.getElementById('again-new-password');
    const type = this.checked ? 'text' : 'password'; // Cambia el tipo según el estado del checkbox
    newPassword.type = type;
    againNewPassword.type = type;
});

// Validar que todos los campos estén llenos antes de continuar
document.getElementById('Continue-button').addEventListener('click', function (event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del botón

    const newPassword = document.getElementById('new-password');
    const againNewPassword = document.getElementById('again-new-password');

    // Verificar si los campos están vacíos
    if (!newPassword.value.trim()) {
        alert('Por favor, ingresa tu nueva contraseña.');
        newPassword.focus();
        return;
    }

    if (!againNewPassword.value.trim()) {
        alert('Por favor, confirma tu nueva contraseña.');
        againNewPassword.focus();
        return;
    }

    // Si todos los campos están llenos, redirige a la siguiente página
    alert('Formulario enviado correctamente.');
    window.location.href = '../restart_check/checkR_index.html';
});