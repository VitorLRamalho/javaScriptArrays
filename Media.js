const notas = [10, 6.5, 8, 7.5];
const media = (notas[0]+notas[1]+notas[2]+notas[3]) / notas.length;

if(media >= 6) {
    console.log("Passou de Ano!!!"+media)
} else {
    console.log("REPROVADO!!!"+media)
};