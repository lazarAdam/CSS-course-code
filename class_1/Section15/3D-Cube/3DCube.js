const cub = document.querySelector('.cube')
const input_group = document.querySelector('.control-group')
let body = document.querySelector("html")
let cur_class = ``

let x_direction = ''
let y_direction = ''

let old_X =0;
let old_y =0;

input_group.addEventListener('change', (event) => {
    let side = event.target.value
    let show_class = `show-${side}`
    if (cur_class) {
        cub.classList.remove(cur_class)
    }
    cur_class = show_class
    cub.classList.add(cur_class)

    console.log('trig')
})




body.addEventListener('mousemove',(e)=>{



    old_X < e.clientX?x_direction = 'RIGHT':x_direction = 'LEFT'

    old_y < e.clientY? y_direction = 'Down':y_direction = 'UP'


    old_X = e.clientX
    old_y = e.clientY

    console.log(`You are moving ${x_direction} in x direction and ${y_direction} in the Y direction`)
    console.log(`x:=${e.clientX} || Y:=${e.clientY}`)
})