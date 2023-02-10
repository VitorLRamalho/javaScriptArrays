const alunos =['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];
const sala1 = alunos.slice(0, alunos.length/2);//Slice 'Fatia' parte do Array
const sala2 = alunos.slice(alunos.length/2);


console.log("Lista de Alunos sala 1: "+ sala1);
console.log("Lista de Alunos sala 2: "+ sala2);