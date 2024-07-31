document.addEventListener('DOMContentLoaded', function() {
    const tokenSession = localStorage.getItem('tokenSession');
    if (!tokenSession) {
        window.location.href = '/';
        return;
    }
    
    // Verificar el token con el backend
    authenticatedFetch('https://api-parroquia.onrender.com/accessRole/user', {
        method: 'GET'
    })
    
    .then(response => response.json())
    .then(data => {
        if (data.role !== 'Usuario') {
            // Si el rol no es "Usuario", redirige al inicio o muestra un error
            throw new Error('Rol no autorizado');
        }
        // El token es válido y el rol es correcto, cargar el contenido de la página
        loadUserContent(); // Asegúrate de tener definida esta función si quieres cargar contenido específico
    })
    .catch(error => {
        console.error('Error de autenticación:', error);
        window.location.href = '/';
    });
});

// Definición de la función authenticatedFetch
function authenticatedFetch(url, options) {
    const tokenSession = localStorage.getItem('tokenSession');
    options.headers = options.headers || {};
    options.headers['Authorization'] = `Bearer ${tokenSession}`;
    
    return fetch(url, options);
}
