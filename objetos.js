/*Funções construtoras*/

//Cria função construtora de carro e depois novos objetos
function Carro(marca, preco) {
    this.marca = marca;
    this.preco = preco;
}

const honda = new Carro('honda', 3000)
const fiat  = new Carro('fiat', 4000)

//Cria função construtora pessoa (que possui um metodo dentro) e cria novos objetos
function RpgCharacter(nome, nivel, classe){
    this.nome = nome;
    this.nivel = nivel;
    this.classe = classe;
    this.textoRpg = function(){
      console.log(this.nome + ' está no nível ' + this.nivel + ' e é da classe ' + this.classe)
    }
  }
  
  const joao = new RpgCharacter('João', 20, 'ladino')
  const frei = new RpgCharacter('Frei', 10, 'trickster')
  
  console.log(joao.nome)
  console.log(joao.nivel)
  console.log(joao.classe)
  joao.textoRpg()
  frei.textoRpg()

//Função construtora que substitui querySelector no codigo inteiro
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

//Função construtora que pode substituir querySelectorAll no codigo inteiro
function Seletor(itens){
    const selecionados = document.querySelectorAll(itens)
    
    this.addClasse = function(classe){
      selecionados.forEach((item)=>{
        item.classList.add(classe)
      })
    }
  }
  
  const slaMano = new Seletor('li')
  slaMano.addClasse('ativo')
  slaMano.removeClasse('ativo')


/*Math random*/ 

//Como selecionar um numero aleatorio entre 90 e 100
var fodase = Math.floor(Math.random() * (100 - 90 + 1) + 90)
console.log(fodase)


/*Array*/

//Preenche a array com a string banana desde o inicio por 3 espaços
console.log(['item1', 'item2', 'item3', 'item4'].fill('banana', 0, 3))


//Duas formas de se concatenar itens de arrays diferentes em uma só
var transporte1 = ['barco', 'aviao']
var transporte2 = ['carro', 'moto']

transporte1.concat(transporte2, 'teste', 'oi')
transportes.concat(transporte1, transporte2)


const linguagens = ['html', 'css', 'js', 'php', 'python']

//Une os itens do array linguagens em uma string' e adiciona espaços entre eles
linguagens.join(' ')

//Cria um clone do array 
const cloneLinguagens = linguagens.slice()


//Retorna elementos selecionados de uma array em uma nova array (inclui o argumento inicial, mas não o final, apenas os antes dele (estranho, sim, eu sei))
linguagens.slice(3) //['php', 'python']
linguagens.slice(1, 4) //['css', 'js', 'php']


arrayRandom.pop() //Deleta o ultimo item do array
arrayRandom.unshift() //adiciona item ao inicio da array
arrayRandom.push() //adiciona item ao final da array
arrayRandom.shift() //remove item do inicio da array
arrayRandom.pop() //remove item do final da array
arrayRandom.sort() //organiza por ordem alfabetica
arrayRandom.includes('joana') //verifica se o array possui item e retorna true ou false
arrayRandom.indexOf('joana') //verifica se o array possui item e retorna o index do primeiro item encontrado
arrayRandom.lastIndexOf('joana') //verifica se o array possui item e retorna o index do utlimo item encontrado
arrayRandom = arrayRandom.split('h1').join('h2') //troca os h1 por h2 por algum motivo



/*Arrays e iterações*/

//Pra cada parametro, imprime no console
carros = ['ford', 'fusca', 'fodas']

carros.forEach(function(item, index, array){
    console.log(item, index, array)
})


//Troca os itens da array por nsei
carros = ['ford', 'fusca', 'fodas']

carros.forEach(function(item, index){
    carros[index] = 'nsei'
    console.log(carros)
})

console.log(carros)


//prototipo do bot da roleta :kehehehe:
const curtidores = [
  {
    nome: 'Code',
    ID: 1,
  },
  {
    nome: 'Zebra',
    ID: 2,
  },
  {
    nome: 'Carvalho',
    ID: 3,
  },
  
]

function roletaKick(){
  var sorteado = curtidores[Math.floor(Math.random()*((3-0)))].nome
  console.log(sorteado)
}
roletaKick()


//Esse lixo fdp do caralho do reduce

const kicks = [
  {usuario: 'Kazuma', kicks: 999 },
  {usuario: 'Zebra', kicks: 550 },
  {usuario: 'Hondinha', kicks: 250 },
  {usuario: 'Carvalho', kicks: 150 },
  {usuario: 'Eddie', kicks: 2 },
]

