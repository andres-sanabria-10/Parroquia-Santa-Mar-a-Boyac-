function nextSlide() {
    const carousel = new bootstrap.Carousel(document.getElementById('registerCarousel'));
    const activeItem = document.querySelector('.carousel-item.active');
    const isSecondStep = activeItem.querySelector('#verificationCode') !== null;

    if (!isSecondStep) {
        carousel.next();

    }
    // Si es el segundo paso, no avanzamos automáticamente. La función verifyCode() se encargará de avanzar si la verificación es exitosa.
}

function nextSlide() {
    const carousel = new bootstrap.Carousel(document.getElementById('registerCarousel'));
    carousel.next();

}

function previousSlide() {
    const carousel = new bootstrap.Carousel(document.getElementById('registerCarousel'));
    carousel.prev();
}

function previousSlideResetPassword() {
    const carousel = new bootstrap.Carousel(document.getElementById('rememberPasswordCarousel'));
    carousel.prev();
}

document.getElementById('verifyEmailBtn').addEventListener('click', async function () {
    const email = document.getElementById('email').value;
    const messageDiv = document.getElementById('emailVerificationMessage');

    if (!email) {
        messageDiv.innerHTML = '<div class="alert alert-danger">Por favor, ingrese un correo electrónico.</div>';
        return;
    }

    try {
        const response = await fetch('https://api-parroquia.onrender.com/auth/verify-Email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ mail: email }),
        });

        const data = await response.json();

        if (response.ok) {
            messageDiv.innerHTML = '<div class="alert alert-success">Código de verificación enviado. Por favor, revise su correo.</div>';
            nextSlide(); // Avanza al siguiente paso
        } else {
            messageDiv.innerHTML = `<div class="alert alert-danger">Incluye un signo "@" en la dirección de correo electrónico. La dirección "${email}" no incluye el signo "@".</div>`;
        }
    } catch (error) {
        messageDiv.innerHTML = '<div class="alert alert-danger">Ocurrió un error. Por favor, intente de nuevo.</div>';
    }
});

// Opcional: Deshabilitar la navegación del carrusel mediante gestos o teclado
document.getElementById('registerCarousel').addEventListener('slide.bs.carousel', function (e) {
    if (e.from === e.to) {
        e.preventDefault();
    }
});


function verifyCode() {
    const email = document.getElementById('email').value; // Asumiendo que guardamos el email del paso anterior
    const verificationCode = document.getElementById('verificationCode').value;
    const messageDiv = document.getElementById('codeVerificationMessage');

    if (!verificationCode) {
        messageDiv.innerHTML = '<div class="alert alert-danger">Por favor, ingrese el código de verificación.</div>';
        return;
    }

    fetch('https://api-parroquia.onrender.com/auth/verify-Code', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mail: email, verificationCode: verificationCode }),
    })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                messageDiv.innerHTML = `<div class="alert alert-success">${data.message}</div>`;
                nextSlide(); // Avanza al siguiente paso si la verificación es exitosa
            } else {
                messageDiv.innerHTML = `<div class="alert alert-danger">${data.error}</div>`;
            }
        })
        .catch(error => {
            messageDiv.innerHTML = '<div class="alert alert-danger">Ocurrió un error. Por favor, intente de nuevo.</div>';
            console.error('Error:', error);
        });
}







//recordar contraseña verificar codigo
function forgotPassword() {
    const email = document.getElementById('CorreoelectronicRemember').value;
    fetch('https://api-parroquia.onrender.com/auth/forgot-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mail: email }),
    })
    .then(response => {
        if (response.ok) {
            nextSlideRemember();
        } else {
            throw new Error(response.statusText);
        }
    })
    .catch(error => {
        const messageDiv = document.getElementById('codeVerificationMessage');
        messageDiv.innerHTML = `<div class="alert alert-danger">Error al enviar el código. Por favor, intente de nuevo.</div>`;
        console.error('Error:', error);
    });
}

function verifyCodeRememberpassword() {
    const email = document.getElementById('CorreoelectronicRemember').value;
    const resetCode = document.getElementById('verificationCodeRememberpassword').value;
    const messageDiv = document.getElementById('codeVerificationMessage');

    if (!resetCode) {
        messageDiv.innerHTML = '<div class="alert alert-danger">Por favor, ingrese el código de verificación.</div>';
        return;
    }

    fetch('https://api-parroquia.onrender.com/auth/verify-ResetCode', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mail: email, resetCode: resetCode }),
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(err => { throw err; });
        }
        return response.json();
    })
    .then(data => {
        if (data.message === 'Código válido') {
            messageDiv.innerHTML = '<div class="alert alert-success">Código verificado correctamente.</div>';
            // Guardamos el email para usarlo en el reseteo de contraseña
            localStorage.setItem('resetEmail', email);
            nextSlideRemember(); // Avanzar al slide de cambio de contraseña
        } else {
            messageDiv.innerHTML = '<div class="alert alert-danger">Código inválido o expirado.</div>';
        }
    })
    .catch(error => {
        messageDiv.innerHTML = `<div class="alert alert-danger">${error.message || 'Ocurrió un error. Por favor, intente de nuevo.'}</div>`;
        console.error('Error:', error);
    });
}

