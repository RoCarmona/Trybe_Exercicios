let word = 'tryber';
let invertWord = " ";

for ( let index = 0; index < word.length; index +=1){
    invertWord += word [word.length -1 - index];
}
console.log(invertWord);