//Cria função construtora de carro e depois novos objetos
function Carro(marca, preco) {
    this.marca = marca;
    this.preco = preco;
}

const honda = new Carro('honda', 3000)
const fiat  = new Carro('fiat', 4000)

//Cria função construtora pessoa (que possui um metodo dentro) e cria novos objetos
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.andar = function andar(){
        console.log(this.nome + ' andou')
    }
}

const joao = new Pessoa('João', 20)
const maria = new Pessoa('Maria', 15)

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
function Dom(seletor){ 
    const elementList = document.querySelectorAll(seletor)
    this.elements = elementList
    this.addClass = function(classe){
        elementList.forEach((element) => {
            element.classList.add(classe)
        })
    }
    this.removeClass = function(classe){
        elementList.forEach((element) => {
            element.classList.remove(classe)
        })
    }
}

const listaItens = new Dom('li')
listaItens.addClass('ativar') 