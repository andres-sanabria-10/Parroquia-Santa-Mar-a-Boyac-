document.addEventListener('DOMContentLoaded', function () {
    const adminLink = document.getElementById('AdminLink');
    const mainContent = document.getElementById('Principal');
    const adminLinkMobile = document.getElementById('MobileAdminLink');
    const inicioLink = document.getElementById('inicioLink');
    const MobieinicioLink = document.getElementById('MobileinicioLink');
    const GestionPartidas = document.getElementById('GestionPartidasAdmin');
    const MobileGestionPartidas = document.getElementById('MobileGestionPartidas');
    
    
    const contenidoInicial = mainContent.innerHTML;


    inicioLink.addEventListener('click', function (e) {
        e.preventDefault();
        mainContent.innerHTML = contenidoInicial;
    });

    MobieinicioLink.addEventListener('click', function (e) {
        e.preventDefault();
        mainContent.innerHTML = contenidoInicial;
    });
    
    

 



    function handleAdminClickGesionPartidas(e) {
        e.preventDefault();
        const registrationFormHTML = `
         <div class="container px-5 my-5" style="height: 50vh; background-color: #f8f9fa">
                    <div class="row">
            <div class="col-12">
                Columna 1 (Ocupa toda la fila)
            </div>
        </div>
                    </div>

         `;

        // Reemplaza el contenido del main
        mainContent.innerHTML = registrationFormHTML;
       


    }

    if (GestionPartidas) {
        GestionPartidas.addEventListener('click', handleAdminClickGesionPartidas);
    }

    if (MobileGestionPartidas) {
        MobileGestionPartidas.addEventListener('click', handleAdminClickGesionPartidas);
    }

}); 
