// DOM
// Acessar elementos do HTML
// Document > HTML > Head > Title > MyPage
// Document > HTML > Body > h1 > Mobile OS
// Document > HTML > Body > ul > li > Android || iOS

// tag
var titulo = document.getElementsByTagName('h1')[0]
console.log(titulo)

var lis = document.getElementsByTagName('li')
console.log(lis[3])

// id
var paragrafo = document.getElementById('paragrafo')
console.log(paragrafo)

// class
var itensDaLista = document.getElementsByClassName('item')
console.log(itensDaLista)

// querySelector e querySelectorAll
var itensClasse = document.getElementsByClassName('item')
console.log(itensClasse)

// query com id #
var itensQuery = document.querySelectorAll('#lista2 li')
console.log(itensQuery)

// query com classe .
var itensQueryTodos = document.querySelectorAll('.item')
console.log(itensQueryTodos)

// selecionando elemento
var title = document.querySelector("#title")
console.log(title)

// innerHTML e textContent
title.innerHTML = "Testando o texto alterado!"

// Mais utilizado, recomendado e performático
var subtitle = document.querySelector(".subtitle")
console.log(subtitle)

subtitle.textContent = "Testando o textContent"