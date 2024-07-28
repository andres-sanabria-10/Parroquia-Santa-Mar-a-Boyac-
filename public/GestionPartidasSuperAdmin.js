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
        <div class="d-flex flex-column w-100">
                    <div class="container mt-3 text-center" style="background-color: #f8f9fa;">
                        <button type="button" class="btn btn-outline-primary mx-2 mt-2" data-bs-toggle="collapse"
                            data-bs-target="#bautismosCard" aria-expanded="false" aria-controls="bautismosCard"
                            onclick="toggleCard('bautismosCard')">Bautismos</button>

                        <button type=" button" class="btn btn-outline-secondary mx-2 mt-2" data-bs-toggle="collapse"
                            data-bs-target="#ConfirmacionesCard" aria-expanded="false"
                            aria-controls="ConfirmacionesCard"
                            onclick="toggleCard('ConfirmacionesCard')">Confirmaciones</button>

                        <button type="button" class="btn btn-outline-success mx-2 mt-2" data-bs-toggle="collapse"
                            data-bs-target="#MatrimonioCard" aria-expanded="false" aria-controls="MatrimonioCard"
                            onclick="toggleCard('MatrimonioCard')">Matrimonio</button>

                        <button type="button" class="btn btn-outline-danger mx-2 mt-2" data-bs-toggle="collapse"
                            data-bs-target="#DefuncionCard" aria-expanded="false" aria-controls="DefuncionCard"
                            onclick="toggleCard('DefuncionCard')">Fallecimiento</button>
                    </div>
                    <!-- Card de bautismos -->
                    <!-- Contenedor colapsable -->
                    <div class="collapse" id="bautismosCard">
                        <div class="container mt-3 pb-4 text-center" style="background-color: #45709b;">
                            <div class="card mt-3">
                                <div class="card-body">
                                    <h5 class="card-title">Baustimos</h5>
                                    Gestión de las partidas de Bautismo
                                    <!-- Navbar dentro del card -->
                                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                                        <div class="container-fluid">
                                            <!-- Enlace al logo -->
                                            <a href="/" class="link-dark text-decoration-none">
                                                <img src="/img/sacerdoteSidebar.png" alt="" width="32" height="32"
                                                    class="rounded-circle me-2">
                                                <span>Funcionalidades</span>
                                            </a>
                                            <!-- Botón de toggler para el navbar -->
                                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#navbarNavDropdown4" aria-controls="navbarNavDropdown4"
                                                aria-expanded="false" aria-label="Toggle navigation">
                                                <span class="navbar-toggler-icon"></span>
                                            </button>
                                            <!-- Menú colapsable -->
                                            <div class="collapse navbar-collapse" id="navbarNavDropdown4">
                                                <ul class="navbar-nav ms-auto">
                                                    <!-- Opción Crear -->
                                                    <li class="nav-item">
                                                        <a class="nav-link btn btn-light d-flex align-items-center"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#bautismosCardCreate"
                                                            aria-expanded="false"
                                                            aria-controls="bautismosCardCreate">
                                                            <i class="bi bi-plus-circle me-2"></i> Crear
                                                        </a>
                                                    </li>
                                                    <!-- Opción Mostrar -->
                                                    <li class="nav-item">
                                                        <a href="#"
                                                            class="nav-link btn btn-light d-flex align-items-center"  
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#bautismosCardShow" 
                                                            aria-expanded="false"
                                                            aria-controls="bautismosCardShow">
                                                            <i class="bi bi-eye me-2"></i> Mostrar
                                                        </a>
                                                    </li>
                                                    <!-- Opción Eliminar -->
                                                    <li class="nav-item">
                                                        <a href="#"
                                                            class="nav-link btn btn-light d-flex align-items-center" 
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#bautismosCardDelete" 
                                                            aria-expanded="false"
                                                            aria-controls="bautismosCardDelete">
                                                            <i class="bi bi-trash me-2"></i> Eliminar
                                                        </a>
                                                    </li>
                                                    <!-- Opción Actualizar -->
                                                    <li class="nav-item">
                                                        <a href="#"
                                                            class="nav-link btn btn-light d-flex align-items-center"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#bautismosCardUpdate" 
                                                            aria-expanded="false"
                                                            aria-controls="bautismosCardUpdate">
                                                            <i class="bi bi-pencil me-2"></i> Actualizar
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>


                                        </div>
                                    </nav>
                                    <hr>
                                     <!-- cards de bautismos -->
                                   
                                    <div class="accordion" id="BautismosCardContainer2">
                                        <div class="accordion-item">
                                            <div id="bautismosCardCreate" class="accordion-collapse collapse" data-bs-parent="#BautismosCardContainer2">
                                                <div class="accordion-body">
                                                    <h5 class="card-title">Crear partida de baustismo</h5>
                                                    <form class="row g-3 needs-validation" novalidate id="formularioBautismo">
                                                        <div class="col-md-6">
                                                            <label for="validationCustom01" class="form-label">Número de Documento</label>
                                                            <input type="text" class="form-control" id="validationCustom01" name="documentNumber" required>
                                                            <div class="invalid-feedback">
                                                            Por favor proporcione un número de documento válido.
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label for="validationCustom02" class="form-label">Fecha de Bautismo</label>
                                                            <input type="date" class="form-control" id="validationCustom02" name="baptismDate" required>
                                                            <div class="invalid-feedback">
                                                            Por favor seleccione una fecha válida.
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <label for="validationCustom03" class="form-label">Lugar de Nacimiento</label>
                                                            <input type="text" class="form-control" id="validationCustom03" name="placeBirth" required>
                                                            <div class="invalid-feedback">
                                                            Por favor proporcione un lugar de nacimiento válido.
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label for="validationCustom04" class="form-label">Nombre del Padre</label>
                                                            <input type="text" class="form-control" id="validationCustom04" name="fatherName" required>
                                                            <div class="invalid-feedback">
                                                            Por favor proporcione el nombre del padre.
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label for="validationCustom05" class="form-label">Nombre de la Madre</label>
                                                            <input type="text" class="form-control" id="validationCustom05" name="motherName" required>
                                                            <div class="invalid-feedback">
                                                            Por favor proporcione el nombre de la madre.
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label for="validationCustom06" class="form-label">Padrino 1</label>
                                                            <input type="text" class="form-control" id="validationCustom06" name="godfather1" required>
                                                            <div class="invalid-feedback">
                                                            Por favor proporcione el nombre del primer padrino.
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label for="validationCustom07" class="form-label">Padrino 2 (Opcional)</label>
                                                            <input type="text" class="form-control" id="validationCustom07" name="godfather2">
                                                        </div>
                                                        <div class="col-12">
                                                            <button class="btn btn-primary" type="submit">Registrar Bautismo</button>
                                                        </div>
                                                        </form>
                                                  
                                                </div>
                                            </div>
                                        </div>

                                        <div class="accordion-item">
                                            <div id="bautismosCardShow" class="accordion-collapse collapse" data-bs-parent="#BautismosCardContainer2">
                                                <div class="accordion-body">
                                                    <h5 class="card-title">Buscar Partida</h5>
                                                    Se buscará la partida con el número de documento

                                                    <form class="row g-3 needs-validation" novalidate id="formulariobuscar">
                                                        <div class="col-md-4">
                                                            <label for="NumDocBuscar" class="form-label">Número de Documento</label>
                                                            <input type="text" class="form-control" id="NumDocBuscar" required>
                                                            <div class="valid-feedback">
                                                                Looks good!
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <button class="btn btn-primary" type="submit">Buscar</button>
                                                        </div>
                                                    </form>

                                                    <table class="table" id="tablaBautismo">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Nombre</th>
                                                                <th scope="col">Apellido</th>
                                                                <th scope="col">Número de Documento</th>
                                                                <th scope="col">Correo</th>
                                                                <th scope="col">Fecha de Bautismo</th>
                                                                <th scope="col">Padrino</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <!-- Los datos se insertarán aquí -->
                                                        </tbody>
                                                    </table>



                                                </div>
                                            </div>
                                        </div>

                                        <div class="accordion-item">
                                            <div id="bautismosCardDelete" class="accordion-collapse collapse" data-bs-parent="#BautismosCardContainer2">
                                                <div class="accordion-body">
                                                    <h5 class="card-title"> Eliminar Partida</h5>
                                                    Se eliminará la partida con el número de documento

                                                    <form class="row g-3 needs-validation" novalidate id="formularioEliminar">
                                                        <div class="col-md-4">
                                                            <label for="validationCustom01" class="form-label">Numero de Documento</label>
                                                            <input type="text" class="form-control" id="NumDocEliminar" required>
                                                            <div class="valid-feedback">
                                                            Looks good!
                                                            </div>
                                                        </div>
                                                         <div class="col-12">
                                                            <button class="btn btn-primary" type="submit">Eliminar </button>
                                                        </div>
                                                        </form>



                                                </div>
                                            </div>
                                        </div>

                                        <div class="accordion-item">
                                            <div id="bautismosCardUpdate" class="accordion-collapse collapse" data-bs-parent="#BautismosCardContainer2">
                                                <div class="accordion-body">
                                                    <h5 class="card-title">Actualizar Defuncion</h5>
                                                    Gestión de las partidas de Defuncion
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Card de Confirmación -->
                    <div class="collapse" id="ConfirmacionesCard">
                        <div class="container mt-3 pb-4 text-center" style="background-color: #f8f9fa;">
                            <div class="card mt-3">
                                <div class="card-body">
                                    <h5 class="card-title">Confirmación</h5>
                                    Gestión de las partidas de confirmación
                                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                                        <div class="container-fluid">
                                            <!-- Enlace al logo -->
                                            <a href="/" class="link-dark text-decoration-none">
                                                <img src="/img/sacerdoteSidebar.png" alt="" width="32" height="32"
                                                    class="rounded-circle me-2">
                                                <span>Sacerdote</span>
                                            </a>
                                            <!-- Botón de toggler para el navbar -->
                                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#navbarNavDropdown5" aria-controls="navbarNavDropdown5"
                                                aria-expanded="false" aria-label="Toggle navigation">
                                                <span class="navbar-toggler-icon"></span>
                                            </button>
                                            <!-- Menú colapsable -->
                                            <div class="collapse navbar-collapse" id="navbarNavDropdown5">
                                                <ul class="navbar-nav ms-auto">
                                                    <!-- Opción Crear -->
                                                    <li class="nav-item">
                                                        <a href="#"
                                                            class="nav-link btn btn-light d-flex align-items-center"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#ConfirmacionCardCreate"
                                                            aria-expanded="false"
                                                            aria-controls="ConfirmacionCardCreate">
                                                            <i class="bi bi-plus-circle me-2"></i> Crear
                                                        </a>
                                                    </li>
                                                    <!-- Opción Mostrar -->
                                                    <li class="nav-item">
                                                        <a href="#"
                                                            class="nav-link btn btn-light d-flex align-items-center"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#ConfirmacionCardShow"
                                                            aria-expanded="false"
                                                            aria-controls="ConfirmacionCardShow">
                                                            <i class="bi bi-eye me-2"></i> Mostrar
                                                        </a>
                                                    </li>
                                                    <!-- Opción Eliminar -->
                                                    <li class="nav-item">
                                                        <a href="#"
                                                            class="nav-link btn btn-light d-flex align-items-center"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#ConfirmacionCardDelete"
                                                            aria-expanded="false"
                                                            aria-controls="ConfirmacionCardDelete">
                                                            <i class="bi bi-trash me-2"></i> Eliminar
                                                        </a>
                                                    </li>
                                                    <!-- Opción Actualizar -->
                                                    <li class="nav-item">
                                                        <a href="#"
                                                            class="nav-link btn btn-light d-flex align-items-center"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#ConfirmacionCardUpdate"
                                                            aria-expanded="false"
                                                            aria-controls="ConfirmacionCardUpdate">
                                                            <i class="bi bi-pencil me-2"></i> Actualizar
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </nav>
                                    <!-- cards de Confirmacion -->
                                    <div class="accordion" id="ConfirmacionesCardContainer">
                                        <div class="accordion-item">
                                            <div id="ConfirmacionCardCreate" class="accordion-collapse collapse" data-bs-parent="#ConfirmacionesCardContainer">
                                                <div class="accordion-body">
                                                    <h5 class="card-title">Crear partida de confirmación</h5>
                                                   
                                                        <form class="row g-3 needs-validation" novalidate id="formularioConfirmacion">
                                                            <div class="col-md-6">
                                                                <label for="validationCustom10" class="form-label">Número de Documento</label>
                                                                <input type="text" class="form-control" id="validationCustom10" name="documentNumber" required>
                                                                <div class="invalid-feedback">
                                                                    Por favor proporcione un número de documento válido.
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <label for="validationCustom11" class="form-label">Fecha de Confirmación</label>
                                                                <input type="date" class="form-control" id="validationCustom11" name="confirmationDate" required>
                                                                <div class="invalid-feedback">
                                                                    Por favor seleccione una fecha válida.
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <label for="validationCustom12" class="form-label">Nombre del Padre</label>
                                                                <input type="text" class="form-control" id="validationCustom12" name="fatherName" required>
                                                                <div class="invalid-feedback">
                                                                    Por favor proporcione el nombre del padre.
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <label for="validationCustom13" class="form-label">Nombre de la Madre</label>
                                                                <input type="text" class="form-control" id="validationCustom13" name="motherName" required>
                                                                <div class="invalid-feedback">
                                                                    Por favor proporcione el nombre de la madre.
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <label for="validationCustom14" class="form-label">Nombre del Padrino</label>
                                                                <input type="text" class="form-control" id="validationCustom14" name="godfather" required>
                                                                <div class="invalid-feedback">
                                                                    Por favor proporcione el nombre del padrino.
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <label for="validationCustom15" class="form-label">Parroquia Bautizada (Opcional)</label>
                                                                <input type="text" class="form-control" id="validationCustom15" name="baptizedParish">
                                                            </div>
                                                            <div class="col-12">
                                                                <button class="btn btn-primary" type="submit">Registrar Confirmación</button>
                                                            </div>
                                                        </form>
                                                             


                                                </div>
                                            </div>
                                        </div>

                                        <div class="accordion-item">
                                            <div id="ConfirmacionCardShow" class="accordion-collapse collapse" data-bs-parent="#ConfirmacionesCardContainer">
                                                <div class="accordion-body">
                                                    <h5 class="card-title">Mostrar Confirmacion</h5>
                                                    Se buscará la partida con el número de documento

                                                   <form class="row g-3 needs-validation" novalidate id="formulariobuscarConfirmacion">
                                                        <div class="col-md-4">
                                                            <label for="NumDocBuscarConfirmacion" class="form-label">Número de Documento</label>
                                                            <input type="text" class="form-control" id="NumDocBuscarConfirmacion" required>
                                                            <div class="valid-feedback">
                                                                ¡Se ve bien!
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <button class="btn btn-primary" type="submit">Buscar</button>
                                                        </div>
                                                    </form>

                                                    <table class="table" id="tablaConfirmacion">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Nombre</th>
                                                                <th scope="col">Apellido</th>
                                                                <th scope="col">Número de Documento</th>
                                                                <th scope="col">Correo</th>
                                                                <th scope="col">Fecha de Confirmación</th>
                                                                <th scope="col">Padrino</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <!-- Los datos se insertarán aquí -->
                                                        </tbody>
                                                    </table>


                                                </div>
                                            </div>
                                        </div>

                                        <div class="accordion-item">
                                            <div id="ConfirmacionCardDelete" class="accordion-collapse collapse" data-bs-parent="#ConfirmacionesCardContainer">
                                                <div class="accordion-body">
                                                    <h5 class="card-title"> Eliminar Confirmacion</h5>
                                                    Gestión de las partidas de Confirmacion
                                                </div>
                                            </div>
                                        </div>

                                        <div class="accordion-item">
                                            <div id="ConfirmacionCardUpdate" class="accordion-collapse collapse" data-bs-parent="#ConfirmacionesCardContainer">
                                                <div class="accordion-body">
                                                    <h5 class="card-title">Actualizar Confirmacion</h5>
                                                    Gestión de las partidas de Confirmacion
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                 




                                </div>
                            </div>
                        </div>
                    </div>




                    <!-- Card de Matrimonio -->
                    <div class="collapse" id="MatrimonioCard">
                        <div class="container mt-3 pb-4 text-center" style="background-color: #f8f9fa;">
                            <div class="card mt-3">
                                <div class="card-body">
                                    <h5 class="card-title">Matrimonio</h5>
                                    Gestión de las partidas de Matrimonio
                                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                                        <div class="container-fluid">
                                            <!-- Enlace al logo -->
                                            <a href="/" class="link-dark text-decoration-none">
                                                <img src="/img/sacerdoteSidebar.png" alt="" width="32" height="32"
                                                    class="rounded-circle me-2">
                                                <span>Sacerdote</span>
                                            </a>
                                            <!-- Botón de toggler para el navbar -->
                                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#navbarNavDropdown6" aria-controls="navbarNavDropdown6"
                                                aria-expanded="false" aria-label="Toggle navigation">
                                                <span class="navbar-toggler-icon"></span>
                                            </button>
                                            <!-- Menú colapsable -->
                                            <div class="collapse navbar-collapse" id="navbarNavDropdown6">
                                                <ul class="navbar-nav ms-auto">
                                                    <!-- Opción Crear -->
                                                    <li class="nav-item">
                                                        <a href="#"
                                                            class="nav-link btn btn-light d-flex align-items-center"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#MatrimonioCardCreate"
                                                            aria-expanded="false"
                                                            aria-controls="MatrimonioCardCreate">
                                                            <i class="bi bi-plus-circle me-2"></i> Crear
                                                        </a>
                                                    </li>
                                                    <!-- Opción Mostrar -->
                                                    <li class="nav-item">
                                                        <a href="#"
                                                            class="nav-link btn btn-light d-flex align-items-center"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#MatrimonioCardShow"
                                                            aria-expanded="false"
                                                            aria-controls="MatrimonioCardShow">
                                                            <i class="bi bi-eye me-2"></i> Mostrar
                                                        </a>
                                                    </li>
                                                    <!-- Opción Eliminar -->
                                                    <li class="nav-item">
                                                        <a href="#"
                                                            class="nav-link btn btn-light d-flex align-items-center"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#MatrimonioCardDelete"
                                                            aria-expanded="false"
                                                            aria-controls="MatrimonioCardDelete">>
                                                            <i class="bi bi-trash me-2"></i> Eliminar
                                                        </a>
                                                    </li>
                                                    <!-- Opción Actualizar -->
                                                    <li class="nav-item">
                                                        <a href="#"
                                                            class="nav-link btn btn-light d-flex align-items-center"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#MatrimonioCardUpdate"
                                                            aria-expanded="false"
                                                            aria-controls="MatrimonioCardUpdate">>
                                                            <i class="bi bi-pencil me-2"></i> Actualizar
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </nav>

                                    <!-- cards de Matrimonio -->
                                    <div class="accordion" id="MatrimonioCardContainer1">
                                        <div class="accordion-item">
                                            <div id="MatrimonioCardCreate" class="accordion-collapse collapse" data-bs-parent="#MatrimonioCardContainer1">
                                                <div class="accordion-body">
                                                     <h5 class="card-title">Crear partida de matrimonio</h5>
                                                   <form class="row g-3 needs-validation" novalidate id="formularioMatrimonio">
                                                            <div class="col-md-6">
                                                                <label for="husbandDocumentNumber" class="form-label">Número de Documento del Esposo</label>
                                                                <input type="text" class="form-control" id="husbandDocumentNumber" name="husbandDocumentNumber" required>
                                                                <div class="invalid-feedback">
                                                                    Por favor proporcione el número de documento del esposo.
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <label for="wifeDocumentNumber" class="form-label">Número de Documento de la Esposa</label>
                                                                <input type="text" class="form-control" id="wifeDocumentNumber" name="wifeDocumentNumber" required>
                                                                <div class="invalid-feedback">
                                                                    Por favor proporcione el número de documento de la esposa.
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <label for="marriageDate" class="form-label">Fecha de Matrimonio</label>
                                                                <input type="date" class="form-control" id="marriageDate" name="marriageDate" required>
                                                                <div class="invalid-feedback">
                                                                    Por favor seleccione una fecha válida.
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <label for="father_husband" class="form-label">Padre del Esposo</label>
                                                                <input type="text" class="form-control" id="father_husband" name="father_husband">
                                                            </div>
                                                            <div class="col-md-6">
                                                                <label for="mother_husband" class="form-label">Madre del Esposo</label>
                                                                <input type="text" class="form-control" id="mother_husband" name="mother_husband">
                                                            </div>
                                                            <div class="col-md-6">
                                                                <label for="father_wife" class="form-label">Padre de la Esposa</label>
                                                                <input type="text" class="form-control" id="father_wife" name="father_wife">
                                                            </div>
                                                            <div class="col-md-6">
                                                                <label for="mother_wife" class="form-label">Madre de la Esposa</label>
                                                                <input type="text" class="form-control" id="mother_wife" name="mother_wife">
                                                            </div>
                                                            <div class="col-md-6">
                                                                <label for="godfather1" class="form-label">Padrino 1</label>
                                                                <input type="text" class="form-control" id="godfather1" name="godfather1" required>
                                                                <div class="invalid-feedback">
                                                                    Por favor proporcione el nombre del primer padrino.
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <label for="godfather2" class="form-label">Padrino 2</label>
                                                                <input type="text" class="form-control" id="godfather2" name="godfather2" required>
                                                                <div class="invalid-feedback">
                                                                    Por favor proporcione el nombre del segundo padrino.
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <label for="witness1" class="form-label">Testigo 1</label>
                                                                <input type="text" class="form-control" id="witness1" name="witness1" required>
                                                                <div class="invalid-feedback">
                                                                    Por favor proporcione el nombre del primer testigo.
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <label for="witness2" class="form-label">Testigo 2</label>
                                                                <input type="text" class="form-control" id="witness2" name="witness2" required>
                                                                <div class="invalid-feedback">
                                                                    Por favor proporcione el nombre del segundo testigo.
                                                                </div>
                                                            </div>
                                                            <div class="col-12">
                                                                <button class="btn btn-primary" type="submit">Registrar Matrimonio</button>
                                                            </div>
                                                        </form>
                                                  
                                                </div>
                                            </div>
                                        </div>

                                        <div class="accordion-item">
                                            <div id="MatrimonioCardShow" class="accordion-collapse collapse" data-bs-parent="#MatrimonioCardContainer1">
                                                <div class="accordion-body">
                                                    <h5 class="card-title">Mostrar Matrimonio</h5>
                                                    Se buscará la partida con el número de documento

                                                   <form class="row g-3 needs-validation" novalidate id="formulariobuscarMatrimonio">
                                                        <div class="col-md-4">
                                                            <label for="NumDocBuscarMatrimonio" class="form-label">Número de Documento</label>
                                                            <input type="text" class="form-control" id="NumDocBuscarMatrimonio" required>
                                                            <div class="valid-feedback">
                                                                ¡Se ve bien!
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <button class="btn btn-primary" type="submit">Buscar</button>
                                                        </div>
                                                    </form>

                                                    <div id="MatrimonioCardContainer2" style="max-height: 400px; overflow-x: auto;">

                                                    <table class="table" id="tablaMatrimonio">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Nombre Esposo</th>
                                                                <th scope="col">Apellido Esposo</th>
                                                                 <th scope="col">Nombre Esposa</th>
                                                                <th scope="col">Apellido Esposa</th>
                                                                <th scope="col">Número de Documento Esposo</th>
                                                                <th scope="col">Número de Documento Esposa</th>
                                                                <th scope="col" >Correo</th>
                                                                <th scope="col" >Fecha de matrimonio</th>
                                                              
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <!-- Los datos se insertarán aquí -->
                                                        </tbody>
                                                    </table>
                                                    </div>



                                                </div>
                                            </div>
                                        </div>

                                        <div class="accordion-item">
                                            <div id="MatrimonioCardDelete" class="accordion-collapse collapse" data-bs-parent="#MatrimonioCardContainer1">
                                                <div class="accordion-body">
                                                    <h5 class="card-title"> Eliminar Matrimonio</h5>
                                                    Gestión de las partidas de Matrimonio
                                                </div>
                                            </div>
                                        </div>

                                        <div class="accordion-item">
                                            <div id="MatrimonioCardUpdate" class="accordion-collapse collapse" data-bs-parent="#MatrimonioCardContainer1">
                                                <div class="accordion-body">
                                                    <h5 class="card-title">Actualizar Matrimonio</h5>
                                                    Gestión de las partidas de matrimonio
                                                </div>
                                            </div>
                                        </div>
                                    </div>







                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Card de Defunción -->
                    <div class="collapse" id="DefuncionCard">
                        <div class="container mt-3 pb-4 text-center" style="background-color: #f8f9fa;">
                            <div class="card mt-3">
                                <div class="card-body">
                                    <h5 class="card-title">Defunción</h5>
                                    Gestión de las partidas de Defunción
                                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                                        <div class="container-fluid">
                                            <!-- Enlace al logo -->
                                            <a href="/" class="link-dark text-decoration-none">
                                                <img src="/img/sacerdoteSidebar.png" alt="" width="32" height="32"
                                                    class="rounded-circle me-2">
                                                <span>Sacerdote</span>
                                            </a>
                                            <!-- Botón de toggler para el navbar -->
                                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#navbarNavDropdown7" aria-controls="navbarNavDropdown7"
                                                aria-expanded="false" aria-label="Toggle navigation">
                                                <span class="navbar-toggler-icon"></span>
                                            </button>
                                            <!-- Menú colapsable -->
                                            <div class="collapse navbar-collapse" id="navbarNavDropdown7">
                                                <ul class="navbar-nav ms-auto">
                                                    <!-- Opción Crear -->
                                                    <li class="nav-item">
                                                        <a href="#"
                                                            class="nav-link btn btn-light d-flex align-items-center"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#DefuncionCardCreate"
                                                            aria-expanded="false"
                                                            aria-controls="DefuncionCardCreate">
                                                            <i class="bi bi-plus-circle me-2"></i> Crear
                                                        </a>
                                                    </li>
                                                    <!-- Opción Mostrar -->
                                                    <li class="nav-item">
                                                        <a href="#"
                                                            class="nav-link btn btn-light d-flex align-items-center"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#DefuncionCardShow"
                                                            aria-expanded="false"
                                                            aria-controls="DefuncionCardShow">
                                                            <i class="bi bi-eye me-2"></i> Mostrar
                                                        </a>
                                                    </li>
                                                    <!-- Opción Eliminar -->
                                                    <li class="nav-item">
                                                        <a href="#"
                                                            class="nav-link btn btn-light d-flex align-items-center"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#DefuncionCardDelete"
                                                            aria-expanded="false"
                                                            aria-controls="DefuncionCardDelete">
                                                            <i class="bi bi-trash me-2"></i> Eliminar
                                                        </a>
                                                    </li>
                                                    <!-- Opción Actualizar -->
                                                    <li class="nav-item">
                                                        <a href="#"
                                                            class="nav-link btn btn-light d-flex align-items-center"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#DefuncionCardUpdate"
                                                            aria-expanded="false"
                                                            aria-controls="DefuncionCardUpdate">
                                                            <i class="bi bi-pencil me-2"></i> Actualizar
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </nav>

                                    <!-- cards de Defuncion -->
                                    <div class="accordion" id="DefuncionCardContainer2">
                                        <div class="accordion-item">
                                            <div id="DefuncionCardCreate" class="accordion-collapse collapse" data-bs-parent="#DefuncionCardContainer2">
                                                <div class="accordion-body">
                                                   <h5 class="card-title">Crear partida de defunción</h5>
                                                   <form class="row g-3 needs-validation" novalidate id="formularioDefuncion">
                                                        <div class="col-md-6">
                                                            <label for="documentNumberDeath" class="form-label">Número de Documento del Fallecido</label>
                                                            <input type="text" class="form-control" id="documentNumberDeath" name="documentNumberDeath" required>
                                                            <div class="invalid-feedback">
                                                                Por favor proporcione un número de documento válido.
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label for="deathDate" class="form-label">Fecha de Defunción</label>
                                                            <input type="date" class="form-control" id="deathDate" name="deathDate" required>
                                                            <div class="invalid-feedback">
                                                                Por favor seleccione una fecha válida.
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label for="fatherNameDeath" class="form-label">Nombre del Padre</label>
                                                            <input type="text" class="form-control" id="fatherNameDeath" name="fatherNameDeath" required>
                                                            <div class="invalid-feedback">
                                                                Por favor proporcione el nombre del padre.
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label for="motherNameDeath" class="form-label">Nombre de la Madre</label>
                                                            <input type="text" class="form-control" id="motherNameDeath" name="motherNameDeath" required>
                                                            <div class="invalid-feedback">
                                                                Por favor proporcione el nombre de la madre.
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label for="civilStatus" class="form-label">Estado Civil</label>
                                                            <input type="text" class="form-control" id="civilStatus" name="civilStatus" required>
                                                            <div class="invalid-feedback">
                                                                Por favor proporcione el estado civil.
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label for="cemeteryName" class="form-label">Nombre del Cementerio</label>
                                                            <input type="text" class="form-control" id="cemeteryName" name="cemeteryName" required>
                                                            <div class="invalid-feedback">
                                                                Por favor proporcione el nombre del cementerio.
                                                            </div>
                                                        </div>
                                                       
                                                        <div class="col-12">
                                                            <button class="btn btn-primary" type="submit">Registrar Defunción</button>
                                                        </div>
                                                    </form>

                                                   
                                                   
                                                </div>
                                            </div>
                                        </div>

                                        <div class="accordion-item">
                                            <div id="DefuncionCardShow" class="accordion-collapse collapse" data-bs-parent="#DefuncionCardContainer2">
                                                <div class="accordion-body">
                                                    <h5 class="card-title">Mostrar Defuncion</h5>
                                                    Gestión de las partidas de Defuncion gg
                                                </div>
                                            </div>
                                        </div>

                                        <div class="accordion-item">
                                            <div id="DefuncionCardDelete" class="accordion-collapse collapse" data-bs-parent="#DefuncionCardContainer2">
                                                <div class="accordion-body">
                                                    <h5 class="card-title"> Eliminar Defuncion</h5>
                                                    Gestión de las partidas de Defuncion
                                                </div>
                                            </div>
                                        </div>

                                        <div class="accordion-item">
                                            <div id="DefuncionCardUpdate" class="accordion-collapse collapse" data-bs-parent="#DefuncionCardContainer2">
                                                <div class="accordion-body">
                                                    <h5 class="card-title">Actualizar Defuncion</h5>
                                                    Gestión de las partidas de Defuncion
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>

                </div>

         `;

        // Reemplaza el contenido del main
        mainContent.innerHTML = registrationFormHTML;
        const formularioBautismo = document.getElementById('formularioBautismo');
        if (formularioBautismo) {
            formularioBautismo.addEventListener('submit', crearBautismo);
        }

        const formularioConfirmacion = document.getElementById('formularioConfirmacion');
        if (formularioConfirmacion) {
            formularioConfirmacion.addEventListener('submit', crearConfirmacion);
        }

        const formularioMatrimonio = document.getElementById('formularioMatrimonio');
        if (formularioMatrimonio) {
            formularioMatrimonio.addEventListener('submit', crearMatrimonio);
        }

        const formularioDefuncion = document.getElementById('formularioDefuncion');
        if (formularioDefuncion) {
            formularioDefuncion.addEventListener('submit', registrarDefuncion);
        }


        const formularioBuscar = document.getElementById('formulariobuscar');
        if (formularioBuscar) {
            formularioBuscar.addEventListener('submit', buscarBautismo);
        }

        const form = document.getElementById('formulariobuscarConfirmacion');
        if (form) {
            form.addEventListener('submit', buscarConfirmacion);
        }
        const formMatrimonio = document.getElementById('formulariobuscarMatrimonio');
        if (formMatrimonio) {
            formMatrimonio.addEventListener('submit', buscarMatrimonio);
        }




    }

    if (GestionPartidas) {
        GestionPartidas.addEventListener('click', handleAdminClickGesionPartidas);
    }

    if (MobileGestionPartidas) {
        MobileGestionPartidas.addEventListener('click', handleAdminClickGesionPartidas);
    }

});

// Función para crear un nuevo bautismo
function crearBautismo(event) {
    event.preventDefault();

    const documentNumber = document.getElementById('validationCustom01').value;
    const baptismDate = document.getElementById('validationCustom02').value;
    const placeBirth = document.getElementById('validationCustom03').value;
    const fatherName = document.getElementById('validationCustom04').value;
    const motherName = document.getElementById('validationCustom05').value;
    const godfather1 = document.getElementById('validationCustom06').value;
    const godfather2 = document.getElementById('validationCustom07').value;

    const bautismoData = {
        documentNumber,
        baptismDate,
        placeBirth,
        fatherName,
        motherName,
        godfather1,
        godfather2
    };

    fetch('https://api-parroquia.onrender.com/baptism/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('tokenSession')}`
        },
        body: JSON.stringify(bautismoData),
    })
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => {
                    throw new Error(err.message || 'Error al crear el bautismo');
                });
            }
            return response.json();
        })
        .then(data => {
            console.log('Bautismo creado:', data);
            Swal.fire({
                icon: 'success',
                title: 'Bautismo Registrado',
                text: 'El bautismo se ha registrado exitosamente',
            });
            // Aquí podrías limpiar el formulario o redirigir a otra página
            document.getElementById('formularioBautismo').reset();
        })
        .catch(error => {
            console.error('Error al crear el bautismo:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error al registrar el bautismo',
                text: error.message || 'Ocurrió un error al intentar registrar el bautismo',
            });
        });
}

