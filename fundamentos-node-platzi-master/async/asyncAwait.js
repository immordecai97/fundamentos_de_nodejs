function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('hola ' + nombre);
            resolve(nombre);
        }, 1000)
    })
}

function hablar() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('bla bla bla bla...');
            resolve()
        }, 1000)
    })
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Adios ' + nombre);
            resolve();
        }, 1000)
    })
}

async function main() {
    const nombre = await hola('Carlos');
    await hablar();
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Terminamos el proceso');
}

console.log('Empezamos el proceso');
main();