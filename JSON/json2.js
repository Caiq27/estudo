// JSON -> objeto
// JSON.parse()
const json = '{"nome": "Matheus", "profissao": "Programador", "idade": 30}';

const data = JSON.parse(json)

console.log(data.nome)

// objeto -> JSON
// stringify
// JSON.stringify()
const paraJson = JSON.stringify(data)
console.log(paraJson)