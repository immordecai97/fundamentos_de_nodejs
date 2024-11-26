console.log('> Nodejs es asincrono a pesar de ser monohilo');

let i = 0;
const intervalID = setInterval(() => {
    if(i === 0) {
        console.log("> () => Inicia el callback de setInterval")
        console.log('> La segunda instrucción se ejecuta antes de este callback');
    };
    console.log(i);
    i++;
    if (i === 5) {
        try {
            console.log('> forzamos error');
            let a = 3 + variableNoDefinida;
        } catch (error) {
            console.error('> Ha ocurrido un error: ', error.message);
            // process.exit(1);
        }
    }
    if(i === 10) {
        console.log('> Terminamos el proceso');
        clearInterval(intervalID);
        // process.exit(0);
    }
}, 1000);

console.log('> Segunda instrucción!!');