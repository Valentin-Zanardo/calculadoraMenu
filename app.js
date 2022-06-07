//CALCULADORAS 
let calculadoraElegida = Number(prompt("Ingrese el número de la calculadora que sea usar: \n1 -Para calculadora matemática \n2 -Para calculadora de iva \n3 -Para calculadora de Proteinas y Grasas Saludables \n4 -Para salir de las calculadoras "))

while (calculadoraElegida != 4) {

    switch (calculadoraElegida) {
        /* CALCULADORA MATEMÁTICA */
        case 1:
            let bienvenido = prompt("Bienvenido a la calculadora matemática! Escriba ENT para entrar o ESC para salir");
            while (bienvenido != "ESC") {
                function calculadora(primerNum, segundoNum, operador) {
                    switch (operador) {
                        case "+":
                            return primerNum + segundoNum;

                        case "-":
                            return primerNum - segundoNum;

                        case "*":
                            return primerNum * segundoNum;

                        case "/":
                            return primerNum / segundoNum;
                    }
                }
                let numeroUno = Number(prompt("Ingrese el primer número de la operación."));
                let resultado = prompt("Ingrese: \n + para sumar \n - para restar \n / para dividir \n * para multiplicar");
                let numeroDos = Number(prompt("Ingrese el segundo número que desea operar."));


                alert("Su resultado es igual a " + calculadora(numeroUno, numeroDos, resultado));
                bienvenido = prompt("Bienvenido a la calculadora matemática! Escriba ENT para entrar o ESC para salir");
            }
            break;
            /* FIN DE CALCULADORA MATEMÁTICA */

            /* CALULADORA DE IVA */
        case 2:
            let bienvidaIva = prompt("Bienvenido a la calculadora de IVA! Escriba ENT para entrar o ESC para salir");
            while (bienvidaIva != "ESC") {
                function iva(valor) {
                    return valor * 0.21
                };

                let valorIva = Number(prompt("Ingrese el precio de su producto sin IVA. "));
                let precioFinal = iva(valorIva) + valorIva;

                alert("El IVA de su producto es de " + iva(valorIva) + "$. \nEl precio final de su producto es de " + precioFinal + "$");
            }
            break;
            /* FIN DE CALCULADORA DE IVA */

            /* CALCULADORA DE PROTEINAS Y GRASAS */
        case 3:
            let calculadoraDos, ejercicioSemanal1, ejercicioSemanal2, peso, totalProte, totalGrasa;

            calculadoraDos = Number(prompt("Bienvenido a la calculadora de Proteínas y Grasas Saludables! \nIngrese el número de la calculadora que desea utilizar: \n1 -Proteinas \n2 -Grasas Saludables \n3 -Salir de la calculadora"))

            while (calculadoraDos != 3) {
                switch (calculadoraDos) {
                    case 1:
                        peso = Number(prompt("Ingrese su peso"))
                        ejercicioSemanal1 = Number(prompt("Ingrese la cantidad de días que realiza deporte intenso en la semana."))
                        switch (ejercicioSemanal1) {
                            case 1:
                                totalProte = peso * 1.3
                                break;
                            case 2:
                                totalProte = peso * 1.3
                                break;

                            case 3:
                                totalProte = peso * 1.6
                                break;
                            case 4:
                                totalProte = peso * 1.6
                                break;

                            case 5:
                                totalProte = peso * 2
                                break;
                            case 6:
                                totalProte = peso * 2
                                break;
                            case 7:
                                totalProte = peso * 2
                                break;
                            default:
                                alert("Por favor ingresar un número del 1 al 7.")
                                break;
                        }
                        alert("La cantidad de proteinas que debe comer es de " + totalProte + "g");
                        alert("¡Recuerde que siempre es mejor acudir con un profesional en nutrición!")
                        break

                    case 2:
                        peso = Number(prompt("Ingrese su peso"))
                        ejercicioSemanal2 = Number(prompt("Ingrese la cantidad de días que realiza deporte intenso en la semana."))
                        switch (ejercicioSemanal2) {
                            case 1:
                                totalGrasa = peso * 1.0
                                break;
                            case 2:
                                totalGrasa = peso * 1.1
                                break;

                            case 3:
                                totalGrasa = peso * 1.2
                                break;
                            case 4:
                                totalGrasa = peso * 1.2
                                break;

                            case 5:
                                totalGrasa = peso * 1.3
                                break;
                            case 6:
                                totalGrasa = peso * 1.3
                                break;
                            case 7:
                                totalGrasa = peso * 1.3
                                break;
                            default:
                                alert("Por favor ingresar un número del 1 al 7.")
                                break;
                        }
                        alert("La cantidad de Grasas Saludables que debe comer es de " + totalGrasa + "g");
                        alert("¡Recuerde que siempre es mejor acudir con un profesional en nutrición!")
                        break
                    default:
                        alert("Por favor ingresar una de las opciones validas")
                        break;
                }
                calculadoraDos = Number(prompt("Ingrese el número de la calculadora que desea utilizar: \n1 -Proteinas \n2 -Grasas Saludables \n3 -Salir de la calculadora"))
            }
            break;
            /* FIN DE CALCULADORA DE PROTEÍNAS Y GRASAS */
        default:
            alert("El número ingresado no es válido, por favor ingrese alguno de los números de la lista.")

    }
    calculadoraElegida = Number(prompt("Ingrese el número de la calculadora que sea usar: \n1 -Para calculadora matemática \n2 -Para calculadora de iva \n3 -Para calculadora de Proteinas y Grasas Saludables \n4 -Para salir de las calculadoras "))
}
// FIN DE LA CALCULADORA GLOBAL



























/* CALCULADORA MATEMÁTICA */
/* 
function calculadora(primerNum, segundoNum, operador) {
    switch (operador) {
        case "+":
            return primerNum + segundoNum;

        case "-":
            return primerNum - segundoNum;

        case "*":
            return primerNum * segundoNum;

        case "/":
            return primerNum / segundoNum;
    }
}

let numeroUno = Number(prompt("Ingrese el primer número de la operación"))
let resultado = prompt ("Ingrese: \n + para sumar \n - para restar \n / para dividir \n * para multiplicar")
let numeroDos = Number(prompt("Ingrese el segundo número que desea operar."))

alert ("Su resultado es igual a " + calculadora(numeroUno,numeroDos, resultado)) */



/* CALCULADORA DE IVA FUNCION FLECHA */
/* 
const iva = valor => valor * 0.21 */

/* CALCULADORA DE IVA */
/* function iva (valor) {
    return valor * 0.21
}

let valorIva = Number(prompt("Ingrese el precio de su producto sin IVA. "))
let precioFinal = iva(valorIva) + valorIva

alert("El IVA de su producto es de "+ iva(valorIva) +"$. \nEl precio final de su producto es de " + precioFinal ) */