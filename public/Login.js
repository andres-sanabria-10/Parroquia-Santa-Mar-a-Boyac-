const getUserRole = async (email) => {
    try {
        const token = localStorage.getItem('tokenSession');
        if (!token) {
            throw new Error('No se encontró el token en localStorage');
        }

        const response = await fetch('https://api-parroquia.onrender.com/user/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error(`Error al obtener los usuarios: ${response.statusText}`);
        }

        const users = await response.json();
        const user = users.find(u => u.mail === email);
        
        if (!user) {
            throw new Error('Usuario no encontrado');
        }

        return user.role;
    } catch (error) {
        console.error("Error al obtener el rol del usuario:", error.message);
        throw error;
    }
};

document.getElementById('VerificacionDeLogin').addEventListener('click', function () {
    const email = document.getElementById('CorreoelectronicLogin').value;
    const password = document.getElementById('passwordLogin').value;

    console.log('Intentando login con:', { mail: email, password: password });

    fetch('https://api-parroquia.onrender.com/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mail: email, password: password }),
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(err => Promise.reject(err));
        }
        return response.json();
    })
    .then(data => {
        console.log('Respuesta completa:', data);
        if (data.tokenSession) {
            console.log('Login exitoso:', data);
            localStorage.setItem('tokenSession', data.tokenSession);
            return getUserRole(email);
        } else {
            throw new Error('Token de sesión no recibido');
        }
    })
    .then(role => {
        console.log('Rol de usuario:', role);
        
        switch (role) {
            case "Usuario":
                console.log('Intentando redirigir a /User');
                window.location.href = '/User';
                break;
            case "Admin":
                console.log('Intentando redirigir a /Admin');
                window.location.href = '/Admin';
                break;
            case "SuperAdmin":
                console.log('Intentando redirigir a /SuperAdmin');
                window.location.href = '/SuperAdmin';
                break;
            default:
                console.error('Rol no reconocido:', role);
        }
    })
    .catch(error => {
        console.error('Error en la autenticación:', error);
        alert('Error en la autenticación: ' + (error.error || error.message));
    });
});