// Función para crear un nuevo confirmacion
function crearConfirmacion(event) {
    event.preventDefault();

    const documentNumber = document.getElementById('validationCustom10').value;
    const confirmationDate = document.getElementById('validationCustom11').value;
    const fatherName = document.getElementById('validationCustom12').value;
    const motherName = document.getElementById('validationCustom13').value;
    const godfather = document.getElementById('validationCustom14').value;
    const baptizedParish = document.getElementById('validationCustom15').value;

    const confirmacionData = {
        documentNumber,
        confirmationDate,
        fatherName,
        motherName,
        godfather,
        baptizedParish
    };

    fetch('https://api-parroquia.onrender.com/confirmation/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('tokenSession')}`
        },
        body: JSON.stringify(confirmacionData),
    })
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => {
                    throw new Error(err.message || 'Error al crear la confirmación');
                });
            }
            return response.json();
        })
        .then(data => {
            console.log('Confirmación creada:', data);
            Swal.fire({
                icon: 'success',
                title: 'Confirmación Registrada',
                text: 'La confirmación se ha registrado exitosamente',
            });
            // Aquí podrías limpiar el formulario o redirigir a otra página
            document.getElementById('formularioConfirmacion').reset();
        })
        .catch(error => {
            console.error('Error al crear la confirmación:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error al registrar la confirmación',
                text: error.message || 'Ocurrió un error al intentar registrar la confirmación',
            });
        });
}


