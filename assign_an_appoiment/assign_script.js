// Botón volver
document.querySelector('.volver-button').onclick = function () {
    window.location.href = '../dashboard/dashboard_index.html';
};

// Botón cerrar sesión
document.querySelector('.close-button').onclick = function () {
    window.location.href = '../login/login.html';
};

// Botón continuar con validación
document.querySelector('#continue-button').onclick = function () {
    // Obtener todos los campos
    const appointmentType = document.querySelector('#appointment-type');
    const appointmentDate = document.querySelector('#appointment-date');
    const appointmentTime = document.querySelector('#appointment-time');

    // Validar que todos los campos estén llenos
    if (!appointmentType.value) {
        alert('Por favor seleccione un tipo de cita');
        appointmentType.focus();
        return;
    }

    if (!appointmentDate.value) {
        alert('Por favor seleccione una fecha');
        appointmentDate.focus();
        return;
    }

    if (!appointmentTime.value) {
        alert('Por favor seleccione una hora');
        appointmentTime.focus();
        return;
    }

    // Si todos los campos están llenos, continuar
    window.location.href = '../confirmacion_de_cita/cofirmacioncita_index.html';
};
