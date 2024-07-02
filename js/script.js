// Inicialización de arrays vacíos
const usuarios = [];
const citas = [];

// Inicialización de variables numéricas
let idUsuarioCounter = 0;
let idCitaCounter = 0;

// Inicialización de variables de texto
let nombreUsuario = '';
let apellidoUsuario = '';
let edadUsuario = '';
let estaturaUsuario = '';
let generoUsuario = '';
let objetivoUsuario = '';
let fechaCita = '';
let horaCita = '';
let correoUsuario = '';
let telefonoUsuario = '';

// Función de mensaje de despedida
const mensajeDespedida = () => alert('Gracias por la confianza, Nos vemos luego');

// Función que genera IDs únicos
const generarUsuarioID = () => idUsuarioCounter++;
const generarCitaID = () => idCitaCounter++;

// Función para ingresar datos del usuario
function ingresarDatosUsuario() {
    nombreUsuario = prompt(' Por favor, ingresa tu nombre:');
    if (nombreUsuario === null) {
        mensajeDespedida();
        return null;
    }
    apellidoUsuario = prompt(`${nombreUsuario}, ingresa tu apellido:`);
    if (apellidoUsuario === null) {
        mensajeDespedida();
        return null;
    }
    edadUsuario = parseInt(prompt(`${nombreUsuario}, ingresa tu edad:`));
    if (isNaN(edadUsuario) || edadUsuario <= 0) {
        alert('Por favor, ingresa una edad válida.');
        return null;
    }
    estaturaUsuario = parseInt(prompt(`${nombreUsuario}, ingresa tu estatura en cm:`));
    if (isNaN(estaturaUsuario) || estaturaUsuario <= 0) {
        alert('Por favor, ingresa una estatura válida.');
        return null;
    }
    generoUsuario = prompt(`${nombreUsuario}, ingresa tu género (1 para hombre, 2 para mujer):`);
    switch (generoUsuario) {
        case '1':
            generoUsuario = 'hombre';
            break;
        case '2':
            generoUsuario = 'mujer';
            break;
        default:
            alert('Por favor, ingresa 1 para hombre o 2 para mujer.');
            return null;
    }
    
    // Switch para el objetivo del usuario
    let objetivoSeleccionado = false;
    while (!objetivoSeleccionado) {
        objetivoUsuario = prompt(`${nombreUsuario}, ¿Cuál es tu objetivo? \n1. Ganar masa muscular \n2. Perder peso \n3. Ganar masa muscular y quemar grasa`);
        switch (objetivoUsuario) {
            case '1':
                objetivoUsuario = 'Ganar masa muscular';
                objetivoSeleccionado = true;
                break;
            case '2':
                objetivoUsuario = 'Perder peso';
                objetivoSeleccionado = true;
                break;
            case '3':
                objetivoUsuario = 'Ganar masa muscular y quemar grasa';
                objetivoSeleccionado = true;
                break;
            default:
                alert('Por favor, selecciona una opción válida: 1, 2 o 3.');
        }
    }

    // Crear el usuario y agregarlo al array
    const usuario = {
        id: generarUsuarioID(),
        nombre: nombreUsuario,
        apellido: apellidoUsuario,
        edad: edadUsuario,
        estatura: estaturaUsuario,
        genero: generoUsuario,
        objetivo: objetivoUsuario
    };
    usuarios.push(usuario);

    return usuario.id;
}

// Función para registrar citas
const registrarCita = (idUsuario) => {
    let quiereCita = confirm(" ¿Te gustaría agendar una cita para una evaluación?");
    if (!quiereCita) {
        mensajeDespedida();
        return false;
    }

    fechaCita = prompt(" Ingresa la fecha de la cita (Formato: DD/MM/AAAA):");
    if (fechaCita === null) {
        mensajeDespedida();
        return false;
    }
    horaCita = prompt(" Ingresa la hora de la cita (Formato: HH:MM):");
    if (horaCita === null) {
        mensajeDespedida();
        return false;
    }
    correoUsuario = prompt(" Ingresa tu correo electrónico:");
    if (correoUsuario === null) {
        mensajeDespedida();
        return false;
    }
    telefonoUsuario = parseInt(prompt("Por favor ingresa tu número de teléfono:"));
    if (isNaN(telefonoUsuario) || telefonoUsuario <= 0) {
        alert('Por favor, ingresa un número de teléfono válido.');
        return false;
    }

    // Crear la cita y agregarla al array
    const cita = {
        id: generarCitaID(),
        idUsuario,
        fecha: fechaCita,
        hora: horaCita,
        correo: correoUsuario,
        telefono: telefonoUsuario
    };
    citas.push(cita);

    return true;
}

// Función para mostrar información del usuario y sus citas
const mostrarInformacion = (idUsuario) => {
    const usuario = usuarios.find(u => u.id === idUsuario);
    if (!usuario) return;

    console.log("Información del usuario:");
    console.log(`Nombre: ${usuario.nombre}`);
    console.log(`Apellido: ${usuario.apellido}`);
    console.log(`Edad: ${usuario.edad}`);
    console.log(`Estatura: ${usuario.estatura} cm`);
    console.log(`Género: ${usuario.genero}`);
    console.log(`Objetivo: ${usuario.objetivo}`);

    const citasUsuario = citas.filter(c => c.idUsuario === idUsuario);
    if (citasUsuario.length > 0) {
        console.log("Detalles de las citas:");
        citasUsuario.forEach(cita => {
            console.log(`Fecha de la cita: ${cita.fecha}`);
            console.log(`Hora de la cita: ${cita.hora}`);
            console.log(`Correo electrónico: ${cita.correo}`);
            console.log(`Número de teléfono: ${cita.telefono}`);
        });
    } else {
        console.log("No hay citas agendadas.");
    }
}

// Función principal para ejecutar
function agendarEntrenamiento() {
    const idUsuario = ingresarDatosUsuario();
    if (idUsuario !== null) {
        const continuar = registrarCita(idUsuario);
        if (continuar) {
            mostrarInformacion(idUsuario);
        }
    }
}
agendarEntrenamiento();