function crearMatrimonio(event) {
    event.preventDefault();

    const marriageData = {
        husbandDocumentNumber: document.getElementById('husbandDocumentNumber').value,
        wifeDocumentNumber: document.getElementById('wifeDocumentNumber').value,
        marriageDate: document.getElementById('marriageDate').value,
        father_husband: document.getElementById('father_husband').value,
        mother_husband: document.getElementById('mother_husband').value,
        father_wife: document.getElementById('father_wife').value,
        mother_wife: document.getElementById('mother_wife').value,
        godfather1: document.getElementById('godfather1').value,
        godfather2: document.getElementById('godfather2').value,
        witness1: document.getElementById('witness1').value,
        witness2: document.getElementById('witness2').value
    };

    fetch('https://api-parroquia.onrender.com/marriage/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('tokenSession')}`
        },
        body: JSON.stringify(marriageData),
    })
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => {
                    throw new Error(err.message || 'Error al crear el matrimonio');
                });
            }
            return response.json();
        })
        .then(data => {
            console.log('Matrimonio creado:', data);
            Swal.fire({
                icon: 'success',
                title: 'Matrimonio Registrado',
                text: 'El matrimonio se ha registrado exitosamente',
            });
            document.getElementById('formularioMatrimonio').reset();
        })
        .catch(error => {
            console.error('Error al crear el matrimonio:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error al registrar el matrimonio',
                text: error.message || 'Ocurrió un error al intentar registrar el matrimonio',
            });
        });
}


