// Función de orden superior para guardar en Local Storage
const guardarEnStorage = (clave, valor) => {
    localStorage.setItem(clave, JSON.stringify(valor));
};

// Función de orden superior para borrar del Local Storage
const borrarDeStorage = (clave) => {
    localStorage.removeItem(clave);
};

// Función para obtener datos de un archivo JSON local
const obtenerDatos = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        return null;
    }
};