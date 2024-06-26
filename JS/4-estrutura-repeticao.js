// Estrutura de repetição
// WHILE e FOR
var x = 0

while (x < 5) {
    console.log("Testando repetição " + x)

    // incrementador
    x++
}

var arr = ['teste', 'testando', 'a', 'b']
var y = 0

while (y <= 3) {

    // passando pelo Array
    console.log(arr[y]);

    y++
}

var palavra = 'Matheus'
var i = 0

while (i <= 6) {

    // passando letra por letra
    console.log(palavra[i])
    i++
 }

// Declarar variavel; Enquanto; Limitar
for (var i = 0; i < 10; i++) {
    console.log("Repetindo for: " + i)
}

var arr = [1,2,3,4]

// arr.length = Tamanho do array 
for (var j = 0; j < arr.length; j++) {
    console.log(arr[j])
}

console.log(arr.length)

for (var x = 5; x < 100; x *= 3) {
    console.log(x)
}

//  Operadores de Atribuição
// += Resumo de x = x + y
// -= Resumo de x = x - y
// *= Resumo de x = x * y
// /= Resumo de x = x / y
// ++ Resumo de x = x + 1
// -- Resumo de x = x - 1
var x = 1
var y = 2

// Soma
console.log(x = x + y)
console.log(x += y)

// Subtração
console.log(x -= y)

// Multiplicação
console.log(x *= y)

// Divisão
console.log(x /= y)

// Loops
console.log(x++)
console.log(x--)

x = 1

while (x <= 100) {
    console.log(x)
    x *= 2
}

console.log(x)

var j = 5

while (x > 0) {
    console.log(x)
    x -= j
}

// Estrutura de Repetição
// Break e Continue

// Break - Encerrar uma instrução
for (var i = 10; i > 0; i--) {
    console.log(i)
    
    if (i === 5) {
        break // Para a instrução no valor 5
    }
}

console.log("Deu o break")

// Continue - Pular uma instrução
var x = 10

while (x < 100) {

    x += 10

        if(x === 60 || x === 90) {
            console.log("CONTINUE")
            continue // Não exibe o valor 60
        }

        console.log("Testando continue " + x)
}

