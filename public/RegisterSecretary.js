
document.addEventListener('DOMContentLoaded', function () {
    const adminLink = document.getElementById('AdminLink');
    const mainContent = document.getElementById('Principal');
    const adminLinkMobile = document.getElementById('MobileAdminLink');



function handleAdminClick(e) {
        e.preventDefault();
        const registrationFormHTML = `
         <div class="container px-5 my-5">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="card border-0 rounded-3 shadow-lg">
                                <div class="card-body p-4">
                                    <div class="text-center">
                                        <div class="h1 fw-light">Registro de Administradores</div>
                                        <p class="mb-4 text-muted">Usted registra un usuario "Secretari@" y el tendra
                                            acceso a
                                            gestion de misas, gestion de partidas, solicitud de partidas, solicitud de
                                            misas y la contabilidad
                                        </p>
                                    </div>
                                    <form id="RegisterSecretary" class="needs-validation">
                                        <div id="carouselRegister" class="carousel slide" data-bs-ride="carousel"
                                            data-bs-interval="false">
                                            <div class="carousel-inner">
                                                <!-- Step 1: Email -->
                                                <div class="carousel-item active">
                                                    <div class="mb-3">
                                                        <label for="CorreoelectronicRegister" class="form-label">Correo
                                                            Electrónico</label>
                                                        <input type="email" class="form-control"
                                                            id="CorreoelectronicSecretary" required>
                                                    </div>
                                                    <div id="emailVerificationSecretary" class="mt-2"></div>

                                                    <button type="button" class="btn btn-primary" " 
                                                    id="CheckEmail">Siguiente</button>
                                                </div>

                                                <!-- Step 2: Verification Code -->
                                                <div class="carousel-item">
                                                    <div class="mb-3">
                                                        <label for="VerificationCode" class="form-label">Código de
                                                            Verificación</label>
                                                        <input type="text" class="form-control" id="VerificationCode"
                                                            required>
                                                    </div>
                                                    <button type="button" class="btn btn-secondary"
                                                        onclick="prevStep(2)">Anterior</button>
                                                    <button type="button" class="btn btn-primary"
                                                        onclick="verifyCode()">Siguiente</button>
                                                    <div id="codeVerificationMessage2" class="mt-2"></div>

                                                </div>

                                                <!-- Step 3: Rest of the Data -->
                                                <div class="carousel-item">
                                                    <div class="row">
                                                        <div class="col-md-6 mb-3">
                                                            <label for="Name" class="form-label">Nombre</label>
                                                            <input type="text" class="form-control" id="NameSecretary"
                                                                required>
                                                        </div>
                                                        <div class="col-md-6 mb-3">
                                                            <label for="LastName" class="form-label">Apellidos</label>
                                                            <input type="text" class="form-control"
                                                                id="LastNameSecretary" required>
                                                        </div>
                                                        <div class="col-md-6 mb-3">
                                                            <label for="birthdate" class="form-label">Fecha de
                                                                nacimiento</label>
                                                            <input type="date" class="form-control"
                                                                id="birthdateSecretary" required>
                                                        </div>
                                                        <div class="col-md-6 mb-3">
                                                            <label for="NumberDocument" class="form-label">Numero de
                                                                documento</label>
                                                            <input type="number" class="form-control"
                                                                id="NumberDocumentSecretary" required>
                                                        </div>
                                                    </div>

                                                    <div class="mb-3">
                                                        <label for="PasswordSecretary"
                                                            class="form-label">Contraseña</label>
                                                        <input type="password" class="form-control"
                                                            id="PasswordSecretary" required>
                                                    </div>



                                                    <button type="button" class="btn btn-secondary"
                                                        onclick="prevStep(3)">Anterior</button>
                                                    <button type="submit" class="btn btn-primary" id="saveUserAdmin"
                                                        onclick="registerUserAdmin(event)">Guardar</button>

                                                    <div id="Message" class="mt-2"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

         `;

        // Reemplaza el contenido del main
        mainContent.innerHTML = registrationFormHTML;
        initializeFormFunctionality();
    }

    if (adminLink) {
        adminLink.addEventListener('click', handleAdminClick);
    }

    if (adminLinkMobile) {
        adminLinkMobile.addEventListener('click', handleAdminClick);
    }
});
function nextStep(step) {
    var carousel = new bootstrap.Carousel(document.getElementById('carouselRegister'));
    carousel.next();
}

function prevStep(step) {
    var carousel = new bootstrap.Carousel(document.getElementById('carouselRegister'));
    carousel.prev();
}


