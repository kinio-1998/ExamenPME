//const btnValidarPalindromo = document.querySelector('#btnSubmitPalindromo');
//const txtRetornoPalindromo = document.querySelector('#txtRetornoPalindromo');
const btnValidarParentesis = document.querySelector('#btnSubmitParentesis');
const txtRetornoParentesis = document.querySelector('#txtRetornoParentesis');
/*const validarPalindromo = () => {
  let palindromo = [];
  let frase = document.querySelector('#palindromo').value;
  let comparador = '';
  palindromo = frase.split(' ');
  for (let i = palindromo.length - 1; i >= 0; i--) {
    comparador += palindromo[i].toLowerCase();
  }
  if (frase === comparador) {
    txtRetornoPalindromo.style.display = "block";
    txtRetornoPalindromo.innerHTML = 'La frase: \"' + frase + '\" si es un palindromo.';
    return 'true';
  } else {
    txtRetornoPalindromo.style.display = "block";
    txtRetornoPalindromo.innerHTML = 'La frase: \"' + frase + '\" no es un palindromo.';
    return 'false';
  }
};*/
const validarParentesisBalanceados = () =>{
  let parentesis = [];
  let frase = document.querySelector('#parentesisBalanceados').value.split('');
  console.log(frase)
  for (let i = 0; i <= frase.length - 1; i++) { 
    if(parentesis.length === 0){
      parentesis.push(frase[i]);
      if(){

      }else if(frase[i] ==="(" &&  parentesis.find((element,i) => element === ")" ) ? i : false){

      }else{

      }
      txtRetornoParentesis.style.display = "block";
      //txtRetornoParentesis.innerHTML = 'La f es: \"' + f;
      //parentesis.push(frase[i]);
    }/*else if(frase[i] ===")"){
      parentesis.pop();
    }*/
  }/*
  if(parentesis.length>0){
    txtRetornoParentesis.style.display = "block";
    txtRetornoParentesis.innerHTML = 'La frase: \"' + frase + '\" si es un palindromo.';
    return 'true';
  } else {
    txtRetornoParentesis.style.display = "block";
    txtRetornoParentesis.innerHTML = 'La frase: \"' + frase + '\" si es un palindromo.';
    return 'true';    
  }*/
}

const buscarParentesis = (parentesi) =>{
  return parentesis.find((element,i) => element === parentesi ) ? i : false;
}
//btnValidarPalindromo.onclick = validarPalindromo;
btnValidarParentesis.onclick = validarParentesisBalanceados;