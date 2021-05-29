const backdrop = document.querySelector('.backdrop')
const btn = document.querySelectorAll('.plan button')
const modal = document.querySelector('.modal')
const modal_no = document.querySelector('.modal__actions button')
const toggle_Button = document.querySelector('.toggle-button')
const mobil_nav = document.querySelector('.mobile-nav')
const cta_btn = document.querySelector(".main-nav__item--cta")

btn.forEach((node) => {

    node.addEventListener('click', () => {
        // modal.style.display = 'block'
        // backdrop.style.display ='block'

        modal.classList.add('open')
        backdrop.style.display = 'block'
        setTimeout(()=>{
            backdrop.classList.add('open')

        },200)
    })
})


backdrop.addEventListener('click', () => {
    mobil_nav.classList.remove('open')
    closeModal()

})


toggle_Button.addEventListener('click', () => {

    mobil_nav.classList.add('open')
    backdrop.style.display = 'block'


    setTimeout(()=>{
        backdrop.classList.add('open')

    },200)
})

if (modal_no){
    modal_no.addEventListener('click', closeModal)
}


function closeModal() {

    if (modal){
        modal.classList.remove('open')
    }

    backdrop.classList.remove('open')
    setTimeout(()=>{
        backdrop.style.display = 'none'
    },200)


}

cta_btn.addEventListener('animationstart', (event)=>{
    console.log("animation started", event)
})

cta_btn.addEventListener('animationend', (event)=>{
    console.log("animation ended", event)
})

cta_btn.addEventListener('animationiteration', (event)=>{
    console.log("animation iteration", event)
})