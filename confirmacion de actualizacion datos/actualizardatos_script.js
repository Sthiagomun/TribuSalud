document.addEventListener('DOMContentLoaded', function() {
    const inicioButton = document.querySelector('.Inicio-button');
    if (inicioButton) {
        inicioButton.onclick = function() {
            window.location.href = '../login/login.html';
        };
    }
});