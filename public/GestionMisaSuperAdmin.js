document.addEventListener('DOMContentLoaded', function () {
    const mainContent = document.getElementById('Principal');
    const Gestionmisas = document.getElementById('Gestionmisas');

    const contenidoInicial = mainContent.innerHTML;

    function handleGestionMisasClick(e) {
        e.preventDefault();
        const gestionMisasHTML = `
        <div class="d-flex flex-column w-100">
            <div class="container mt-5">
                    <h1 class="mb-4">Programación de Misas</h1>
                    
                    <!-- Sección para agregar misas -->
                    <div class="mb-3">
                        <label for="datePicker" class="form-label">Seleccione la fecha:</label>
                        <input type="date" class="form-control" id="datePicker">
                    </div>
                    <button id="confirmDate" class="btn btn-primary mb-3">Confirmar Fecha</button>

                    <div id="timeSlots" class="d-none">
                        <h2>Seleccione los horarios:</h2>
                        <div id="timeSlotsContainer" class="d-flex flex-wrap"></div>
                        <button id="saveMass" class="btn btn-success mt-3">Guardar Horarios</button>
                    </div>

                    <!-- Sección para eliminar misas -->
                    <div id="deleteSection" class="mt-5">
                        <h2>Eliminar Horarios</h2>
                        <div class="mb-3">
                            <label for="deleteDatePicker" class="form-label">Seleccione la fecha:</label>
                            <input type="date" class="form-control" id="deleteDatePicker">
                        </div>
                        <button id="loadTimeSlotsToDelete" class="btn btn-primary mb-3">Cargar Horarios</button>
                        <div id="timeSlotsToDelete" class="d-flex flex-wrap"></div>
                        <button id="deleteSelectedSlots" class="btn btn-danger mt-3 d-none">Eliminar Seleccionados</button>
                    </div>
                </div>

        </div>
        `;

        mainContent.innerHTML = gestionMisasHTML;

        const formularioMisa = document.getElementById('formularioMisa');
        if (formularioMisa) {
            formularioMisa.addEventListener('submit', programarMisa);
        }
    }

    if (Gestionmisas) {
        Gestionmisas.addEventListener('click', handleGestionMisasClick);
    }
});

function programarMisa(e) {
    e.preventDefault();
    // Lógica para programar la misa aquí
}
