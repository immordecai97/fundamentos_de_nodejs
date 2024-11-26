/**
 * Variables de entorno
 * Para usar las variables de entorno se debe usar el objeto process.env
 * y luego el nombre de la variable de entorno que se quiere usar -> process.env.NOMBRE_DE_LA_VARIABLE_DE_ENTORNO.
 * previamente esa variable de entorno debe estar creada sino se obtendrá undefined.
 * 
 * Para crear una variable de entorno en la terminal (en este caso usamos git bash) se debe escribir el nombre de la variable
 * seguido de un igual y luego el valor que se le quiere asignar luego ejecutamos inmediatamente el documento. Por ejemplo: NOMBRE=Carlos node entorno.js
 */

// Ya creada la variable de entorno se puede usar en el código. NOMBRE=Carlos node entorno.js
let nombre = process.env.NOMBRE
console.log('> Hola ' + nombre) // > Imprime:  > Hola Carlos

// En caso de que la variable de entorno no exista se obtendrá undefined por lo tanto se puede asignar un valor por defecto
let apellido = process.env.APELLIDO || 'Sin apellido';
console.log('> Mi apellido es: ' + apellido) // > Imprime:  > Mi apellido es: Sin apellido