document.getElementById('VerificacionDeLogin').addEventListener('click', function () {
    const email = document.getElementById('CorreoelectronicLogin').value;
    const password = document.getElementById('password').value;

    fetch('https://api-parroquia.onrender.com/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mail: email, password: password }),
    })
        .then(response => response.json())
        .then(data => {
            if (data.tokenSession) {
                console.log('Login exitoso:', data);
                localStorage.setItem('tokenSession', data.tokenSession);

                return getAllUser();
            } else {
                throw new Error('Token de sesión no recibido');
            }
        })
        .then(roles => {
            console.log('Roles de usuario:', roles);
            
            // Asumiendo que roles es un array y queremos usar el primer rol
            const userRole = roles[0];

            // Redirigir basado en el rol
            switch (userRole) {
                case 'Usuario':
                    window.location.href = '/User';
                    break;
                case 'Admin':
                    window.location.href = '/Admin';
                    break;
                case 'SuperAdmin':
                    window.location.href = '/SuperAdmin';
                    break;
               
            }
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            alert('Error en la autenticación');
        });
});

const getAllUser = async () => {
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
            throw new Error(`Error al obtener los documentos: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Datos obtenidos:', data);

        // Extraer solo los roles de los usuarios
        const roles = data.map(user => user.role);
        return roles || []; // Asegurarse de que roles existe y devolver un array vacío si no
    } catch (error) {
        console.error("Error al obtener los documentos:", error.message);
        throw error; // Re-lanzar el error para que pueda ser manejado en el .catch
    }
};