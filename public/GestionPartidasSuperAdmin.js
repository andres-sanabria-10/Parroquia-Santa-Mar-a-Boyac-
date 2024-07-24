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
                                    <div class="container" id="bautismosCards">
                                        <div class="card mt-3 collapse" id="bautismosCardCreate">
                                            <div class="card-body">
                                                <h5 class="card-title">Baustimosssss</h5>
                                                Gestión de las partidas de Bautismo
                                                <form class="row g-3 needs-validation" novalidate>
                                                    <div class="col-md-4">
                                                        <label for="validationCustom01" class="form-label">First
                                                            name</label>
                                                        <input type="text" class="form-control" id="validationCustom01"
                                                            value="Mark" required>
                                                        <div class="valid-feedback">
                                                            Looks good!
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label for="validationCustom02" class="form-label">Last
                                                            name</label>
                                                        <input type="text" class="form-control" id="validationCustom02"
                                                            value="Otto" required>
                                                        <div class="valid-feedback">
                                                            Looks good!
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label for="validationCustomUsername"
                                                            class="form-label">Username</label>
                                                        <div class="input-group has-validation">
                                                            <span class="input-group-text"
                                                                id="inputGroupPrepend">@</span>
                                                            <input type="text" class="form-control"
                                                                id="validationCustomUsername"
                                                                aria-describedby="inputGroupPrepend" required>
                                                            <div class="invalid-feedback">
                                                                Please choose a username.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="validationCustom03" class="form-label">City</label>
                                                        <input type="text" class="form-control" id="validationCustom03"
                                                            required>
                                                        <div class="invalid-feedback">
                                                            Please provide a valid city.
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <label for="validationCustom04" class="form-label">State</label>
                                                        <select class="form-select" id="validationCustom04" required>
                                                            <option selected disabled value="">Choose...</option>
                                                            <option>...</option>
                                                        </select>
                                                        <div class="invalid-feedback">
                                                            Please select a valid state.
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <label for="validationCustom05" class="form-label">Zip</label>
                                                        <input type="text" class="form-control" id="validationCustom05"
                                                            required>
                                                        <div class="invalid-feedback">
                                                            Please provide a valid zip.
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="invalidCheck" required>
                                                            <label class="form-check-label" for="invalidCheck">
                                                                Agree to terms and conditions
                                                            </label>
                                                            <div class="invalid-feedback">
                                                                You must agree before submitting.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <button class="btn btn-primary" type="submit">Submit
                                                            form</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="container">
                                        <div class="card mt-3 collapse" id="bautismosCardShow">
                                            <div class="card-body">
                                                <h5 class="card-title">Baustimos</h5>
                                                Gestión de las partidas de Bautismo

                                            </div>
                                        </div>
                                    </div>

                                    <div class="container">
                                        <div class="card mt-3 collapse" id="bautismosCardDelete">
                                            <div class="card-body">
                                                <h5 class="card-title">Baustimos</h5>
                                                Gestión de las partidas de Bautismo

                                            </div>
                                        </div>
                                    </div>

                                    <div class="container">
                                        <div class="card mt-3 collapse" id="bautismosCardUpdate">
                                            <div class="card-body">
                                                <h5 class="card-title">Baustimos</h5>
                                                Gestión de las partidas de Bautismo

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
                                    <div class="container" id="ConfirmacionesCard">
                                        <div class="card mt-3 collapse" id="ConfirmacionCardCreate">
                                            <div class="card-body">
                                                <h5 class="card-title">Confirmacion</h5>
                                                Gestión de las partidas de Confirmacion
                                                <form class="row g-3 needs-validation" novalidate>
                                                    <div class="col-md-4">
                                                        <label for="validationCustom01" class="form-label">First
                                                            name</label>
                                                        <input type="text" class="form-control" id="validationCustom01"
                                                            value="Mark" required>
                                                        <div class="valid-feedback">
                                                            Looks good!
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label for="validationCustom02" class="form-label">Last
                                                            name</label>
                                                        <input type="text" class="form-control" id="validationCustom02"
                                                            value="Otto" required>
                                                        <div class="valid-feedback">
                                                            Looks good!
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label for="validationCustomUsername"
                                                            class="form-label">Username</label>
                                                        <div class="input-group has-validation">
                                                            <span class="input-group-text"
                                                                id="inputGroupPrepend">@</span>
                                                            <input type="text" class="form-control"
                                                                id="validationCustomUsername"
                                                                aria-describedby="inputGroupPrepend" required>
                                                            <div class="invalid-feedback">
                                                                Please choose a username.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="validationCustom03" class="form-label">City</label>
                                                        <input type="text" class="form-control" id="validationCustom03"
                                                            required>
                                                        <div class="invalid-feedback">
                                                            Please provide a valid city.
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <label for="validationCustom04" class="form-label">State</label>
                                                        <select class="form-select" id="validationCustom04" required>
                                                            <option selected disabled value="">Choose...</option>
                                                            <option>...</option>
                                                        </select>
                                                        <div class="invalid-feedback">
                                                            Please select a valid state.
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <label for="validationCustom05" class="form-label">Zip</label>
                                                        <input type="text" class="form-control" id="validationCustom05"
                                                            required>
                                                        <div class="invalid-feedback">
                                                            Please provide a valid zip.
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="invalidCheck" required>
                                                            <label class="form-check-label" for="invalidCheck">
                                                                Agree to terms and conditions
                                                            </label>
                                                            <div class="invalid-feedback">
                                                                You must agree before submitting.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <button class="btn btn-primary" type="submit">Submit
                                                            form</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="container">
                                        <div class="card mt-3 collapse" id="ConfirmacionCardShow">
                                            <div class="card-body">
                                                <h5 class="card-title">Confirmacion</h5>
                                                Gestión de las partidas de Confirmacion

                                            </div>
                                        </div>
                                    </div>

                                    <div class="container">
                                        <div class="card mt-3 collapse" id="ConfirmacionCardDelete">
                                            <div class="card-body">
                                                <h5 class="card-title">Confirmacion</h5>
                                                Gestión de las partidas de Confirmacion

                                            </div>
                                        </div>
                                    </div>

                                    <div class="container">
                                        <div class="card mt-3 collapse" id="ConfirmacionCardUpdate">
                                            <div class="card-body">
                                                <h5 class="card-title">Confirmacion</h5>
                                                Gestión de las partidas de Confirmacion

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
                                    <div class="container" id="MatrimonioCard">
                                        <div class="card mt-3 collapse" id="MatrimonioCardCreate">
                                            <div class="card-body">
                                                <h5 class="card-title">Matrimonio</h5>
                                                Gestión de las partidas de Matrimonio
                                                <form class="row g-3 needs-validation" novalidate>
                                                    <div class="col-md-4">
                                                        <label for="validationCustom01" class="form-label">First
                                                            name</label>
                                                        <input type="text" class="form-control" id="validationCustom01"
                                                            value="Mark" required>
                                                        <div class="valid-feedback">
                                                            Looks good!
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label for="validationCustom02" class="form-label">Last
                                                            name</label>
                                                        <input type="text" class="form-control" id="validationCustom02"
                                                            value="Otto" required>
                                                        <div class="valid-feedback">
                                                            Looks good!
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label for="validationCustomUsername"
                                                            class="form-label">Username</label>
                                                        <div class="input-group has-validation">
                                                            <span class="input-group-text"
                                                                id="inputGroupPrepend">@</span>
                                                            <input type="text" class="form-control"
                                                                id="validationCustomUsername"
                                                                aria-describedby="inputGroupPrepend" required>
                                                            <div class="invalid-feedback">
                                                                Please choose a username.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="validationCustom03" class="form-label">City</label>
                                                        <input type="text" class="form-control" id="validationCustom03"
                                                            required>
                                                        <div class="invalid-feedback">
                                                            Please provide a valid city.
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <label for="validationCustom04" class="form-label">State</label>
                                                        <select class="form-select" id="validationCustom04" required>
                                                            <option selected disabled value="">Choose...</option>
                                                            <option>...</option>
                                                        </select>
                                                        <div class="invalid-feedback">
                                                            Please select a valid state.
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <label for="validationCustom05" class="form-label">Zip</label>
                                                        <input type="text" class="form-control" id="validationCustom05"
                                                            required>
                                                        <div class="invalid-feedback">
                                                            Please provide a valid zip.
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="invalidCheck" required>
                                                            <label class="form-check-label" for="invalidCheck">
                                                                Agree to terms and conditions
                                                            </label>
                                                            <div class="invalid-feedback">
                                                                You must agree before submitting.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <button class="btn btn-primary" type="submit">Submit
                                                            form</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="container">
                                        <div class="card mt-3 collapse" id="MatrimonioCardShow">
                                            <div class="card-body">
                                                <h5 class="card-title">Matrimonio</h5>
                                                Gestión de las partidas de Matrimonio

                                            </div>
                                        </div>
                                    </div>

                                    <div class="container">
                                        <div class="card mt-3 collapse" id="MatrimonioCardDelete">
                                            <div class="card-body">
                                                <h5 class="card-title">Matrimonio</h5>
                                                Gestión de las partidas de Matrimonio

                                            </div>
                                        </div>
                                    </div>

                                    <div class="container">
                                        <div class="card mt-3 collapse" id="MatrimonioCardUpdate">
                                            <div class="card-body">
                                                <h5 class="card-title">Matrimonio</h5>
                                                Gestión de las partidas de Matrimonio

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

                                    <!-- cards de Matrimonio -->
                                    <div class="container" id="DefuncionCard">
                                        <div class="card mt-3 collapse" id="DefuncionCardCreate">
                                            <div class="card-body">
                                                <h5 class="card-title">Defuncion</h5>
                                                Gestión de las partidas de Defuncion
                                                <form class="row g-3 needs-validation" novalidate>
                                                    <div class="col-md-4">
                                                        <label for="validationCustom01" class="form-label">First
                                                            name</label>
                                                        <input type="text" class="form-control" id="validationCustom01"
                                                            value="Mark" required>
                                                        <div class="valid-feedback">
                                                            Looks good!
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label for="validationCustom02" class="form-label">Last
                                                            name</label>
                                                        <input type="text" class="form-control" id="validationCustom02"
                                                            value="Otto" required>
                                                        <div class="valid-feedback">
                                                            Looks good!
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label for="validationCustomUsername"
                                                            class="form-label">Username</label>
                                                        <div class="input-group has-validation">
                                                            <span class="input-group-text"
                                                                id="inputGroupPrepend">@</span>
                                                            <input type="text" class="form-control"
                                                                id="validationCustomUsername"
                                                                aria-describedby="inputGroupPrepend" required>
                                                            <div class="invalid-feedback">
                                                                Please choose a username.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="validationCustom03" class="form-label">City</label>
                                                        <input type="text" class="form-control" id="validationCustom03"
                                                            required>
                                                        <div class="invalid-feedback">
                                                            Please provide a valid city.
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <label for="validationCustom04" class="form-label">State</label>
                                                        <select class="form-select" id="validationCustom04" required>
                                                            <option selected disabled value="">Choose...</option>
                                                            <option>...</option>
                                                        </select>
                                                        <div class="invalid-feedback">
                                                            Please select a valid state.
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <label for="validationCustom05" class="form-label">Zip</label>
                                                        <input type="text" class="form-control" id="validationCustom05"
                                                            required>
                                                        <div class="invalid-feedback">
                                                            Please provide a valid zip.
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="invalidCheck" required>
                                                            <label class="form-check-label" for="invalidCheck">
                                                                Agree to terms and conditions
                                                            </label>
                                                            <div class="invalid-feedback">
                                                                You must agree before submitting.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <button class="btn btn-primary" type="submit">Submit
                                                            form</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="container">
                                        <div class="card mt-3 collapse" id="DefuncionCardShow">
                                            <div class="card-body">
                                                <h5 class="card-title">Defuncion</h5>
                                                Gestión de las partidas de Defuncion

                                            </div>
                                        </div>
                                    </div>

                                    <div class="container">
                                        <div class="card mt-3 collapse" id="DefuncionCardDelete">
                                            <div class="card-body">
                                                <h5 class="card-title">Defuncion</h5>
                                                Gestión de las partidas de Defuncion

                                            </div>
                                        </div>
                                    </div>

                                    <div class="container">
                                        <div class="card mt-3 collapse" id="DefuncionCardUpdate">
                                            <div class="card-body">
                                                <h5 class="card-title">Defuncion</h5>
                                                Gestión de las partidas de Defuncion

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



    }

    if (GestionPartidas) {
        GestionPartidas.addEventListener('click', handleAdminClickGesionPartidas);
    }

    if (MobileGestionPartidas) {
        MobileGestionPartidas.addEventListener('click', handleAdminClickGesionPartidas);
    }

}); 
