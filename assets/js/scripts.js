document.addEventListener("DOMContentLoaded", () => {
    //Datos hora y fecha
    var d = new Date();
    var hour = d.getHours()+':'+ d.getMinutes();
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    var nowDate = `${day}-${month}-${year}`;
    //Dato n° terminal
    var terminal = Math.random();
    terminal = terminal * 10 + 1;
    terminal = Math.trunc(terminal);
    //Dato n° vuelo
    var vuelo =  Math.round(Math.random() * (4000 - 4050) + 4000);

    //Creación contenido html 
    document.getElementById("contenido").innerHTML = `        <div class="container">
    <div class="container text-center">
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <div class="seccionUno">
                    <p class="seccionUno__parrafoUno">Bienvenido a la plataforma Eport</p>
                    <p class="seccionUno__parrafoDos">Aqui podrá encontrar la información de vuelos más reciente
                        e nuestro aeropuerto</p>
                </div>
            </div>
            <div class="col-md-3"></div>
        </div>
        <div class="row seccionDos">
            <div class="col-md-3"></div>
            <div class="col-md-3 seccionDos__date" id="hora"></div>
            <div class="col-md-3 seccionDos__date" id="fecha"></div>
            <div class="col-md-3"></div>
        </div>
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4 seccionTres">
                <div id="vuelo"></div>
            </div>
            <div class="col-md-4"></div>
        </div>
    </div>
</div>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-body">
                <p>Pasajero, se le recuerda que para abordar el avión debe tener en mano su pasaporte y su boleto de
                    embarque. Manténgase atento a los avisos mediante esta plataforma </p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>`;
    //Modal
    $('#exampleModal').modal('toggle');
    //Relleno de datos
    document.getElementById("hora").innerHTML =`<p class="p1">Hora:</p>`+`<p class="p2">`+hour+`</p>`;
    document.getElementById("fecha").innerHTML =`<p class="p1">Fecha:</p>`+`<p class="p2">`+nowDate+`</p>`;
    document.getElementById("vuelo").innerHTML =`<p class="p2">El vuelo más proximo:</p>`+`<p class="p1">Numero de vuelo: `+vuelo+`</p>` +`<p class="p1">Terminal: `+terminal+`</p>`;


});