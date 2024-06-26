// Eventos
// Animação de menu abrindo e fechando
// Movimento do mouse, click, mouse entrando
// saindo de um elemento, carregamento da página

// Onload - Ao carregar página
window.onload = function() {

    console.log("Carregou o DOM")

}

console.log("Carregou o JS")

// Click - Ao clickar
var btn = document.querySelector("#btn")
console.log(btn)

btn.addEventListener("click", function() {

    console.log("clicou")
    console.log(this)

    this.style.color = "red"

})

// Click 2 - Ao clicar
var title = document.querySelector("#title")

title.addEventListener("click", function() {

    var subtitle = document.querySelector(".subtitle")
    subtitle.style.color = "none"

})

// Click duplo
var subtitle = document.querySelector(".subtitle")
subtitle.addEventListener("dblclick", function() {
    
    console.log("click duplo!")

})

// MouseOver e MouseOut
// Quando passa o mouse em uma região
var title = document.querySelector("#title")

title.addEventListener("mouseover", function() {
    this.style.backgroundColor = "yellow"
})

// Quando tira o mouse de uma região
title.addEventListener("mouseout", function() {
    this.style.backgroundColor = "blue"
})

// keyDown e keyUp
document.addEventListener("keydown", function() {
    console.log(event.key)

    if(event.key === "Enter") {
        console.log("Apertou Enter")
    }
})


document.addEventListener("keyup", function(e) {
    if(event.key === "Enter") {
        console.log("Soltou o Enter")
    }
})

