class Propietario {
    constructor(nombrePropietario, direccion, telefono) {
        this._nombrePropietario = nombrePropietario
        this._direccion = direccion
        this._telefono = telefono
    }
    get nombrePropietario() {
        return this._nombrePropietario
    }
    get direccion() {
        return this._direccion
    }
    get telefono() {
        return this._telefono
    }
    datosPropietario() {
        return `El nombre del dueño es: ${this.nombrePropietario}.El domicilio es: ${this.direccion} y el numero telefonico de contacto es: ${this.telefono}`
    }
}

class Animal extends Propietario {
    constructor(nombrePropietario, direccion, telefono, tipo) {
        super(nombrePropietario, direccion, telefono)
        this._tipo = tipo
    }
    get tipo() {
        return `El tipo de animal es un: ${this.tipo}`
    }
    set tipo(tipo) {
        this._tipo = tipo
    }

}

class Mascota extends Animal {
    constructor(nombrePropietario, direccion, telefono, tipo, nombre, enfermedad) {
        super(nombrePropietario, direccion, telefono, tipo)
        this._nombre = nombre
        this._enfermedad = enfermedad
    }
    get nombre() {
        return this._nombre
    }
    get enfermedad() {
        return this._enfermedad
    }
}

const registrando = ()=> {
    
    const nombreDuenio = document.querySelector('#propietario').value
    const telefono = document.querySelector('#telefono').value
    const domicilio = document.querySelector('#direccion').value
    const tipo = document.querySelector('#tipo').value
    const nombre = document.querySelector('#nombreMascota').value
    const enfermedad = document.querySelector('#enfermedad').value
    const resultado = document.querySelector('#resultado')
    //const mascota = new Mascota(nombreDuenio, domicilio, telefono, tipo, nombre, enfermedad)
    //console.log(mascota)
    

if (tipo === 'perro') {
    const perro = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad)
    return perro
} else if (tipo === 'gato') {
    const gato = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad)
    return gato
} else if (tipo === 'conejo') {
    const conejo = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) // En la creacion de constantes se realizo con letra minuscula en lugar de mayuscula para seguir la convencion de manera correcta aprobado por el profe Claudio 
    return conejo
} else {
    return false
}
}

// funcion que limpia los datos del doom
const limpiar = () => {
    document.querySelector('#propietario').value = ""
    document.querySelector('#telefono').value = ""
    document.querySelector('#direccion').value = ""
    document.querySelector('#nombreMascota').value = ""
    document.querySelector('#enfermedad').value = ""
}

const imprimir = event => {
    event.preventDefault()
    const datosDeAtencion = registrando() // Ejecutamos la funcion para asignar el objeto a una nueva variable
    if (datosDeAtencion) {
        const selectorDeLista = document.querySelector('#resultado > ul')
        selectorDeLista.innerHTML = `<li>${datosDeAtencion.datosPropietario()}</li> <li>${datosDeAtencion.tipo}, mientras que el nombre de la mascota es: ${datosDeAtencion.nombreMascota} y la enfermedad es: ${datosDeAtencion.enfermedad}.</li>`
        limpiezaDeLabels()
    }
}

// Funciones finalizadas 


const registrar = document.querySelector('#formulario')
registrar.addEventListener('submit', imprimir)