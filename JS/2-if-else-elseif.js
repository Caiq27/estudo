// IF (condição) {exibir} 
// ELSE {(condição) exibir} - Negativa
// ELSE IF (condição) {exibir}
var idadeInfo = 17
var idadeMinima = 18
var idadeDiferenca = null 

console.log("Antes do if")

if (idadeInfo >= idadeMinima) {
    console.log("Pode fazer a carteira de habilitação")
}

else if (idadeDiferenca = (idadeMinima - idadeInfo)) {
    console.log("Precisa esperar " + idadeDiferenca + " anos ainda")
}

console.log("Depois do if")

// Validação de nome com condição de igualdade
var nome1 = 'Matheus'

if (nome1 == "Matheus") {
    console.log("O Seu nome é Matheus")
}

// Validação de nome com condição de diferença
var nome2 = 'Matheusinho'

if (nome2 != "Matheus") {
    console.log("O Seu nome não é Matheus")
}

// Validação de nome com condição IF / ELSE IF / ELSE
var nome3 = "Matheus";

if (nome3 == "Pedro") {
    console.log("O Nome dele é Pedro")
} else if (nome3 =="Matheus") {
    console.log("O Nome é Matheus!")
} else if (nome3 =="Xavier") {
    console.log("O Nome é Xavier!")
} else {
    console.log("Ele possui outro nome!")
}

// Validação de idade com condição IF / ELSE
var idadeFesta = 19

if(idadeFesta > 20) {
    console.log("Ele pode entrar na festa")
} else { (idadeFesta >= 18)
    console.log(idadeFesta)
    console.log("Ele só pode entrar na festa com autorização dos pais")
}

// Validação de idade com condição IF / ELSE IF
var idadeFesta = 19

if (idadeFesta > 20) {
    console.log("Ele pode entrar na festa")
} else if (idadeFesta >= 18) {
    console.log(idadeFesta)
    console.log("Ele só pode entrar na festa com autorização dos pais")
}

// === e !==
// Comparação de valor e tipo de dados
var numero = 5
var tipo = '5'

if (numero === 5) {
    console.log("O Número é 5")
} else if (tipo === '5') {
    console.log(typeof tipo)
}

if (numero !== '5') {
    console.log("Não é o número 5 do tipo number")
} else if (tipo !== '5') {
    console.log(typeof tipo)
}