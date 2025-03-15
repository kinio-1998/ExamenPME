let numeros = "1123421436518987"

//EJERCICIO 1. Completa el programa
const imprimirNumeros = () =>{
  for ( var i = 100; i < 200 ; i++){
    console.log(i-99)
  }
}

//EJERCICIO 2. Palíndromo 
const validarPalindromo = (texto) => {
  let palindromo = [];
  //Se toma la frase que viene en el input, se eliminan los espacios, se juntan todas las palabras y se convierte a minúsculas para hacer una frase omogenea y de puros carateres
  let frase = texto.split(' ').join('').toLowerCase();
  let comparador = '';
  //Se divide la frase en caracteres para posteriormente reordenarlas en el ciclo for para posteriormente validar la similitud e imprimir el resultado
  palindromo = frase.split('');
  for (let i = palindromo.length - 1; i >= 0; i--) {
    comparador += palindromo[i];
  }
  if (frase === comparador) {
    return 'true';
  } else {
    return 'false';
  }
};

//EJERCICIO 3. Paréntesis balanceados 
const validarParentesisBalanceados = (texto) =>{
  let parentesis = [];
  let frase =texto.split('');
  console.log(frase)
  for (let i = 0; i <= frase.length - 1; i++) { 
    
  }
}

//EJERCICIO 4. Matriz - Elementos en diagonal 
const ordenarMatriz = (texto) =>{
}

//EJERCICIO 5. Ordenamiento de dígitos 
const ordenarNumeros = (numeros) => {
  // Convertir la cadena en un array de caracteres
  let numerosSeparados = numeros.split('');
  let numerosOrdenados = [];
  // Recorrer cada número en el array original
  for (let i = 0; i < numerosSeparados.length; i++) {
    let numeroActual = numerosSeparados[i];
    let indiceInsercion = 0;
    // Encontrar la posición correcta para insertar el número actual
    while (indiceInsercion < numerosOrdenados.length && numerosOrdenados[indiceInsercion] < numeroActual) {
      indiceInsercion++;
    }
    // Insertar el número en la posición correcta
    numerosOrdenados.splice(indiceInsercion, 0, numeroActual);
  }
  // Unir el array ordenado en una cadena
  return numerosOrdenados.join('');
}


console.log(imprimirNumeros());
//console.log(ordenarMatriz());
console.log(ordenarNumeros(numeros));