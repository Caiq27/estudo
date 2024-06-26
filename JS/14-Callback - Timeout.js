// // setTimeout - Depois de X tempo
// // setInterval - A Cada X tempo
// // Necessita de callback

// setTimeout(function() {
//     console.log("Testando o setTimeout")
// }, 2000 )

// console.log("Antes do setTimeout")

// setInterval(function() {
//     console.log("Testando setInterval")
// }, 1000 )

// // clearTimeout e clearInterval
// // Parar setTimeout / setInterval
// var x = 0
// var myTimer = setTimeout(function() {
//     console.log("O x é 0")
// }, 1500)

// x = 5
// if (x > 0) {
//     clearTimeout(myTimer)
//     console.log("O x passou de 0")
// }


// var myInterval = setInterval(function() {
//     console.log("Imprimindo interval")
// }, 500)

// setTimeout(function(){
//     console.log("Não precisamos mais repetir!")
//     clearInterval(myInterval)
// }, 1500)
