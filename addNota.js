const notas = [10, 8, 6];
//notas.push(); adiciona um ou mais elementos ao final de um array
notas.push(4);// adciona no final do Array

const media = (notas[0]+notas[1]+notas[2]+notas[3]) / notas.length;

console.log(notas)

if(media >= 6) {
    console.log("Passou de Ano!!!"+media)
} else {
    console.log("REPROVADO!!!"+media)
};