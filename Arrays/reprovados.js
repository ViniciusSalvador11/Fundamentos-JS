const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro']
const notas = [7, 4.5, 8,7.9]

const reprovados = nomes.filter( (aluno, indice) => notas[indice] < 5)
console.log(reprovados)