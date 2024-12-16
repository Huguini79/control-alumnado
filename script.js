let alumnos_info = JSON.parse(localStorage.getItem('lista_storage')) || [];

document.addEventListener('DOMContentLoaded', function() {
    mostrarLista();
    const boton_registrar = document.querySelector("#boton_registrar");

    

    boton_registrar.addEventListener('click', function() {
        let alumno_entrada_texto_conseguido = document.getElementById("alumno").value;
        if(alumno_entrada_texto_conseguido == "comando_eliminar_todo") {
            localStorage.removeItem('lista_storage');
            mostrarLista();

        } else {
            let fecha = new Date();
            let alumno_y_fecha = alumno_entrada_texto_conseguido + " - " + fecha.toLocaleString();
            alumnos_info.push(alumno_y_fecha);
            localStorage.setItem('lista_storage', JSON.stringify(alumnos_info));
            mostrarLista();
        }
    });

    function mostrarLista() {
        let div = document.getElementById("contenido_info_alumno");

        let lista_storage = JSON.parse(localStorage.getItem('lista_storage'));

        if(lista_storage) {
            div.innerHTML = lista_storage.join("<br>");

        } else {
            div.innerHTML = "La lista está vacía, agrega a algún alumno.";
        }

    }

});