function initializeFormFunctionality() {
    const checkEmailButton = document.getElementById('CheckEmail');
    if (checkEmailButton) {
        checkEmailButton.addEventListener('click', async function (event) {
            event.preventDefault();

            const email = document.getElementById('CorreoelectronicSecretary').value;
            const messageDiv = document.getElementById('emailVerificationSecretary');
            const nextButton = this;

            // Validación del correo electrónico
            if (!email) {
                messageDiv.innerHTML = '<div class="alert alert-danger">Por favor, ingrese un correo electrónico.</div>';
                return;
            }

            // Validación simple de formato de correo electrónico
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                messageDiv.innerHTML = '<div class="alert alert-danger">Por favor, ingrese un correo electrónico válido.</div>';
                return;
            }

            // Deshabilitar el botón mientras se verifica
            nextButton.disabled = true;
            nextButton.innerHTML = 'Verificando...';

            try {
                const response = await fetch('https://api-parroquia.onrender.com/auth/verify-Email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ mail: email }),
                });

                const data = await response.json();

                if (response.ok && !data.error) {
                    messageDiv.innerHTML = '<div class="alert alert-success">Código de verificación enviado. Por favor, revise su correo.</div>';
                    nextStep(); // Avanza al siguiente paso solo si no hay error
                } else {
                    // Manejo de errores específicos del servidor
                    switch (data.error) {
                        case 'EMAIL_EXISTS':
                            messageDiv.innerHTML = '<div class="alert alert-danger">Este correo electrónico ya está registrado. Por favor, use otro.</div>';
                            break;
                        case 'INVALID_EMAIL':
                            messageDiv.innerHTML = '<div class="alert alert-danger">El correo electrónico ingresado no es válido.</div>';
                            break;
                        default:
                            messageDiv.innerHTML = `<div class="alert alert-danger">${data.error || 'Ocurrió un error. Por favor, intente de nuevo.'}</div>`;
                    }
                }
            } catch (error) {
                messageDiv.innerHTML = '<div class="alert alert-danger">Error de conexión. Por favor, intente de nuevo más tarde.</div>';
            } finally {
                // Habilitar el botón nuevamente
                nextButton.disabled = false;
                nextButton.innerHTML = 'Siguiente';
            }
        });
    } else {
        console.error('El botón CheckEmail no se encontró');
    }
    
    // Inicializar el carousel
    var carouselElement = document.getElementById('carouselRegister');
    if (carouselElement) {
        new bootstrap.Carousel(carouselElement, {
            interval: false // Esto evita que el carousel se mueva automáticamente
        });
    }
}
    function verifyCode() {
        const email = document.getElementById('CorreoelectronicSecretary').value; // Asumiendo que guardamos el email del paso anterior
        const verificationCode = document.getElementById('VerificationCode').value;
        const messageDiv = document.getElementById('codeVerificationMessage2');

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
                    nextStep(2); // Avanza al siguiente paso si la verificación es exitosa
                } else {
                    messageDiv.innerHTML = `<div class="alert alert-danger">${data.error}</div>`;
                }
            })
            .catch(error => {
                messageDiv.innerHTML = '<div class="alert alert-danger">Ocurrió un error. Por favor, intente de nuevo.</div>';
                console.error('Error:', error);
            });
    }


    function registerUserAdmin(event) {
        event.preventDefault(); // Esto evita que el formulario se envíe automáticamente

        const name = document.getElementById('NameSecretary').value;
        const lastName = document.getElementById('LastNameSecretary').value;
        const birthdate = document.getElementById('birthdateSecretary').value;
        const documentNumber = document.getElementById('NumberDocumentSecretary').value;
        const email = document.getElementById('CorreoelectronicSecretary').value; // Asumiendo que guardamos el email del primer paso
        const password = document.getElementById('PasswordSecretary').value;
        const messageDiv = document.getElementById('Message');

        // Validación básica
        if (!name || !lastName || !birthdate || !documentNumber || !email || !password) {
            messageDiv.innerHTML = '<div class="alert alert-danger">Por favor, complete todos los campos.</div>';
            return;
        }





        const userData = {
            name,
            lastName,
            birthdate,
            documentNumber,
            typeDocument: "66904ea3ca8a0fc2e67df521",
            mail: email,
            password,
            role: "Admin"
        };

        fetch('https://api-parroquia.onrender.com/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
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
                    window.location.href = '/SuperAdmin'; // Redireccionar a la vista 'index.html';
                }
            })
            .catch(error => {
                console.error('Error:', error);

                // Manejar errores específicos
                if (error.message.includes('fecha de nacimiento')) {
                    messageDiv.innerHTML = `<div class="alert alert-danger">${error.message}</div>`;
                } else if (error.message.includes('contraseña debe tener al menos 8 caracteres')) {
                    messageDiv.innerHTML = `<div class="alert alert-danger">${error.message}</div>`;
                } else if (error.message.includes('El numero de Documento ya existe')) {
                    messageDiv.innerHTML = `<div class="alert alert-danger">El numero de Documento ya existe</div>`;
                } else if (error.message.includes('E11000 duplicate key error') && error.message.includes('documentNumber')) {
                    messageDiv.innerHTML = `<div class="alert alert-danger">El número de documento ya está registrado. Por favor, utilice otro.</div>`;
                } else {
                    messageDiv.innerHTML = `<div class="alert alert-danger">Ocurrió un error durante el registro. Por favor, intente de nuevo.</div>`;
                }
            });
    }