function registrarDefuncion(event) {
    event.preventDefault();

    const deathData = {
        documentNumber: document.getElementById('documentNumberDeath').value,
        deathDate: document.getElementById('deathDate').value,
        fatherName: document.getElementById('fatherNameDeath').value,
        motherName: document.getElementById('motherNameDeath').value,
        civilStatus: document.getElementById('civilStatus').value,
        cemeteryName: document.getElementById('cemeteryName').value,

    };

    fetch('https://api-parroquia.onrender.com/death/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('tokenSession')}`
        },
        body: JSON.stringify(deathData),
    })
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => {
                    throw new Error(err.message || 'Error al registrar la defunción');
                });
            }
            return response.json();
        })
        .then(data => {
            console.log('Defunción registrada:', data);
            Swal.fire({
                icon: 'success',
                title: 'Defunción Registrada',
                text: 'La defunción se ha registrado exitosamente',
            });
            document.getElementById('formularioDefuncion').reset();
        })
        .catch(error => {
            console.error('Error al registrar la defunción:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error al registrar la defunción',
                text: error.message || 'Ocurrió un error al intentar registrar la defunción',
            });
        });
}


function buscarBautismo(event) {
    event.preventDefault();

    const documentNumber = document.getElementById('NumDocBuscar').value;

    fetch(`https://api-parroquia.onrender.com/baptism/${documentNumber}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('tokenSession')}`
        }
    })
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => {
                    throw new Error(err.message || 'Bautismo no encontrado');
                });
            }
            return response.json();
        })
        .then(data => {
            console.log('Bautismo encontrado:', data);

            // Limpiar la tabla
            const tablaBautismo = document.getElementById('tablaBautismo').getElementsByTagName('tbody')[0];
            tablaBautismo.innerHTML = '';

            // Crear una nueva fila
            const row = tablaBautismo.insertRow();

            // Insertar celdas con los datos
            row.insertCell(0).textContent = data.baptized.name;
            row.insertCell(1).textContent = data.baptized.lastName;
            row.insertCell(2).textContent = data.baptized.documentNumber;
            row.insertCell(3).textContent = data.baptized.mail;
            row.insertCell(4).textContent = new Date(data.baptismDate).toLocaleDateString();
            row.insertCell(5).textContent = data.godfather1;
            document.getElementById('formulariobuscar').reset();

            Swal.fire({
                icon: 'success',
                title: 'Bautismo Encontrado',
                text: 'Los datos del bautismo se han cargado en la tabla',
            });
        })
        .catch(error => {
            console.error('Error al buscar el bautismo:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error al buscar el bautismo',
                text: error.message || 'Ocurrió un error al intentar buscar el bautismo',
            });
            // Limpiar la tabla en caso de error
            document.getElementById('tablaBautismo').getElementsByTagName('tbody')[0].innerHTML = '';
        });
}



