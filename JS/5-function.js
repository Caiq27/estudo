// FUNCTION
// Reaproveitar o código

// Declara a função
function primeiraFuncao() {
    console.log("Hello world das funções ")
}

// Utiliza a função
primeiraFuncao()

// Declarar função para receber variavel
function dizerNome(nome) {
    console.log("O Nome é: " + nome)
}

dizerNome("Matheus")

var nomeDoBancoDeDados = "João"

dizerNome(nomeDoBancoDeDados)

// Declarar função e uso do return
function soma(a, b) {
    var soma = a + b
    return soma
}

// Declarar variavel para receber função e exibir na tela
var somaUm = soma(2, 5)
console.log (somaUm)

var somaDois = soma(5, 5)
console.log (somaDois)


// Alterar DOM com FOR
var lista = ["Laranja", "Maçã", "Pera", "Jaca"]

// Criando o elemento
var listaUl = document.createElement('ul')

// Pegando o elemento no HTML
var body = document.getElementsByTagName('body')

// console.log(body[0])

// Adicionar elemento filho ao pai
body[0].appendChild(listaUl)

// Pegando o elemento no HTML
var listaNoBody = document.getElementsByTagName('ul')

console.log(listaNoBody[0])

for (var i = 0; i < lista.length; i++) {
    
    // Criando um Li
    var liFor = document.createElement('li')
    
    // Criando um Texto no Li
    var textoLi = document.createTextNode(lista[i])

    liFor.appendChild(textoLi)

    listaNoBody[0].appendChild(liFor)
}

// ESCOPO
// Global e locais (funções)

// Declarar variavel Global
var x = 1
var y = 3

console.log(x,y)

function teste () {
    var z = 0
    console.log(z)
    console.log(x)

}

teste()

function testando() {
    var z = 5
    console.log(z)
}

testando()

if(true) {
    var p = 1
}
console.log(p)

// LET E CONST
// Declara variavel no escopo
let b = 5
const c = 10
// y = 10 Daria erro
b = 12
console.log(b)

if (true) {
    let b = 20
    console.log(b)
    
    const c = 50
    console.log('const if ' + c)
}

console.log(b)


if (20 > 10) {

    const y = 100
    console.log ('const if 3 ' + y)

}

for (let x = 0; x < 10; x++) {
    console.log(x)
}

