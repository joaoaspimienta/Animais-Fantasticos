export default function initModal(){
    const containerModal = document.querySelector('.modal-container')
const botaoAbrir = document.querySelector('[data-modal="abrir"]')
const botaoFechar = document.querySelector('[data-modal="fechar"]')

if(botaoAbrir && botaoFechar && containerModal){
    function toggleModal(event) {
        event.preventDefault()
        containerModal.classList.toggle('ativo')
    }

    function cliqueForaModal(event) {
        if(event.target===this) {
            toggleModal(event)
        }
    }


    botaoAbrir.addEventListener('click', toggleModal)
    botaoFechar.addEventListener('click', toggleModal)
    containerModal.addEventListener('click', cliqueForaModal)
    }
}

