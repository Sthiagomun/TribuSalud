document.addEventListener('DOMContentLoaded', function() {
    // Botón volver
    document.querySelector('.button.info').onclick = function() {
        window.location.href = '../dashboard/dashboard_index.html';
    };

    // Botón cerrar sesión
    document.querySelector('.button.login').onclick = function() {
        window.location.href = '../login/login.html';
    };

    // Validación del formulario
    document.querySelector('#continue-button').addEventListener('click', function(event) {
        event.preventDefault();

        // Obtener todos los campos
        const documentType = document.querySelector('#document-type');
        const documentNumber = document.querySelector('#document-number');
        const bornDate = document.querySelector('#appointment-date');
        const phoneNumber = document.querySelector('#number-phone');
        const terms = document.querySelector('#terms');

        // Validar cada campo
        if (!documentType.value) {
            alert('Por favor seleccione un tipo de documento');
            documentType.focus();
            return;
        }

        if (!documentNumber.value) {
            alert('Por favor ingrese su número de documento');
            documentNumber.focus();
            return;
        }

        if (!bornDate.value) {
            alert('Por favor seleccione su fecha de nacimiento');
            bornDate.focus();
            return;
        }

        if (!phoneNumber.value) {
            alert('Por favor ingrese su número de teléfono');
            phoneNumber.focus();
            return;
        }

        if (!terms.checked) {
            alert('Debe aceptar los términos y condiciones para continuar');
            terms.focus();
            return;
        }

        // Si todos los campos están llenos, continuar
        window.location.href = '../assign_an_appoiment/assign_index.html';
    });
});