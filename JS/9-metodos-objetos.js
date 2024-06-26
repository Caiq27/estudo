let pessoa = {
    nome: "Matheus",
    idade: 29,
    falar: function() {
        console.log("Olá, tudo bem? Meu nome é " + pessoa.nome)
    },
    soma: function(a, b) {
        return a + b
    }
}

console.log(pessoa.nome)

pessoa.falar()

var soma = pessoa.soma(2, 2)
console.log(soma)

