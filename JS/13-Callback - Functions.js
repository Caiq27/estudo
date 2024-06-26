// Função de callback
function exibir (num) {
    console.log("A Operação resultou em " + num)
}

// Função de operação
function soma (a, b, callback) {
    var op = a + b
    callback(op)
}

// Função de operação
function multiplicacao (a, b, cb) {
    var op = a * b
    cb(op)
}

// Neste momento que aplica o callback
soma (2, 4, exibir)

// Neste momento que aplica o callback
multiplicacao (3, 6, exibir)