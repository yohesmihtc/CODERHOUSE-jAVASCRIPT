const usuarios = [];
const citas = [];

let idUsuarioCounter = 0;
let idCitaCounter = 0;

const generarUsuarioID = () => idUsuarioCounter++;
const generarCitaID = () => idCitaCounter++;

// Función para validar la fecha y hora de la cita
const esCitaValida = (fecha, hora) => {
    const diaSemana = new Date(fecha).getDay();
    const horaCita = parseInt(hora.split(':')[0]);

    // Verificar que la cita sea de lunes a viernes
    if (diaSemana === 0 || diaSemana === 6) {
        return false;
    }

    // Verificar que la cita sea entre las 8 AM y 12 PM, o entre las 2 PM y 6 PM
    if ((horaCita >= 8 && horaCita < 12) || (horaCita >= 14 && horaCita < 18)) {
        return true;
    }

    return false;
};

document.getElementById('formularioUsuario').addEventListener('submit', (e) => {
    e.preventDefault();

    const nombreUsuario = document.getElementById('nombreUsuario').value;
    const apellidoUsuario = document.getElementById('apellidoUsuario').value;
    const edadUsuario = parseInt(document.getElementById('edadUsuario').value);
    const estaturaUsuario = parseInt(document.getElementById('estaturaUsuario').value);
    const generoUsuario = document.getElementById('generoUsuario').value;
    const objetivoUsuario = document.getElementById('objetivoUsuario').value;
    const fechaCita = document.getElementById('fechaCita').value;
    const horaCita = document.getElementById('horaCita').value;
    const correoUsuario = document.getElementById('correoUsuario').value;
    const telefonoUsuario = document.getElementById('telefonoUsuario').value;

    const mensajeExito = document.getElementById('mensajeExito');
    const mensajeError = document.getElementById('mensajeError');

    // Limpiar mensajes anteriores
    mensajeExito.style.display = 'none';
    mensajeError.style.display = 'none';

    // Validar la fecha y hora de la cita
    if (!esCitaValida(fechaCita, horaCita)) {
        mensajeError.style.display = 'block';
        mensajeError.innerText = 'Las citas solo pueden agendarse de lunes a viernes, de 8 AM a 12 PM y de 2 PM a 6 PM.';
        return;
    }

    // Validar la edad del usuario
    if (edadUsuario < 15) {
        mensajeError.style.display = 'block';
        mensajeError.innerText = 'La edad mínima para agendar una cita es de 15 años.';
        return;
    }

    // Validar la estatura del usuario
    if (estaturaUsuario < 100) {
        mensajeError.style.display = 'block';
        mensajeError.innerText = 'La estatura mínima para agendar una cita es de 100 cm.';
        return;
    }

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

    const cita = {
        id: generarCitaID(),
        idUsuario: usuario.id,
        fecha: fechaCita,
        hora: horaCita,
        correo: correoUsuario,
        telefono: telefonoUsuario
    };
    citas.push(cita);

    // Guardar citas en Local Storage
    guardarEnStorage('citas', citas);

    // Mostrar mensaje de éxito
    mensajeExito.style.display = 'block';
    mensajeExito.innerText = `Su cita fue agendada con éxito para el ${fechaCita} a las ${horaCita}.`;
});

// Evento para borrar citas
document.getElementById('borrarCitas').addEventListener('click', () => {
    borrarTodoStorage();
    citas.length = 0; // Vaciar el array de citas

    const mensajeBorrado = document.getElementById('mensajeBorrado');
    mensajeBorrado.style.display = 'block';
    mensajeBorrado.innerText = 'Todas las citas han sido borradas.';
});

// Ejemplo de uso de la función obtenerDatos
obtenerDatos('citas.json').then(data => {
    if (data) {
        console.log('Datos obtenidos:', data);
    }
});