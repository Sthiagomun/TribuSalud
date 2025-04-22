// confirmacioncita.js

document.getElementById('appointmentForm').addEventListener('submit', function (event) {
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