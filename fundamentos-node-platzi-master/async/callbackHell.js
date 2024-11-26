function hola(nombre, callback) {
    setTimeout(() => {
        console.log('> async -> Hola: ' + nombre);
        callback(nombre);
    }, 3000)
}

function adios(nombre, callback) {
    setTimeout(() => {
        console.log('> async -> Adios: ' + nombre);
        callback();
    }, 1500)
}

function hablar(callback) {
    setTimeout(() => {
        console.log('> async -> BLA BLA BLA BLA...');
        callback();
    }, 1000)
}


// --------------------------------------------------------------- EJECUCIÓN

// --------------------------------------------------------------- CALLBACK HELL
// console.log('> Iniciando proceso...');

// hola('Carlos', (recibeELNombre) => {
//     hablar(() => {
//         hablar(() => {
//             hablar(() => {
//                 adios(recibeELNombre, () => {
//                     console.log('> Proceso terminado');
//                 });
//             })
//         })
//     })
// });

// console.log('> Terminando proceso...');

// --------------------------------------------------------------- CALLBACK HELL (SOLUCIÓN)
/**
 * Para solucionar el problema de los callbacks hell, pirámide de la muerte o callback hell.
 * Si bien funciona, no es la mejor forma correcta de hacerlo.
 * Normalmente el callback hell sucede cuando se tienen muchas funciones anidadas incluso se repiten.
 * Por lo tanto, se recomienda refactorizar antes de llegar a este punto ya que se vuelve muy difícil de leer.
 * Lo que se suele hacer es crear una función que se llame a sí misma. (Funciones Recursivas). Por ejemplo la función conversacion.
 * O la otra forma es utilizar Promesas o Async/Await.
 */

function conversacion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(() => {
            conversacion(nombre, --veces, callback);
        });
    } else {
        adios(nombre, callback);
    }
}

console.log('> Iniciando proceso...');
hola('Carlos', (nombre) => {
    conversacion(nombre, 3, () => {
        console.log('> Proceso terminado');
    });
});
console.log('> Terminando proceso...');
