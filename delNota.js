const notas = [10, 6, 8, 5.5, 10];
//notas.shift(); remove o primeiro elemento de um array
notas.pop()// remove o último elemento de um array
console.log(notas);

const media = (notas[0]+notas[1]+notas[2]+notas[3]) / notas.length;

if(media >= 6) {
    console.log("Passou de Ano!!!"+media)
} else {
    console.log("REPROVADO!!!"+media)
};