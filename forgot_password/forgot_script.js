// Botón para volver
document.getElementById('button-back').onclick = function () {
    window.location.href = '/login/login.html';
};

// Validar que todos los campos estén llenos antes de continuar
document.getElementById('login-button').addEventListener('click', function (event) {
    const userInput = document.querySelector('input[placeholder="Usuario"]');
    const documentType = document.getElementById('document-type');
    const documentNumber = document.getElementById('document-number');

    // Verificar si los campos están vacíos
    if (!userInput.value.trim()) {
        alert('Por favor, ingresa tu usuario.');
        userInput.focus();
        return;
    }

    if (!documentType.value) {
        alert('Por favor, selecciona un tipo de documento.');
        documentType.focus();
        return;
    }

    if (!documentNumber.value.trim()) {
        alert('Por favor, ingresa tu número de documento.');
        documentNumber.focus();
        return;
    }

    // Si todos los campos están llenos, se puede continuar
    alert('Formulario enviado correctamente.');
});