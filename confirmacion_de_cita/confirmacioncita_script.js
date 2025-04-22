// confirmacioncita.js
document.addEventListener('DOMContentLoaded', function() {
    // Botón volver
    const volverButton = document.querySelector('.volver-button');
    if (volverButton) {
        volverButton.onclick = function() {
            window.location.href = '../dashboard/dashboard_index.html';
        };
    }

    // Mostrar la fecha de la cita si existe en localStorage
    const appointmentDate = localStorage.getItem('appointmentDate');
    if (appointmentDate) {
        const dateDisplay = document.getElementById('appointmentDateDisplay');
        if (dateDisplay) {
            dateDisplay.textContent = appointmentDate;
        }
    }

    // Formulario de cita
    const appointmentForm = document.getElementById('appointmentForm');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Evita que el formulario se envíe automáticamente

            // Obtén la fecha seleccionada
            const appointmentDate = document.getElementById('appointmentDate').value;

            if (appointmentDate) {
                // Guarda la fecha en el almacenamiento local para usarla en la página de confirmación
                localStorage.setItem('appointmentDate', appointmentDate);

                // Redirige a la página de confirmación
                window.location.href = 'cofirmacioncita.html';
            } else {
                alert('Por favor, seleccione una fecha para su cita.');
            }
        });
    }
});