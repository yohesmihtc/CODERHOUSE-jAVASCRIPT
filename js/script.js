const usuarios = [];
const citas = [];

let idUsuarioCounter = 0;
let idCitaCounter = 0;

const generarUsuarioID = () => idUsuarioCounter++;
const generarCitaID = () => idCitaCounter++;

// Funcion de orden superior para guardar en Local Storge
const guardarEnStorage = (clave, valor) => {
    localStorage.setItem(clave, JSON.stringify(valor));
};

// Funcion de orden superior para borrar del Local Storage
const borrarDeStorage = (clave) => {
    localStorage.removeItem(clave);
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

    // Guardar citas en el Local Storage
    guardarEnStorage('citas', citas);

    document.getElementById('mensajeExito').style.display = 'block';
    document.getElementById('mensajeExito').innerText = `Su cita fue agendada con éxito para el ${fechaCita} a las ${horaCita}.`;
});

// Evinto para borrar citas
document.getElementById('borrarCitas').addEventListener('click', () => {
    borrarDeStorage('citas');
    citas.length = 0; // Vacier el array de citas

    const mensajeBorrado = document.getElementById('mensajeBorrado');
    mensajeBorrado.style.display = 'block';
    mensajeBorrado.innerText = 'Todas las citas han sido borradas.';
});