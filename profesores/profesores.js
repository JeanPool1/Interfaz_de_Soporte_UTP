
const expresiones = {
    usuario: /^[a-z0-9]{4,16}$/,
    password: /^.{4,12}$/,
    lista: /^[0-9]{2}[A-Z]$/,
    seccion: /^[0-9]{2}[A-Z]$/,
    nombre: /^[a-zA-ZÁ-ÿ]+\s[a-zA-ZÁ-ÿ]+$/,
    curso: /^[a-zA-ZÁ-ÿ]+$/,
    asistencias: /^([0-2][0-9]|30)$/,
    faltas: /^([0-2][0-9]|30)$/
}

const button = document.getElementById("profesor1");

function verLista(e) {

    e.preventDefault();

    let list = document.getElementById("list").value;
    let text_profesor = document.getElementById("text_profesor");

    if(list == "17A") {

        text_profesor.innerHTML = `
            Aaron Martinez <br> <br>
            Shirley Paredes <br> <br>
        `;

    } else if(list == "17B"){

        text_profesor.innerHTML = `
            Rachel James<br> <br>
            Emma James <br> <br>
        `;

    } else {
        text_profesor.innerHTML = `SECCIÓN NO ENCONTRADA.`
    }
    
}

button.addEventListener('click', verLista);



// *******************************************************************************


let agregar = document.getElementById("agregar");

function agregarTabla(e) {

    e.preventDefault();

    let section = document.getElementById("section").value;
    let name = document.getElementById("nombre").value;
    let curso = document.getElementById("curso").value;
    let asistencias = parseInt(document.getElementById("asistencias").value);
    let faltas = parseInt(document.getElementById("faltas").value);
    let texto = document.getElementById("text2");
    let section_input = document.querySelector(".input");
    let name_input = document.querySelector(".input1");
    let curso_input = document.querySelector(".input2");
    let asistencias_input = document.querySelector(".input3");
    let faltas_input = document.querySelector(".input4");


    function insertarDatos() {
    
    let table = document.getElementById("table");

    let newTable = table.insertRow(-1);

    let newCell = newTable.insertCell(0);
    newCell.textContent = section;

    newCell = newTable.insertCell(1);
    newCell.textContent = name;

    newCell = newTable.insertCell(2);
    newCell.textContent = curso;

    newCell = newTable.insertCell(3);
    newCell.textContent = asistencias;

    newCell = newTable.insertCell(4);
    newCell.textContent = faltas;

    let newDeleteCel = newTable.insertCell(5);
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<img src="media/delete.png" class = "btnDelete">';
    deleteButton.style.cursor = "pointer";
    newDeleteCel.appendChild(deleteButton);

    deleteButton.addEventListener('click', (event) => {
        event.target.parentNode.parentNode.parentNode.remove();
    })
    }

    function mostrarError() {
        texto.textContent = "Ha cometido un error en la digitación."
    }

    function quitarError() {
        texto.textContent = "";
    }

    function agregarInvalidInput(a) {
        a.classList.add("invalid_inputs");
    }

    function quitarInvalidInput(b) {
        b.classList.remove("invalid_inputs");
    }  

    if(section == "17A") {
        quitarError();
        quitarInvalidInput(section_input);

        if(name == "Aaron Martinez" || name == "Shirley Paredes") {
            quitarError();
            quitarInvalidInput(name_input);

            if(curso == "Redes" || curso == "Fisica" || curso == "Quimica") {
                quitarError();
                quitarInvalidInput(curso_input);

                if(!isNaN(asistencias) && asistencias >= 0 && asistencias <= 30) {
                    quitarError();
                    quitarInvalidInput(asistencias_input);

                    if(!isNaN(faltas) && faltas >= 0 && faltas <= 30) {
                        quitarError();
                        quitarInvalidInput(faltas_input);
                        insertarDatos();

                    } else{
                        mostrarError()
                        agregarInvalidInput(faltas_input);
                    }

                } else {
                    mostrarError();
                    agregarInvalidInput(asistencias_input);
                }
            } else {
                mostrarError();
                agregarInvalidInput(curso_input);
            }

        } else {
            mostrarError();
            agregarInvalidInput(name_input);
        }
    } else if(section == "17B") {
        quitarError();
        quitarInvalidInput(section_input);

        if(name == "Rachel James" || name == "Emma James") {
            quitarError();
            quitarInvalidInput(name_input);

            if(curso == "Redes" || curso == "Fisica" || curso == "Quimica") {
                quitarError();
                quitarInvalidInput(curso_input);

                if(!isNaN(asistencias)) {
                    quitarError();
                    quitarInvalidInput(asistencias_input);

                    if(!isNaN(faltas)) {
                        quitarError();
                        quitarInvalidInput(faltas_input);
                        insertarDatos();
                    } else {
                        mostrarError()
                        agregarInvalidInput(faltas_input);
                    } 
                
                }else {
                    mostrarError();
                    agregarInvalidInput(asistencias_input);
                }
            } else {
                mostrarError();
                agregarInvalidInput(curso_input);
            }

        } else {
            mostrarError();
            agregarInvalidInput(name_input);
        }
    } else {
        mostrarError();
        agregarInvalidInput(section_input);
    } 
}
agregar.addEventListener('click', agregarTabla)