function buscarConfirmacion(event) {
    event.preventDefault();

    const documentNumber = document.getElementById('NumDocBuscarConfirmacion').value;

    fetch(`https://api-parroquia.onrender.com/confirmation/${documentNumber}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('tokenSession')}`
        }
    })
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => {
                    throw new Error(err.message || 'Confirmación no encontrada');
                });
            }
            return response.json();
        })
        .then(data => {
            console.log('Confirmación encontrada:', data);

            // Limpiar la tabla
            const tablaConfirmacion = document.getElementById('tablaConfirmacion').getElementsByTagName('tbody')[0];
            tablaConfirmacion.innerHTML = '';

            // Crear una nueva fila
            const row = tablaConfirmacion.insertRow();

            // Insertar celdas con los datos
            row.insertCell(0).textContent = data.confirmed.name;
            row.insertCell(1).textContent = data.confirmed.lastName;
            row.insertCell(2).textContent = data.confirmed.documentNumber;
            row.insertCell(3).textContent = data.confirmed.mail;
            row.insertCell(4).textContent = new Date(data.confirmationDate).toLocaleDateString();
            row.insertCell(5).textContent = data.godfather1 || 'N/A';

            document.getElementById('formulariobuscarConfirmacion').reset();

            Swal.fire({
                icon: 'success',
                title: 'Confirmación Encontrada',
                text: 'Los datos de la confirmación se han cargado en la tabla',
            });
        })
        .catch(error => {
            console.error('Error al buscar la confirmación:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error al buscar la confirmación',
                text: error.message || 'Ocurrió un error al intentar buscar la confirmación',
            });
            // Limpiar la tabla en caso de error
            document.getElementById('tablaConfirmacion').getElementsByTagName('tbody')[0].innerHTML = '';
        });
}

