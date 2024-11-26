function hola(nombre, callback) {
    setTimeout(() => {
        console.log('> async -> Hola: ' + nombre);
        callback(nombre);
    }, 5000)
}

function adios(nombre, callback) {
    setTimeout(() => {
        console.log('> async -> Adios: ' + nombre);
        callback();
    }, 0)
}

// --------------------------------------------------------------- EJECUCIÓN

console.log('> Iniciando proceso...');

hola('Carlos', (recibeELNombre) => {
    adios(recibeELNombre, () => {
        console.log('> Proceso terminado');
    });
});

console.log('> Terminando proceso...');