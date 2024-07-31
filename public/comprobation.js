document.addEventListener('DOMContentLoaded', function() {
    const tokenSession = localStorage.getItem('tokenSession');
    if (!tokenSession) {
        window.location.href = '/';
        return;
    }
    const rolesPermitidos = ['Usuario', 'Admin', 'SuperAdmin'];
    // Verificar el token con el backend
    authenticatedFetch('https://api-parroquia.onrender.com/accessRole', {
        method: 'GET'
    })
    
    .then(response => response.json())
    .then(data => {
        if (data.role !== 'Usuario') {
            throw new Error('Rol no autorizado');
        }
        // El token es válido y el rol es correcto, cargar el contenido de la página
        loadUserContent();
    })
    .catch(error => {
        console.error('Error de autenticación:', error);
        window.location.href = '/';
    });
});