function buscarMatrimonio(event) {
    event.preventDefault();

    const documentNumber = document.getElementById('NumDocBuscarMatrimonio').value;

    fetch(`https://api-parroquia.onrender.com/marriage/${documentNumber}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('tokenSession')}`
        }
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(err => {
                throw new Error(err.message || 'Matrimonio no encontrado');
            });
        }
        return response.json();
    })
    .then(data => {
        console.log('Matrimonio encontrado:', data);

        // Limpiar la tabla
        const tablaMatrimonio = document.getElementById('tablaMatrimonio').getElementsByTagName('tbody')[0];
        tablaMatrimonio.innerHTML = '';

        // Crear una nueva fila
        const row = tablaMatrimonio.insertRow();

        // Insertar celdas con los datos
        row.insertCell(0).textContent = data.husband.name;
        row.insertCell(1).textContent = data.husband.lastName;
        row.insertCell(2).textContent = data.wife.name;
        row.insertCell(3).textContent = data.wife.lastName;
        row.insertCell(4).textContent = data.husband.documentNumber;
        row.insertCell(5).textContent = data.wife.documentNumber;
        row.insertCell(6).textContent = data.husband.mail || data.wife.mail;
        row.insertCell(7).textContent = new Date(data.marriageDate).toLocaleDateString();

        document.getElementById('formulariobuscarMatrimonio').reset();

        Swal.fire({
            icon: 'success',
            title: 'Matrimonio Encontrado',
            text: 'Los datos del matrimonio se han cargado en la tabla',
        });
    })
    .catch(error => {
        console.error('Error al buscar el matrimonio:', error);
        Swal.fire({
            icon: 'error',
            title: 'Error al buscar el matrimonio',
            text: error.message || 'Ocurrió un error al intentar buscar el matrimonio',
        });
        // Limpiar la tabla en caso de error
        document.getElementById('tablaMatrimonio').getElementsByTagName('tbody')[0].innerHTML = '';
    });
}