const kicksTotais = kicks.reduce((acumulador, elementoAtual) => acumulador + elementoAtual.kicks, 0)
console.log(kicksTotais)

//Reduce, só que ao contrario
arrayRandom.reduceRight()


//Verifica se o item mencionado na função anonima existe no array e retorna true ou false
const usuarios = ['code', 'zebra', 'carvalho']

const foiKickado = usuarios.some((item) => {
    return item === 'zebra';
})

console.log(foiKickado)


//Verifica se TODOS os itens mencionados na função anonima existem no array e retorna true ou false
const usuarios = ['code', 'zebra', 'carvalho']

const foiKickado = usuarios.every((item) => {
    return item === 'zebra';
})

console.log(foiKickado)

//2º exemplo, verifica se a condição é verdadeira para todos os itens no array e retorna true ou false
const numeros = [10, 5, 8]
const maiorQue3 = numeros.every(function(item) {
  return item > 3;
})
console.log(maiorQue3)


//Encontra o index do objeto buscado na array
const usuarios = ['code', 'zebra', 'carvalho']

const buscaKick = usuarios.findIndex((item) => {
    return item === 'zebra';
})

console.log(buscaKick)


//Encontra o primeiro valor da array cuja condição seja verdadeira
const numeros = [4, 6, 22, 100]
const buscaMaior30 = numeros.find(item => item > 30)
console.log(buscaMaior30)

//2º exemplo
const usuarios = ['code', 'zebra', 'carvalho']
const nomeGrande = usuarios.find(item => item.length > 5)
console.log(nomeGrande)

//Filter, tipo o find, mas cria um array com todos os seus resultados verdadeiros 
const usuarios = ['code', 'zebra', 'carvalho']
const nomeGrande = usuarios.filter(item => item.length > 2)
console.log(nomeGrande)


//Cria um array com objetos que contem a classe selecionada
const cursos = document.querySelectorAll('.curso')
const arrayCursos = Array.from(cursos);

const objetosCurso = arrayCursos.map((item) => {
  const titulo = item.querySelector('h1').innerText;
  const descricao = item.querySelector('p').innerText;
  const aulas = item.querySelector('.aulas').innerText;
  const horas = item.querySelector('.horas').innerText;
  return {
    titulo: titulo,
    descricao: descricao,
    aulas: aulas,
    horas: horas,
  }
})


//Desafio do krl

const compras = [
  {
    compra: 'banana',
    preco: 'R$ 10,00',
  },
  {
    compra: 'maca',
    preco: 'R$ 20,00',
  },
  {
    compra: 'abacaxi',
    preco: 'R$ 30,00',
  },
  {
    compra: 'melancia',
    preco: 'R$ 40,00',
  }
]

const precos = compras.map((item) => {
  return item.preco
})

const precosCorretos = precos.map((item) => {
  return +item.replace('R$ ', '').replace(',', '.')
})

const somaTotal = precosCorretos.reduce((acumulador, elementoAtual) => {return acumulador + elementoAtual}, 0)

console.log(precosCorretos)
console.log(somaTotal)


//Exemplo 3 de Reduce
var numeros = [1, 2, 3, 4, 5, 6];
var total = numeros.reduce(function(total, numero){
  return total + numero;
}, 0);
console.log(total);


/*Funções*/


//Exemplo random de função só de zoas
function otavioOpressor(quantiaOprimidosOntem, quantiaOprimidosHoje){
  console.log(`ontem e hoje ${quantiaOprimidosOntem + quantiaOprimidosHoje} foram oprimidos`)
}

otavioOpressor(25, 50)

arrayRandom.length //retorna quantos parametros tem na função


//Call
const RpgCharacter = {
  nome: 'Frei',
  classe: 'ladino',
  nivel: 20
}

function imprimeConsole() {
  console.log(`${this.nome} ${this.nivel} ${this.classe}`)
}

imprimeConsole() //undefined undefined undefined
imprimeConsole.call(RpgCharacter) // Frei 20 ladino
imprimeConsole.call({nome: 'Frei', nivel: '20', classe: 'ladino'}) // Frei 20 ladino

//Call 2
function imprimeConsole(hp) {
  console.log(`${this.nome} ${this.classe} ${this.nivel} ${hp}`)
}
imprimeConsole.call({nome: 'Frei', classe: 'ladino', nivel: 20}, 150) // Frei 20 150


