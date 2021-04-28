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


//Como selecionar um numero aleatorio entre 90 e 100
var fodase = Math.floor(Math.random() * (100 - 90 + 1) + 90)
console.log(fodase)


//Preenche a array com a string banana desde o inicio por 3 espaços
console.log(['item1', 'item2', 'item3', 'item4'].fill('banana', 0, 3))


//Duas formas de se concatenar itens de arrays diferentes em uma só
var transporte1 = ['barco', 'aviao']
var transporte2 = ['carro', 'moto']

transporte1.concat(transporte2, 'teste', 'oi')
[].concat(transporte1, transporte2)


//Verifica se o array possui o item e retorna true ou false
[].includes(item)
//Verifica se o array possui o item e retorna o index do primeiro item encontrado, tambem tem o [].lastIndexOf(item) que pega o ultimo item encontrado 
[]indexOf(item)


//Une os itens do array linguagens em uma string' e adiciona espaços entre eles
linguagens.join(' ')


//Cria um clone do array 
const linguagens = ['html', 'css', 'js', 'php', 'python']
const cloneLinguagens = linguagens.splice()

//
linguagens.slice(3) //['php', 'python']
linguagens.slice(1, 4) //['css', 'js', 'php']