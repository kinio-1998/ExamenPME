const validar = document.querySelector('#btnSubmit');
const retorno = document.querySelector('#retorno');
const validarPalindromo = () => {
  let palindromo = [];
  let palabra = document.querySelector('#palindromo').value;
  console.log(palabra);
  let comparador = '';
  palindromo = palabra.split(' ');
  for (i = palindromo.length - 1; i >= 0; i--) {
    comparador += palindromo[i].toLowerCase();
  }
    console.log(comparador);
  if (palabra === comparador) {
    retorno.style.display = "block";
    retorno.innerHTML = 'La frase: \"' + palabra + '\" si es un palindromo.';
    return 'true';
  } else {
    retorno.style.display = "block";
    retorno.innerHTML = 'La frase: \"' + palabra + '\" si es un palindromo.';
    return 'false';
  }
};
validar.onclick = validarPalindromo;