// CONCEITO
// Só aceita declara variavel com _ na frente
// Sintaxe
// var variavel = valor;
var teste = 1;
var nome = "João";
var sobrenome = 'Ribeiro';
var idade = '18'
var CPF = "38912359300"

// Comando
console.log(teste) // Exibir na console
document.write("Olá Mundo!") // Escrever na página

// Number
console.log(teste);
console.log(typeof teste);

// String
console.log(nome);
console.log(typeof nome);
console.log(sobrenome);
console.log(typeof sobrenome);

// Numero entre aspas é string
console.log(idade);
console.log(typeof idade);
console.log(CPF);
console.log(typeof CPF);
console.log(typeof "1,80");

teste = 'Matheus'; // Declarando variavel e atribuindo valor
console.log(teste); // Retorna na tela a palavra Matheus
console.log(nome); // Retorna na tela a palavra João - valor atribuindo a variavel nome

// Texto entre aspas
document.write('Ele disse: "Olá"')
document.write("Ele disse: 'Olá'")

console.log("Este número:" + " " + idade + ", " + "é a idade de" + " " + nome)

// Diferença de Uppercase e Lowercase
var meuNome;
console.log (meuNome); // Retorna na tela undefined - não atribuiu valor a variavel

meuNome = "Matheus";
console.log(meuNome);

var meuPrimeiroNome = 'Matheus';
console.log (meuPrimeiroNome);

var meuSobrenome = 'Battisti';
console.log(meuSobrenome);

// Concatenar variavies
var nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);

var frase = "está é uma frase complexa"
console.log(nome + " " + frase) // Inserir espaço entre variaveis

var frase = " está é uma frase complexa"
console.log(nome + frase)

// Existe particularidades entre VAR LET e CONST
let testando = 1;
const ola = 2;

console.log(testando);
console.log(ola);


// VARIAVEIS
// Number, String, Boolean, null e undefined, Object
// Verificar com typeof

// Number: +Infinity -Infinity e NaN
var numero = 5;

console.log(numero);
console.log(typeof numero);

// Float para valor decimal ou fracionado
var float = 1/3
console.log(float)
console.log(typeof float)

var float = 5.22;
console.log(float);
console.log(typeof float);

var textoComNumero = '321';
console.log(textoComNumero);
console.log(typeof textoComNumero); // Retorna String

console.log(NaN);
console.log(typeof Nan); // Retorna undefined


// BOOLEAN
// Verdadeiro ou Falso
var Verdadeiro = true;
console.log(Verdadeiro); // Retorna o valor atribuido
console.log(typeof Verdadeiro); // Retorna o tipo de variavel - boolean
console.log(typeof true); // Retorna o tipo de variavel - boolean
console.log(typeof false); // Retorna o tipo de variavel - boolean

var falso = false;
console.log(falso);
console.log(typeof falso);

// Nome da variavel reservado para função - apresentará erro
// var true = 3;

// UNDEFINED E NULL
var estado = null;
var cidade;

console.log(estado);
console.log(typeof estado);
console.log(cidade);
console.log(typeof cidade);


// OBJETO {}
// Sintaxe
// var variavel_de_objeto = { propriedade: valor1, propriedade: valor2}
var obj2 = {
    nome: "Caique",
    idade: 32,
    profissao: "TI"
};

console.log(obj2);
console.log(typeof obj2);

console.log(obj2.nome);
console.log(obj2.idade);
console.log(obj2.profissao);

var obj = {
    nome: "Matheus",
    idade: 29,
    profissao: "Programador"
};

console.log(obj);
console.log(typeof obj);

console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);

console.log("O meu nome é " + obj.nome);

obj.nome = "Jão";
console.log(obj.nome);

obj.graduacao = true;
console.log(obj);


// ARRAYS []
// Sintaxe
// var variavel = [valor1, "valor2", true/false, {propriedade1: valor4, propriedade2: valor5}]

// Indice inicia em 0
var arr = [5, "Matheus", true, {teste: 1, teste: 2}];

// Exibir determinado indice
// console.log(variavel[indice])
console.log(arr);
console.log(arr[1]);

// Exibir valor de indice 3 que é o 4º Valor
var arr2 = [2,3,4,5,6];
console.log(arr2[3]);

// Inserir elemento no array
// variavel[indice] = novoValor;
arr[4] = 10;
arr[0] = "Teste";

console.log(arr);
console.log(arr[0]);
console.log(typeof arr);