//seleciona imagens e para cada imagem, loga no console 

var imagens = document.querySelectorAll('img');

imagens.forEach(function(item, index)
{
    console.log(item, index)
});


//seleciona os paragrafos e loga os textos deles (e index deles)

var paragrafos = document.querySelectorAll('p')

paragrafos.forEach((item, index) => console.log(item.innerText, index))


//Seleciona classe titulo, adiciona uma classe nova e adiciona outra classe na condição do if/else

var seletorH1 = document.querySelector('.titulo');

seletorH1.classList.add('otavioMachista')

if (seletorH1.classList.contains('otavioMachista')){
    seletorH1.classList.add('huehue');
} else {
    seletorH1.classList.add('nao é BR');
}


//Pega o atributo do elemento selecionado

var primeiraImagem = document.querySelector('img');

console.log(primeiraImagem.getAttribute('src'));

//Adiciona o atributo alt="raposa" no elemento
primeiraImagem.setAttribute('alt', 'Raposa');


//Seleciona todos os itens do menu e add a classe raposa

var itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach((item) => {
    item.classList.add('Raposa');
});

//Seleciona imagens de zebra, e ao click, adiciona a classe "gigante"
const zebraClick = document.querySelectorAll('.imagemZebra')

zebraClick.forEach((item) => item.addEventListener ('click', () => item.classList.toggle('gigante')))
