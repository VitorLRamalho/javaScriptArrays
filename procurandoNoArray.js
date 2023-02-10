/*const readline = require("readline")// readline modulo node para ler comands do terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
*/

const Alunos = ["Vitor", "Giovane", "Breno", "Marcos"];
const Medias = [10, 7.5, 6, 9];

const ArrayAlunosEMedias = [Alunos, Medias];

function exibeNomeENota(aluno) {
    const index = ArrayAlunosEMedias[0].indexOf(aluno)
    const MediaDoAluno = ArrayAlunosEMedias[1][index]

    if(ArrayAlunosEMedias[0].includes(aluno)) {//includes verifica se existe um certo elemento que você procura no Array e retorna true ou false
        console.log(`${aluno} tem a média ${MediaDoAluno}`)

    } else{
        console.log("Aluno não encontrado!!!")
    }
};

exibeNomeENota("Breno");


//rl.question(`Qual ${Alunos} deseja vizualizar?`, exibeNomeENota())