document.addEventListener('DOMContentLoaded', function () {
    const btnAceptar = document.querySelector('.btnAceptar');
    if (btnAceptar) {
        btnAceptar.onclick = function () {
            window.location.href = '../dashboard/dashboard_index.html';
        };
    }

    const btnInicio = document.querySelector('.btnInicio');
    if (btnInicio) {
        btnInicio.onclick = function () {
            window.location.href = '../dashboard/dashboard_index.html';
        };
    }

    const btnCerrarSesion = document.querySelector('.btnCerrarSesion');
    if (btnCerrarSesion) {
        btnCerrarSesion.onclick = function () {
            window.location.href = '../login/login.html';
        };
    }
});