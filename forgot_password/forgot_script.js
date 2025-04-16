// Validar que todos los campos estén llenos antes de continuar
document.getElementById('Continue-button').addEventListener('click', function (event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del botón

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

    // Si todos los campos están llenos, redirige a la siguiente página
    alert('Formulario enviado correctamente.');
    window.location.href = '../code_restart/code_index.html';
});