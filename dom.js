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


//Adiciona apenas na terceira zebra a classe gigante

zebraClick[2].classList.add('gigante')


//Como alterar um conteudo com js no html

const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://www.google.com');

console.log(link)


//Seleciona imagens e inverte a cor no click
const imgInvert = document.querySelectorAll('img')

imgInvert.forEach((item) => item.addEventListener('click', (() => item.classList.toggle('invertido'))))

//Distancia do topo (.offsetHeight para ver altura do objeto)

const raposa = document.querySelector('img')

console.log(raposa.offsetTop); 


// Verifica se a janela tem no maximo 400px e retorna true ou false
const query = window.matchMedia('(max-width: 400px)');

if(query.matches) {
    console.log('ta batendo')
} else {
    console.log('n ta batendo')
}

// Seleciona os links e verifica se altura/largura sao maiores que 48px

var links = document.querySelectorAll('a')

links.forEach((item) => {
    const altura = item.offsetHeight;
    const largura = item.offsetWidth;
    if(altura >= 48 && largura >= 48) {
        console.log('opcao 1')
    } else { console.log('opcao 2')

    }
}
)

//Verifica tamanho do browser e adiciona uma classe pra confirmação
if (window.matchMedia('(max-width: 8800px)').matches){

    const menu = document.querySelector('.menu')
    menu.classList.add('menu-mobile')}



//Mostra mensagem ao teclar algo, console.log ao scrollar
function teclaPress (event) {
    if(event.key==='a') {
        alert('a')
    } else {
        alert ('outra coisa')
    }
}

window.addEventListener('keydown', teclaPress)

window.addEventListener('scroll', () => console.log('scroll'))


//Detecta todos elementos do site e remove ao click

const todosElementos = document.querySelectorAll('body *')

function removeElemento(event) {
    event.currentTarget.remove();
}

todosElementos.forEach((event) => {
    event.addEventListener('click', removeElemento)
})


//Seleciona todo o site e ao clicar no T, adiciona a classe textoGrande
const siteTodo = document.querySelector('html');

function clicouT(event){
    if(event.key==="t"){
        siteTodo.classList.toggle('textoGrande')
    }
}

window.addEventListener('keydown', clicouT)

//Seleciona h1 do site e troca o texto ao clique

const titulo = document.querySelector('h1')

function trocaTexto() {
    titulo.innerText = 'Zebra é chata'
}

titulo.addEventListener('click', trocaTexto)


//Cria um novo elemento, troca o texto, add uma classe e posiciona no site
const mapa = document.querySelector('.mapa')

const novoh1 = document.createElement('h1');

novoh1.innerText = 'Novo Título'
novoh1.classList.add('titulo')

mapa.appendChild(novoh1)


//Clona elementos e adiciona na pagina
const faq = document.querySelector('.faq')
const h1 = document.querySelector('h1')

const cloneH1 = h1.cloneNode(true)

faq.appendChild(cloneH1)


//Seleciona as classes da lista de imagens e do container das sections de texto dos animais, e então se as classes existirem, ao clicar nos itens da lista de imagens, executa a função activeTab, que remove todas as classes de ativo e então adiciona a classe ativo no elemento clicado

const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

if(tabMenu.length && tabContent.length){
    tabContent[0].classList.add('ativo')

    tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            activeTab(index);
        })
    });

    function activeTab(index) {
        tabContent.forEach((section) => {
            section.classList.remove('ativo');
        });
        tabContent[index].classList.add('ativo');
    }    
}


//Seleciona todos os DTs, adiciona classe ativo ao dt e vizinho (dl) e ao clique, toggle classe ativa no dt e vizinho 
function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'ativo';

    if(accordionList.length){
    accordionList[0].classList.add(activeClass)
    accordionList[0].nextElementSibling.classList.add(activeClass)


    function activeAccordion() {
        this.nextElementSibling.classList.toggle(activeClass)
        this.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
        item.addEventListener('click', activeAccordion);
    })
  }
}
initAccordion();


//Maneira 1 (pior) de criar um scroll suave pro elemento do nav do site ao clique

const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const topo = section.offsetTop;

    window.scrollTo({
        top: topo,
        behavior: 'smooth',
});
}

linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection)
})

//Maneira 2 (melhor) de criar um scroll suave pro elemento doo nav do site ao clique

const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
}

linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection)
})


//Seleciona sections, pega a posição referente ao topo de cada section e se essa posição for menor que 0.6 da tela, adiciona a classe ativo (que faz um efeito de opacidade e transição pra tela, o mesmo acontece ao contrario ao subir)

const sections = document.querySelectorAll('.js-scroll');
const windowMetade = window.innerHeight * 0.6;


function animaScroll(){
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0; 
        if(isSectionVisible)
            section.classList.add('ativo');
        else
            section.classList.remove('ativo');
    })
}

animaScroll();

window.addEventListener('scroll', animaScroll);


//Usando objeto construtor pra nao precisar ficar repetindo querySelector

function Dom(seletor) {
    this.element = function(){
        return document.querySelector(seletor)
    }
    this.ativar = function(classe) {
        this.element().classList.add(classe)
    }
}

const li = new Dom('li')
const ul = new Dom('ul')

const lastLi = new Dom('li:last-child')
lastLi.ativar();


//Obs:
//classList.add não precisa do ponto (exemplo), mas querySelector sim (.exemplo)

//Não esquecer do forEach quando tiver varios elementos a serem manipulados

//em addEventListener deve-se passar a função dentro de uma função anonima, se simplesmente colocar la funcao(parametro), a função seria executada independente do clique