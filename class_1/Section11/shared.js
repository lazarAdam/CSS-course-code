const backdrop = document.querySelector('.backdrop')
const btn = document.querySelectorAll('.plan button')
const modal = document.querySelector('.modal')
const modal_no = document.querySelector('.modal__actions button')
const toggle_Button = document.querySelector('.toggle-button')
const mobil_nav = document.querySelector('.mobile-nav')

btn.forEach((node) => {

    node.addEventListener('click', () => {
        // modal.style.display = 'block'
        // backdrop.style.display ='block'

        modal.classList.add('open')
        backdrop.classList.add('open')
    })
})


backdrop.addEventListener('click', () => {
    mobil_nav.classList.remove('open')
    callback()

})


toggle_Button.addEventListener('click', () => {

    mobil_nav.classList.add('open')
    backdrop.classList.add('open')
})

if (modal_no){
    modal_no.addEventListener('click', callback)
}


function callback() {

    if (modal){
        modal.classList.remove('open')
    }


    backdrop.classList.remove('open')
}
