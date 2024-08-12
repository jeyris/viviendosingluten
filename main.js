
//Json 
let usuarioIngresos =   '[{"nombre":"Ingrese su nombre y apellido"," email" : "Ingrese su email"}]'
//console.log (usuarioIngresos)
//console.log (typeof usuarioIngresos)

 // convertir la cadena json a js  

let jsonConvertido = JSON.parse(usuarioIngresos);

const nuevoUsuario = {
    nombre:"yris cardozo",
    email: "cardozomys6@gmail.com"
};

jsonConvertido.push (nuevoUsuario);

//convertir el objeto js modificado de nuevo a cadena JSON

let datoConvertido = JSON.stringify (jsonConvertido);
console.log (datoConvertido);
console.log (typeof datoConvertido);

//almacenar la base de datos actualizada en el localstorage

localStorage.setItem ('nuevoUsuario', datoConvertido);
let mensaje = localStorage.getItem('nuevoUsuario');

//Convertir el string JSON de nuevo a un array de objetos
let datosArray = JSON.parse(mensaje);

// Mostrar un alert con el nombre del último usuario en el array
let ultimoUsuario = datosArray[datosArray.length - 1];
alert(`Hola Bienvenida: ${ultimoUsuario.nombre}`);


//console.log(jsonConvertido)
//console.log (typeof jsonConvertido)

//localstorage: setitem

//localStorage.setItem = prompt ('¡Hola, Bienvenida!' + (nuevoUsuario))
//localStorage.setItem('Email', prompt ('Ingrese su email: '))

//localstorage: getitem

//let saludo = localStorage.getItem ('Bienvenida')
//let email = localStorage.getItem ('Email')

//console.log ('El nombre y apellido ingresado es: ' + saludo)
//console.log (typeof saludo)

//console.log ("El email ingresado es: " + email)
//console.log(typeof email)

