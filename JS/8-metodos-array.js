// MÉTODOS ARRAYS
// length - Quantidade de indice
var arr = [1,2,3,4,5]
console.log(arr.length)

// Length - Acessa o último elemento
console.log(arr[arr.length - 1])

// push - Insere valor no final
arr.push(6)
arr.push('No final')

console.log(arr)

// pop - Remove valor do final
arr.pop()
console.log(arr)

// unshift - Insere valor no inicio
arr.unshift(0)
console.log(arr)

// shift - Remove valor do inicio
arr.shift()
console.log(arr)

// Splice - Insere/Remove elemento no meio do Array com base no indice
// indice, quantidade a deletar, valor inserido
var arr = [1,2,3,4,5]
console.log(arr)

// Splice - Inserindo
arr.splice(2, 0, 999)
console.log(arr)

arr.splice(2, 0, 999)
console.log(arr)

// Splice - Removendo
arr.splice (4, 1)
console.log(arr)

// join - Insere elemento entre valores do array
var arr2 = ["O", "rato", "roeu", "a", "roupa"]
console.log(arr2.join(","))
console.log(arr2.join(" "))
console.log(arr2)

// reverse - Inverte a ordem do array
console.log(arr2.reverse())

// indexOf - Localiza a posição do valor
console.log(arr.indexOf(999))

// isArray - Verifica se é array ou não
console.log(Array.isArray(5))
console.log(Array.isArray(arr))


