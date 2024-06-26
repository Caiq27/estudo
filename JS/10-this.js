// THIS
// Localiza os objetos globais
var teste = 5

console.log(this.teste)
console.log(teste)

let aluno = {
    nome: "Lucas",
    idade: 25,
    falar: function() {
        console.log("Olá, tudo bem?")
    },
    dizerNome: function() {
        console.log("O meu nome é " + this.nome)
    },
    aniversario: function() {
        this.idade += 1
    },
    saudacao: function() {
        return 'Sr.' + this.nome
    }
}

aluno.dizerNome()

console.log(aluno.idade)

aluno.aniversario()
console.log(aluno.idade)

var sdc = aluno.saudacao()
console.log("Olá " + sdc)