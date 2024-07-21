function nextStep(step) {
    var carousel = new bootstrap.Carousel(document.getElementById('carouselRegister'));
    carousel.next();
}

function prevStep(step) {
    var carousel = new bootstrap.Carousel(document.getElementById('carouselRegister'));
    carousel.prev();
}

document.addEventListener('DOMContentLoaded', function() {
    const checkEmailButton = document.getElementById('CheckEmail');
    
    checkEmailButton.addEventListener('click', async function (event) {
        event.preventDefault(); // Prevenir comportamiento por defecto
        
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
                nextStep(1); // Avanza al siguiente paso solo si no hay error
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
                // No avanzamos al siguiente paso si hay un error
            }
        } catch (error) {
            messageDiv.innerHTML = '<div class="alert alert-danger">Error de conexión. Por favor, intente de nuevo más tarde.</div>';
        } finally {
            // Habilitar el botón nuevamente
            nextButton.disabled = false;
            nextButton.innerHTML = 'Siguiente';
        }
    });
});