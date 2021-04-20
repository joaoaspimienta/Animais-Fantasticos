function initTabNav(){
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if(tabMenu.length && tabContent.length){
        tabContent[0].classList.add('ativo')

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            });
            tabContent[index].classList.add('ativo');
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            })
        });
    }
}
initTabNav();


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


const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href)
    console.log(section)
    window.scrollTo(0, 1000)
}

linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection)
})