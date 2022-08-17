
let anguloA = 10;
let anguloB = 100;
let anguloC = 20;

let soma = anguloA + anguloB + anguloC;

let angulosPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if(angulosPositivos){
  if (soma === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido');
}