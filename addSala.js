const alunos = ["Breno", "Ana", "Caio", "Laiza", "Sophia","Giovane"];
alunos.splice(1, 2, "Matheus");//primeiro parametro é o indice que ira deletar e o segundo parametro é a quantidade de elemnetos que ira retirar da lista
alunos.push("Vitor", "Julia");

console.log(alunos);