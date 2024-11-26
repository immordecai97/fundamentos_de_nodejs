// console.log('Hola mundo');
// let i = 0;
// setInterval(function() {
//     console.log(i);
//     i++;

//     // if (i === 5) {
//     //     console.log('forzamos error');
//     //     var a = 3 + z;
//     // }
// }, 1000);

// console.log('Segunda instrucción');

console.log('Hola mundo');

let i = 0;
const intervalID = setInterval(() => {
    console.log(i);
    i++;
    if (i === 5) {
        // console.log('forzamos error');
        try {
            let a = 3 + z;
        } catch (error) {
            console.error('Ha ocurrido un error');
            // process.exit(1);
        }
    }
    if(i === 10) {
        console.log('Terminamos el proceso');
        clearInterval(intervalID);
        // process.exit(0);
    }
}, 1000);