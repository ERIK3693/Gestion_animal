// Clase base figurageometricca
class FiguraGeometrica {
    calcularArea() {
        throw new Error("Este metodo debe estar en subclases");
    }
}
// Subclase Cuadrado
class Cuadrado extends FiguraGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }
    calcularArea() {
        return this.lado * this.lado;
    }
}
// Subclase Triangulo
class Triangulo extends FiguraGeometrica {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        return (this.base * this.altura) / 2;
    }
}
// Subclase Rectangulo
class Rectangulo extends FiguraGeometrica {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        return this.base * this.altura;
    }
}
// Función para clasificar la figura
function clasificarFigura(figura) {
    const area = figura.calcularArea();
    if (area < 20) {
        return "Pequeña";
    } else {
        return "Grande";
    }
}
// Ejemplo de uso
const cuadrado = new Cuadrado(4);
const triangulo = new Triangulo(3, 5);
const rectangulo = new Rectangulo(8, 6);

console.log(cuadrado.calcularArea()); // 16
console.log(clasificarFigura(cuadrado)); // "Pequeña"
console.log(triangulo.calcularArea()); // 7.5
console.log(clasificarFigura(triangulo)); // "Pequeña"
console.log(rectangulo.calcularArea()); // 48
console.log(clasificarFigura(rectangulo)); // "Grande"