let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorWord = array[0];
let menorWord = array[0];

for (let index = 0; index < array.length; index += 1 ){
    if (array[index].length > maiorWord.length) {
        maiorWord = array[index];
    }
}
for (let index = 0; index < array.length; index += 1 ){
    if (array[index].length < menorWord.length) {
        menorWord = array[index];
    }
}

console.log(maiorWord);
console.log(menorWord);