var nome = "Thalita"
var nomeSobrenome = "Ribeiro"
var idade = 17
var sexo = "masculino"

console.log(typeof nome)
console.log(nome.length)

if (nome == "Caique") {
    console.log("Nome correto")

} else {
    console.log("A Pessoa não é o Caique")
}

if (idade <= 15) {
    console.log("Menor de idade")

} else if (idade > 15 && idade < 18) { 
    console.log("Jovem Aprendiz")

} else {
    console.log("Estagiário ou funcionário")
}

var funcionario = {
    cargo: "Analista",
    depto: "TI"
}
console.log(funcionario)
console.log(funcionario.cargo)
console.log(funcionario.depto)

var formacao = [
    "Ensino Médio completo",
    "Graduação completo",
    "Certificado"
]
console.log(formacao[0])
console.log(formacao[1])

console.log(nome + " possui " + idade + " anos e é " + funcionario.cargo + " do setor de " + funcionario.depto)

if (masculino = true) {
    console.log("Deverá se apresentar quinta-feira")
} else {
    console.log("Deverá se apresentar na terça-feira")
}

function cadastroFuncionario(nome) {
    console.log(funcionario.cargo, funcionario.depto, formacao[1], "e", formacao[2])
}

cadastroFuncionario()

console.log(typeof formacao[1])