function resetPassword() {
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const messageDiv = document.getElementById('passwordResetMessage');
    const email = localStorage.getItem('resetEmail'); // Recuperamos el correo electrónico guardado

    if (newPassword !== confirmPassword) {
        messageDiv.innerHTML = '<div class="alert alert-danger">Las contraseñas no coinciden.</div>';
        return;
    }

    fetch('https://api-parroquia.onrender.com/auth/change-Password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mail: email, newPassword: newPassword }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            // Usar SweetAlert2 para mostrar el mensaje
            Swal.fire({
                title: 'Contraseña restablecida',
                text: 'Su contraseña ha sido restablecida con éxito. Por favor, inicie sesión con su nueva contraseña.',
                icon: 'success',
                confirmButtonText: 'Iniciar sesión',
                customClass: {
                    confirmButton: 'btn btn-primary'
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    // Mostrar el modal de inicio de sesión
                    var loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
                    loginModal.show();
                    
                    // Opcionalmente cerrar el modal actual
                    var rememberPasswordModal = bootstrap.Modal.getInstance(document.getElementById('RememberPassword'));
                    rememberPasswordModal.hide();
                }
            });
        } else {
            messageDiv.innerHTML = `<div class="alert alert-danger">${data.error || 'Error al cambiar la contraseña.'}</div>`;
        }
    })
    .catch(error => {
        messageDiv.innerHTML = '<div class="alert alert-danger">Ocurrió un error. Por favor, intente de nuevo.</div>';
        console.error('Error:', error);
    });
}

function nextSlideRemember() {
    const carousel = new bootstrap.Carousel(document.getElementById('rememberPasswordCarousel'));
    carousel.next();
}

// Event listeners
document.getElementById('rememberPassword').addEventListener('click', forgotPassword);







function registerUser() {
    const name = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;
    const birthdate = document.getElementById('birthdate').value;
    const documentNumber = document.getElementById('docNumber').value;
    const typeDocument = document.getElementById('docType').value;
    const email = document.getElementById('email').value; // Asumiendo que guardamos el email del primer paso
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('registerMessage');

    // Validación básica
    if (!name || !lastName || !birthdate || !documentNumber || !typeDocument || !email || !password) {
        messageDiv.innerHTML = '<div class="alert alert-danger">Por favor, complete todos los campos.</div>';
        return;
    }

    const typeDocumentMap = {
        "cedula": "66904ea3ca8a0fc2e67df521",
        "tarjeta": "66904eaeca8a0fc2e67df523",
        // Agrega más mappings según sea necesario
    };

    const typeDocumentID = typeDocumentMap[typeDocument];

    const userData = {
        name,
        lastName,
        birthdate,
        documentNumber,
        typeDocument: typeDocumentID,
        mail: email,
        password,
        role: "Usuario"
    };

    fetch('https://api-parroquia.onrender.com/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
        .then(response => {
            if (!response.ok) {
                return response.json().then(errorData => {
                    throw new Error(errorData.error);
                });
            }
            return response.json();
        })
        .then(data => {
            if (data.data) {
                messageDiv.innerHTML = '<div class="alert alert-success">Usuario registrado exitosamente.</div>';
                window.location.href = '/'; // Redireccionar a la vista 'index.html';
            }
        })
        .catch(error => {
            messageDiv.innerHTML = `<div class="alert alert-danger">El numero de Documento ya existe</div>`;
            console.error('Error:', error);
        });
}

// Asegúrate de que el botón "Crear cuenta" en el tercer paso llame a esta función
// <button type="button" class="btn btn-primary" onclick="registerUser()">Crear cuenta</button>


const getAllDocumentData = async () => {
    try {
        const response = await fetch('https://api-parroquia.onrender.com/documentType/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Verificar si la respuesta es exitosa
        if (!response.ok) {
            console.error('Error fetching documents:', response.statusText);
            throw new Error('Error fetching documents');
        }

        const data = await response.json();
        console.log('Fetched Data:', data); // Log the fetched data
        return data.data; // Asumiendo que data.data contiene la lista de documentos
    } catch (error) {
        console.error("Error fetching documents:", error);
        return [];
    }
};

getAllDocumentData().then(documentData => {
    console.log('Document Data:', documentData); // Imprimir los datos devueltos
});