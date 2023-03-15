let nombre = prompt("Ingrese su nombre")

while(nombre == "" || nombre == null){
    alert("No ingresaste ningun nombre")
    nombre = prompt("Ingrese su nombre")
}
let saludo = "¡Hola " + nombre + "! Bienvenido a ZacGym"
alert(saludo)


let experiencia = prompt("¿Ya entrenaste en un gimnasio? (Responder si o no)")

if((experiencia == "si") || (experiencia == "SI") || (experiencia == "Si")){
    let tiempoEntrenando = prompt("¿Hace cuanto entrenas?")
}
else if((experiencia == "no") || (experiencia == "NO") || (experiencia == "No")){
    alert("Este es el mejor momento para empezar")
}
else{
    alert("Intente de nuevo ingresando el valor si o no")
}


let resultado = 0
function restar(peso, pesoIdeal){
    resultado = peso - pesoIdeal;
}
function mostrar(mensaje){
    alert(mensaje)
}

restar(prompt("Ingrese su peso actual"), prompt("Ingrese su peso ideal"))
if(resultado > 0){
    mostrar("Tiene que bajar "+ resultado + "kg")
}
else if(resultado < 0){
    mostrar("Tiene que subir "+ resultado * -1 + "kg")
}
else if(resultado == 0){
    mostrar("Felicitaciones usted esta en su paso ideal")
}
else{
    mostrar("No ingreso un numero")
}

let tiempoObjetivo = parseInt(prompt("En cuantos meses quieres conseguir ese objetivo? (Ingrese solamente el numero)"))
if(resultado > 0){
    for (let i = 1; i <= tiempoObjetivo; i++) {
    alert("El "+ i +" mes deberas bajar "+ resultado/tiempoObjetivo + "kg");
}
}
if(resultado < 0){
    for (let i = 1; i <= tiempoObjetivo; i++) {
    alert("El "+ i +" mes deberas subir "+ resultado/tiempoObjetivo * -1 + "kg");
}
}
else if(resultado == 0){
    mostrar("No tiene que bajar ni subir de peso")
}
else{
    mostrar("No ingreso un numero")
}