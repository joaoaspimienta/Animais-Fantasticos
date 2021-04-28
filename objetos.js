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