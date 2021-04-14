const element = document.querySelector('h1')

element.addEventListener('click', function(event){
    console.log(event)
})

var primeiraUl = document.querySelector('ul')

console.log(primeiraUl.innerText)

var todasImagens = document.querySelectorAll('img[src^="img/imagem"]')

console.log(todasImagens)