//Apply - muito parecido com o metodo Call, voce pode escrever um método que pode ser usado em diferentes objetos, a unica diferença é que o call recebe argumentos separados enquanto o apply recebe argumentos de uma array

Math.max(1, 2, 3, 4, 5) // 5

var numeros = [1, 2, 3, 4, 5]

Math.max(numeros) //NaN
Math.max.apply(numeros) //-Infinity
Math.max.apply(null, numeros) // 5

//Apply 2
var rpgCharacter = {
  nomeCompleto: function() {
    return this.primeiroNome + " " + this.segundoNome;
  }
}
var pessoa1 = {
  primeiroNome: "Frei",
  segundoNome: "Smith"
}
rpgCharacter.nomeCompleto.apply(pessoa1);  // Frei Smith


//Bind - funciona de uma maneira diferente do call e do apply, ao invés de executar uma função, este retorna uma nova função. O seu primeiro parâmetro continua recebendo o valor que será atribuído ao this e os demais argumentos serão os parâmetros que definirão os valores atribuídos da primeira função.


function sumNumbers(firstNumber, secondNumber) {
	const sum = this + firstNumber + secondNumber;

	console.log(sum)
}

const bindResultFunction = sumNumbers.bind(5, 7)

bindResultFunction(5) // 17

//Bind 2, Argumentos comuns
//Podemos passar argumentos muito usados para uma função e retornar uma nova função
function imc(altura, peso) {
  return peso / (altura * altura);
}

const imc180 = imc.bind(null, 1.80)

imc(1.80, 70) // 21.6
imc180(70) //21.6


//Somar total de caracteres em paragrafos

const paragrafos = document.querySelectorAll('p')

const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
  return acumulador + item.innerText.length;
}, 0)

console.log(totalCaracteres)
console.log(paragrafos)


//Função criadora de conteudo

function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? elemento.innerHTML = conteudo : null;
  return elemento;
}

elementoCriado = criarElemento('li', 'azul', 'Esse é o conteudo')

const lista = document.querySelector('ul')
lista.appendChild(elementoCriado)


//Função criadora de conteudo mas sempre cria h1 com a classe titulo e parametro continua dinamico

const h1Titulo = criarElemento.bind(null, 'h1', 'titulo')

const cursosJS = h1Titulo('Cursos de JS')
const cursosHTML = h1Titulo('Cursos de HTML')

console.log(cursosJS, cursosHTML)



/*Objetos*/

//Assign - atribui propriedades de um objeto a outro / substitui valores das propriedades se atribuir uma nova com o mesmo nome

const carro = {
  rodas: 4,
  tipo: 'automovel',
}

const veloster = {
  portas: 3,
  motor: 1.6,
  quantiaCavalos: 128,
  compradores: 'playboys putos',
  caracteristica: 'MERDA DE CARRO!'
}

Object.assign(veloster, carro)

console.log(veloster)

//Alternativa: spread operator

let carro = {
  rodas: 4,
}

let veloster = {
  portas: 3,
}

veloster = {...veloster, carro}

console.log(veloster)

veloster = { ...veloster, portas: 4, carro } //altera propriedades existentes


//Object.is(item1, item2) - verifica se itens sao OS MESMOS (não é possuirem o mesmo conteudo) e retorna true ou false

const carros1 = ['Uno de firma']
const carros2 = ['Uno de firma']

Object.is(carros1, carros2); //False

const carros1 = ['Uno de firma']
const carros2 = carros1

Object.is(carros1, carros2); //True

Object.freeze() //impede qualquer mudança nas propriedades
Object.seal() //previne a adição de novas propriedades e impede que deletem as atuais
Object.preventExtensions() //previne a adição de novas propriedades

//toString() - converte conteudo para string, não converte conteudo de objetos em strings
const numero = 25;
numero.toString() //'25'

//Como verificar tipos de objetos
Object.prototype.toString.call(carros1) //object array
Object.prototype.toString.call(carro) //object object
Object.prototype.toString.call(criarElemento) //object function 


//Se criar um objeto com defineProperties, nao é possível alterar o valor de dentro dele

const quadrado = {}
Object.defineProperties(quadrado, {
  lados: {
    value: 4,
    enumerable: true,
  }
})

quadrado.lados = 10 //não funciona, rs, lados continua sendo 4


//Lista todas as propriedades de algo
console.log(Object.getOwnPropertyNames(String.prototype))
console.log(Object.getOwnPropertyNames(Array.prototype))
