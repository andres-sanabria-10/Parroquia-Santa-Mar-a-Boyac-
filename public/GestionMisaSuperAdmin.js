document.addEventListener('DOMContentLoaded', function () {
    const mainContent = document.getElementById('Principal');
    const Gestionmisas = document.getElementById('Gestionmisas');

    const contenidoInicial = mainContent.innerHTML;

    function handleGestionMisasClick(e) {
        e.preventDefault();
        const gestionMisasHTML = `
        <style>
        .time-slot {
            width: 100px;
            height: 50px;
            margin: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
        .time-slot.selected {
            background-color: #007bff;
            color: white;
        }
        .time-slot.unavailable {
            background-color: #dc3545;
            color: white;
        }
    </style>
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
        initializeMassManagement();    
    }

    if (Gestionmisas) {
        Gestionmisas.addEventListener('click', handleGestionMisasClick);
    }
});

function initializeMassManagement() {
    const datePicker = document.getElementById('datePicker');
    const confirmDateBtn = document.getElementById('confirmDate');
    const timeSlots = document.getElementById('timeSlots');
    const timeSlotsContainer = document.getElementById('timeSlotsContainer');
    const saveMassBtn = document.getElementById('saveMass');
    const deleteDatePicker = document.getElementById('deleteDatePicker');
    const loadTimeSlotsToDeleteBtn = document.getElementById('loadTimeSlotsToDelete');
    const timeSlotsToDelete = document.getElementById('timeSlotsToDelete');
    const deleteSelectedSlotsBtn = document.getElementById('deleteSelectedSlots');

    // Establecer la fecha mínima como hoy
    const today = new Date().toISOString().split('T')[0];
    datePicker.min = today;
    deleteDatePicker.min = today;

    confirmDateBtn.addEventListener('click', function() {
        if (datePicker.value) {
            timeSlots.classList.remove('d-none');
            generateTimeSlots();
        } else {
            alert('Por favor, seleccione una fecha.');
        }
    });

    function generateTimeSlots() {
        timeSlotsContainer.innerHTML = '';
        for (let hour = 8; hour <= 18; hour++) {
            const timeSlot = document.createElement('div');
            timeSlot.className = 'time-slot btn btn-outline-primary';
            timeSlot.textContent = `${hour}:00`;
            timeSlot.addEventListener('click', function() {
                this.classList.toggle('selected');
            });
            timeSlotsContainer.appendChild(timeSlot);
        }
    }

    saveMassBtn.addEventListener('click', function() {
        // Código para guardar los horarios seleccionados
    });

    loadTimeSlotsToDeleteBtn.addEventListener('click', function() {
        // Código para cargar los horarios a eliminar
    });

    deleteSelectedSlotsBtn.addEventListener('click', function() {
        // Código para eliminar los horarios seleccionados
    });
}
