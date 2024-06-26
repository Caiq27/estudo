// MÉTODOS STRING
// Manusear textos nos softwares
// Length - Retorna o tamanho da variavel
var nome = "Matheus"
console.log(nome.length)

var obj = 'bola'
console.log(obj.length)

// indexOf - Retorna o valor atribuido na posição
console.log(nome[2])

// Retorna o valor da posição antes da palavra
var frase = 'O rato roeu a roupa do rei de Roma'
console.log(frase.indexOf('roeu'))

// slice - Retornar o valor no período
var roeu = frase.slice(0, 8)
console.log(roeu)

// replace - Substituir palavra
var novaFrase = frase.replace("roeu","teste")
console.log(novaFrase)

// toLowerCase e toUpperCase
// Tornar texto caixa baixa ou alta
var frase = "Esta é uma frase que vamos manipular"
var fraseCaixaAlta = frase.toUpperCase()

console.log(fraseCaixaAlta)
console.log(fraseCaixaAlta.toLowerCase())

// trim
// Remover espaços em branco
var nome = "          Matheus            "
var nomeTrim = nome.trim()

console.log(nome)
console.log(nomeTrim)

// split
// Separar por delimitador
console.log(frase.split(" "))
var tags = "PHP, JavaScript, HTML, CSS"

console.log(tags.split(", "))

// lastIndexOf
// Indice da primeira ou ultima palavra
var fraseDois = "Eu quero a última palavra teste desta frase de teste"

console.log(fraseDois.indexOf("teste"))
console.log(fraseDois.lastIndexOf("teste"))


