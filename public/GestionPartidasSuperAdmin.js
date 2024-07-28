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
                                                            <label for="validationCustom01" class="form-label">Numero de Documento</label>
                                                            <input type="text" class="form-control" id="NumDocBuscar" required>
                                                            <div class="valid-feedback">
                                                            Looks good!
                                                            </div>
                                                        </div>
                                                         <div class="col-12">
                                                            <button class="btn btn-primary" type="submit">Buscar</button>
                                                        </div>
                                                        </form>

                                                            <table class="table">
                                                                <thead>
                                                                    <tr>
                                                                    <th scope="col">#</th>
                                                                    <th scope="col">First</th>
                                                                    <th scope="col">Last</th>
                                                                    <th scope="col">Handle</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                    <th scope="row">1</th>
                                                                    <td>Mark</td>
                                                                    <td>Otto</td>
                                                                    <td>@mdo</td>
                                                                    </tr>
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
                                                    Gestión de las partidas de Confirmacion
                                                        <form class="row g-3 needs-validation" novalidate id="formularioConfirmacion">
                                                            <div class="col-md-6">
                                                                <label for="validationCustom01" class="form-label">Número de Documento</label>
                                                                <input type="text" class="form-control" id="validationCustom10" name="documentNumber" required>
                                                                <div class="invalid-feedback">
                                                                    Por favor proporcione un número de documento válido.
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <label for="validationCustom02" class="form-label">Fecha de Confirmación</label>
                                                                <input type="date" class="form-control" id="validationCustom11" name="confirmationDate" required>
                                                                <div class="invalid-feedback">
                                                                    Por favor seleccione una fecha válida.
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <label for="validationCustom04" class="form-label">Nombre del Padre</label>
                                                                <input type="text" class="form-control" id="validationCustom12" name="fatherName" required>
                                                                <div class="invalid-feedback">
                                                                    Por favor proporcione el nombre del padre.
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <label for="validationCustom05" class="form-label">Nombre de la Madre</label>
                                                                <input type="text" class="form-control" id="validationCustom13" name="motherName" required>
                                                                <div class="invalid-feedback">
                                                                    Por favor proporcione el nombre de la madre.
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <label for="validationCustom06" class="form-label">Nombre del Padrino</label>
                                                                <input type="text" class="form-control" id="validationCustom14" name="godfather" required>
                                                                <div class="invalid-feedback">
                                                                    Por favor proporcione el nombre del padrino.
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <label for="validationCustom07" class="form-label">Parroquia Bautizada (Opcional)</label>
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
                                                    Gestión de las partidas de Confirmacion
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
                                                    <h5 class="card-title">Matrimonio</h5>
                                                    Gestión de las partidas de Matrimonio
                                                    <!-- ... (formulario sin cambios) ... -->Matrimonio
                                                </div>
                                            </div>
                                        </div>

                                        <div class="accordion-item">
                                            <div id="MatrimonioCardShow" class="accordion-collapse collapse" data-bs-parent="#MatrimonioCardContainer1">
                                                <div class="accordion-body">
                                                    <h5 class="card-title">Mostrar Matrimonio</h5>
                                                    Gestión de las partidas de Matrimonio gg
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
                                                    <h5 class="card-title">Matrimonio</h5>
                                                    Gestión de las partidas de Defuncion
                                                    <!-- ... (formulario sin cambios) ... -->Defuncion
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
