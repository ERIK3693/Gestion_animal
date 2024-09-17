// Clase base Animal
class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    hacerSonido() {
        // Método que será sobrescrito en las subclases
        return '';
    }
}
// Subclase Perro
class Perro extends Animal {
    hacerSonido() {
        return 'Guau';
    }
}
// Subclase Gato
class Gato extends Animal {
    hacerSonido() {
        return 'Miau';
    }
}
// Subclase Pájaro
class Pajaro extends Animal {
    hacerSonido() {
        return 'Pío';
    }
}
function crearAnimal(tipo, nombre, edad) {
    switch (tipo.toLowerCase()) {
        case 'perro':
            return new Perro(nombre, edad);
        case 'gato':
            return new Gato(nombre, edad);
        case 'pájaro':
            return new Pajaro(nombre, edad);
        default:
            return 'Tipo de animal no soportado';
    }
}
const animal1 = crearAnimal('perro', 'sebas', 5);
console.log(animal1); // Debería imprimir un objeto de tipo Perro
console.log(animal1.hacerSonido()); // Debería imprimir 'Guau'

const animal2 = crearAnimal('gato', 'edith', 3);
console.log(animal2); // Debería imprimir un objeto de tipo Gato
console.log(animal2.hacerSonido()); // Debería imprimir 'Miau'

const animal3 = crearAnimal('pájaro', 'pajaroloco', 1);
console.log(animal3); // Debería imprimir un objeto de tipo Pájaro
console.log(animal3.hacerSonido()); // Debería imprimir 'Pío'

