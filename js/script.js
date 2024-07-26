const usuarios = [];
const citas = [];

let idUsuarioCounter = 0;
let idCitaCounter = 0;

const generarUsuarioID = () => idUsuarioCounter++;
const generarCitaID = () => idCitaCounter++;

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

    document.getElementById('mensajeExito').style.display = 'block';
    document.getElementById('mensajeExito').innerText = `Su cita fue agendada con éxito para el ${fechaCita} a las ${horaCita}.`;
});