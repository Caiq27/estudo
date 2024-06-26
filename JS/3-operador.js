// Operador lógico
// && e AND
// Verdadeira se ambas verdadeiras
var idadeAluno = 16
var nomeAluno = "João"

if (nomeAluno == "João" && idadeAluno == 18) {
    console.log("O João pode entrar na aula de esgrima")
} else {
    console.log("Este não é o João")
}

// && e AND com true / false
if(1 == 1 && 3 > 2 && true) {
    console.log("Passou");
}

if((1 == 1 && 3 > 2) && true) {
    console.log("Passou")
} else if (nomeAluno === "João" && idadeAluno >= 14) {
    console.log("Aqui passa!")
}

if((1 == 1 && 3 > 2) && false) {
    console.log("Passou");
} else if (nomeAluno === "João" && idadeAluno >= 14) {
    console.log("Aqui passa!")
}

// Operador lógico
// || e OR
// False se ambas falsas
var idadeAluno = 16
var sexoAluno = "Masculino"

if(sexoAluno == "Masculino" || idadeAluno > 14) {
    console.log("Cadastrar na equipe Masculina")
} else {
    console.log("Não pode cadastrar")
}

// Operador lógico
// ! e NOT
// Inverte o valor (True para False) e (False para True)
if(!true) {
    console.log("Passou bem")
}

if(!false) {
    console.log("Inverteu")
}

var nome = "Matheus"
if(!(nome == "Matheus")) {
    console.log("Ok")
} else {
    console.log("Inverteu no ELSE")
}

// Duas expressões lógicas
// Isolar as expressões
// Condição: (valor1 && valor2 || valor3) -> (V && F) ou F -> F ou F -> F
// Condição: (valor1 && valor2 || valor3) -> (V && V) ou F -> V ou F -> V
// Condição: (valor1 && valor2 || valor3) -> (V && F) ou V -> F ou V -> V
// Condição: (valor1 && valor2 || valor3) -> (F && F) ou V -> F ou V -> V

if(nome == "João" && 15 > 20 || 10 > 10) {
    console.log("testando")
} else {
    console.log("não testou")
}

// Condição: valor1 e (valor2 ou valor3) -> F e (V) -> F e V -> F
// Condição: valor1 e (valor2 ou valor3) -> F e (F) -> F e F -> F
// Condição: valor1 e (valor2 ou valor3) -> V e (V) -> V e V -> V
if(nome == "Pedro" && (15 > 20 || 10 > 10)) {
    console.log("testando")
} else {
    console.log("não testou")
}