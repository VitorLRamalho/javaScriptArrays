const alunos = ["Vitor", "Giovane", "Breno", "Julia"]
const medias = [7, 4.5, 8, 7.5]

const reprovados = alunos.filter((aluno, i) => {
    return medias[i] < 7;
});

const aprovados = alunos.filter((aluno, i) => {
    return medias[i] >= 7;
});

console.log("A provados: "+aprovados);
console.log("Reprovados: "+reprovados);