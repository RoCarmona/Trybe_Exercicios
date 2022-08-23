let maiorNumeroPrimo = 0;

for (let index = 2; index <=50; index +=1){
    let numeroPrimo = true;
    for (numeroDivisor = 2; numeroDivisor < index; numeroDivisor +=1){
        if (index % numeroDivisor === 0) {
            numeroPrimo = false;
        }        
    }
    if (numeroPrimo) {
        maiorNumeroPrimo = numeroDivisor
    }
}
console.log(maiorNumeroPrimo);