// *************** MODAL: PROFESORES**************

const btn_modal_profesor = document.getElementById("btn_modal_profesor");
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const campos = {
    usuario: false,
    password: false
}

const validarFormulario = (e) => {
    switch(e.target.name) {
        case "usuario":
            validarCampo(expresiones.usuario, e.target, 'usuario');
        break;

        case "password": 
            validarCampo(expresiones.password, e.target, 'password');
        break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario_grupo-incorrecto');

        document.getElementById(`grupo__${campo}`).classList.add('formulario_grupo-correcto');

        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');

        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');

        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');

        campos[campo] = true;

    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario_grupo-incorrecto');

        document.getElementById(`grupo__${campo}`).classList.remove('formulario_grupo-correcto');

        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');

        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');

        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');

        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
})



function modalProfesor(e) {

    e.preventDefault();
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;
    let modal_prof = document.getElementById("modal_profesor");
    let mostrarProf = document.getElementById("profesores");
    let nombre = "";

    function textoPorCadaProfesorMujer() {
        return `Bienvenida profesora <span>${nombre}</span>. Por favor, utilice los siguientes botones para conocer la lista de todos los alumnos de su curso, así como tambíen poder agregar algunos datos sobre ellos.`;
    }

    function textoPorCadaProfesorHombre() {
        return `Bienvenida profesor <span>${nombre}</span>. Por favor, utilice los siguientes botones para conocer la lista de todos los alumnos de su curso, así como tambíen poder agregar algunos datos sobre ellos.`;
    }

    function agregarParrafoMujer() {
        const inicioProfesor = document.querySelector('.inicio_profesor');
        const parrafoInicioProfesor = document.createElement('p');
        parrafoInicioProfesor.innerHTML = textoPorCadaProfesorMujer();

        inicioProfesor.appendChild(parrafoInicioProfesor);
    }

    function agregarParrafoHombre() {
        const inicioProfesor = document.querySelector('.inicio_profesor');
        const parrafoInicioProfesor = document.createElement('p');
        parrafoInicioProfesor.innerHTML = textoPorCadaProfesorHombre();

        inicioProfesor.appendChild(parrafoInicioProfesor);
    }

    if(usuario == "user01" && password == "user01") {

        modal_prof.classList.add('modal_profesor_out');
        mostrarProf.classList.remove('quitar');
        mostrarProf.classList.add('profesores');
        nombre = "Christoper Morgan";

        agregarParrafoHombre();


    } else if(usuario == "user02" && password == "user02") {

        modal_prof.classList.add('modal_profesor_out');
        mostrarProf.classList.remove('quitar');
        mostrarProf.classList.add('profesores');
        nombre = "Fiorella Flores";

        agregarParrafoMujer();

    } else {
        alert("DATOS INCORRECTOS.");
    }
}

btn_modal_profesor.addEventListener('click', modalProfesor);
