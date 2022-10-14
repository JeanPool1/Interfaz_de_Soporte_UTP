const button2 = document.getElementById("boton2");
const button4 = document.getElementById("boton4");


// ************************** MODAL: ALUMNOS *************************


const btn_modal_alumno = document.getElementById("btn_modal_alumno");
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    codigo: /^(U)[0-9]{8}$/,
    password: /^.{4,12}$/
}

const campos = {
    codigo: false,
    password: false
}

const validarFormulario = (e) => {
    switch(e.target.name) {
        case "codigo":
            validarCampo(expresiones.codigo, e.target, 'codigo');
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


function modalAlumno(e) {

    e.preventDefault();
    let codigo = document.getElementById("codigo").value;
    let password = document.getElementById("password").value;
    let modal_alum = document.getElementById("modal_alumno");
    let mostrarAlum = document.getElementById("alumnos");
    let nombre = "";
    let text3 = document.getElementById("text_alumn1");

    function textoPorCadaAlumnoMujer() {
        return `Bienvenida alumna <span>${nombre}</span>. Por favor, utilice los siguientes botones para conocer las notas de todos sus cursos, así como tambíen su ponderado final.`;
    }

    function textoPorCadaAlumnoHombre() {
        return `Bienvenida alumno <span>${nombre}</span>. Por favor, utilice los siguientes botones para conocer las notas de todos sus cursos, así como tambíen su ponderado final.`;
    }

    function agregarParrafoMujer() {
        const inicioAlumno = document.querySelector('.inicio_alumno');
        const parrafoInicioAlumno = document.createElement('p');
        parrafoInicioAlumno.innerHTML = textoPorCadaAlumnoMujer();

        inicioAlumno.appendChild(parrafoInicioAlumno);
    }

    function agregarParrafoHombre() {
        const inicioAlumno = document.querySelector('.inicio_alumno');
        const parrafoInicioAlumno = document.createElement('p');
        parrafoInicioAlumno.innerHTML = textoPorCadaAlumnoHombre();

        inicioAlumno.appendChild(parrafoInicioAlumno);
    }

    function verNotas(e) {

        e.preventDefault();
    
        if(codigo == "U20202020") {
            text3.innerHTML = `
                Física: 18  <br>
                Química: 17 <br>
                Programación: 18 <br>
                Redes: 15 <br>
            `;
        } else if(codigo == "U11072001") {
            text3.innerHTML = `
                Física: 20  <br>
                Química: 15 <br>
                Programación: 17 <br>
                Redes: 19 <br>
            `;
        } else if(codigo == "U12312312") {
            text3.innerHTML = `
                Física: 14  <br>
                Química: 17 <br>
                Base de datos: 15 <br>
                Redes: 17 <br>
            `;
        } else if(codigo == "U45645678") {
            text3.innerHTML = `
                Física: 18  <br>
                Química: 16 <br>
                Base de datos: 15 <br>
                Redes: 19 <br>
            `;
        }
    
    }

    function verPonderado(e) {

        e.preventDefault();
        let text6 = document.getElementById("text_alumn4");
        let text5 = document.getElementById("text_alumn3");
    
        function ponderado(a, b, c, d) {
            final = parseFloat((a + b + c + d) / 4);
            return final;
        }
    
        function verInfo(){
            text5.innerHTML = `
                Su ponderado final es de: ${final}
            `;
        }
    
        function superior() {
            if(final >= 17.5) {
                text6.innerHTML = `
                    Felicidades <span style = 'color:orange'> ${nombre.toUpperCase()} </span>, 
                    perteneces al Décimo superior. <b style = 'color: violet'> ʕ•́ᴥ•̀ʔっ </b>
                    
                `;
            } else {
                text6.textContent = " ";
            }
        }
    
        if(codigo == "U20202020") {
            ponderado(18, 17, 18, 15);
            verInfo();
            superior();
        } else if(codigo == "U11072001") {
            ponderado(20, 15, 17, 19);
            verInfo();
            superior();
        } else if(codigo == "U12312312") {
            ponderado(14, 17, 15, 17);
            verInfo();
            superior();
        } else if(codigo == "U45645678") {
            ponderado(18, 16, 15, 19);
            verInfo();
            superior();
        }
    
    }

    if(codigo == ("U11072001") && password == "123456") {

        modal_alum.classList.add('modal_alumno_out');
        mostrarAlum.classList.remove('quitar');
        mostrarAlum.classList.add('alumnos');
        nombre = "Shirley Paredes";

        agregarParrafoMujer();

        button2.addEventListener('click', verNotas);
        button4.addEventListener('click', verPonderado);
        

    } else if(codigo == ("U20202020") && password == "123123") {

        modal_alum.classList.add('modal_alumno_out');
        mostrarAlum.classList.remove('quitar');
        mostrarAlum.classList.add('alumnos')
        nombre = "Aarón Martínez";

        agregarParrafoHombre();

        button2.addEventListener('click', verNotas);
        button4.addEventListener('click', verPonderado);


    } else if(codigo == ("U12312312") && password == "U12312312") {

        modal_alum.classList.add('modal_alumno_out');
        mostrarAlum.classList.remove('quitar');
        mostrarAlum.classList.add('alumnos')
        nombre = "Rachel James";

        agregarParrafoHombre();

        button2.addEventListener('click', verNotas);
        button4.addEventListener('click', verPonderado);


    } else if(codigo == ("U45645678") && password == "U45645678") {

        modal_alum.classList.add('modal_alumno_out');
        mostrarAlum.classList.remove('quitar');
        mostrarAlum.classList.add('alumnos')
        nombre = "Emma James";

        agregarParrafoHombre();

        button2.addEventListener('click', verNotas);
        button4.addEventListener('click', verPonderado);


    } else {
        alert("DATOS INCORRECTOS.");
    }
}

btn_modal_alumno.addEventListener('click', modalAlumno);